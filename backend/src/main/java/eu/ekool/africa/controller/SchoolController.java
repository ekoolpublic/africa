package eu.ekool.africa.controller;

import eu.ekool.africa.dto.NearbySchoolDTO;
import eu.ekool.africa.dto.SchoolDTO;
import eu.ekool.africa.entity.School;
import eu.ekool.africa.entity.Student;
import eu.ekool.africa.entity.Distance;
import eu.ekool.africa.exception.ResourceNotFoundException;
import eu.ekool.africa.repository.SchoolRepository;
import eu.ekool.africa.repository.StudentRepository;
import eu.ekool.africa.repository.DistanceRepository;
import io.swagger.annotations.ApiOperation;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Type;
import java.util.List;
import java.util.ArrayList;
import java.util.Optional;
import java.math.BigDecimal;

@CrossOrigin
@RestController
public class SchoolController {

    private final SchoolRepository schoolRepository;
    private final StudentRepository studentRepository;
    private final DistanceRepository distanceRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public SchoolController(SchoolRepository schoolRepository, StudentRepository studentRepository,
            DistanceRepository distanceRepository, ModelMapper modelMapper) {
        this.schoolRepository = schoolRepository;
        this.studentRepository = studentRepository;
        this.distanceRepository = distanceRepository;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/schools")
    @ApiOperation("A list of all schools in the system")
    public List<SchoolDTO> getAllSchools() {
        Type type = new TypeToken<List<SchoolDTO>>() {}.getType();
        return modelMapper.map(schoolRepository.findAll(), type);
    }

    @GetMapping("/schools/{id}")
    @ApiOperation("A list of all schools in the system")
    public SchoolDTO getSchoolById(@PathVariable("id") Long id) {
        Optional<School> school = schoolRepository.findById(id);
        if (!school.isPresent()) {
            throw new ResourceNotFoundException(String.format("school by id %s not found", id));
        }
        return modelMapper.map(school.get(), SchoolDTO.class);
    }

    @PostMapping("/schools/add")
    @ApiOperation(value = "Adds a new school to the database")
    public SchoolDTO addSchool(@RequestBody SchoolDTO schoolDTO) {
        School school = modelMapper.map(schoolDTO, School.class);
        return modelMapper.map(schoolRepository.save(school), SchoolDTO.class);
    }

    @GetMapping("/schools/nearby/{idCode}")
    @ApiOperation("A list of nearby schools for student")
    public List<NearbySchoolDTO> getNearbySchoolsForStudent(@PathVariable("idCode") String idCode) {
        List<Student> students = studentRepository.findByIdCode(idCode);
        List<Distance> distances = distanceRepository.findByStudentOrderByDistanceKmAsc(students.get(0));
        List<NearbySchoolDTO> nearbySchools = new ArrayList<NearbySchoolDTO>();
        distances.forEach((distance) -> {
            NearbySchoolDTO nearbySchoolDTO = new NearbySchoolDTO();
            nearbySchoolDTO.setDistance(distance.getDistanceKm());
            nearbySchoolDTO.setSchoolName(distance.getSchool().getName());
            nearbySchoolDTO.setSchoolId(distance.getSchool().getId());
            nearbySchools.add(nearbySchoolDTO);
        });

        return nearbySchools;
    }
}

