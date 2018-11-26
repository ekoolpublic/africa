package eu.ekool.africa.controller;

import eu.ekool.africa.dto.AdmissionStatus;
import eu.ekool.africa.dto.StudentDTO;
import eu.ekool.africa.entity.School;
import eu.ekool.africa.entity.Distance;
import eu.ekool.africa.repository.StudentRepository;
import eu.ekool.africa.repository.SchoolRepository;
import eu.ekool.africa.repository.DistanceRepository;
import eu.ekool.africa.entity.Student;
import eu.ekool.africa.exception.ResourceNotFoundException;
import eu.ekool.africa.repository.SchoolRepository;
import eu.ekool.africa.repository.StudentRepository;
import eu.ekool.africa.service.ExternalApis;
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
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.math.BigDecimal;

@CrossOrigin
@RestController
public class StudentController {

    private final StudentRepository studentRepository;
    private final SchoolRepository schoolRepository;
    private final DistanceRepository distanceRepository;
    private final ModelMapper modelMapper;
    private final ExternalApis externalApis;

    @Autowired
    public StudentController(StudentRepository studentRepository, SchoolRepository schoolRepository,
            DistanceRepository distanceRepository, ModelMapper modelMapper, ExternalApis externalApis) {
        this.studentRepository = studentRepository;
        this.schoolRepository = schoolRepository;
        this.distanceRepository = distanceRepository;
        this.modelMapper = modelMapper;
        this.externalApis = externalApis;
    }

    @GetMapping("/students/{idCode}")
    @ApiOperation("Get a student by their idCode")
    public StudentDTO getStudentById(@PathVariable("idCode") String idCode) {
        Optional<Student> student = studentRepository.findById(idCode);
        if (!student.isPresent()) {
            throw new ResourceNotFoundException(String.format("student by idCode %s not found", idCode));
        }
        return modelMapper.map(student.get(), StudentDTO.class);
    }

    @PostMapping("/students/add")
    @ApiOperation(value = "Adds a new student to the database")
    public StudentDTO addStudent(@RequestBody StudentDTO studentDTO) {
        Student student = modelMapper.map(studentDTO, Student.class);
        student.setStatus(AdmissionStatus.NOT_CONFIRMED);
        return modelMapper.map(studentRepository.save(student), StudentDTO.class);
    }

    @PostMapping("/students/calculateAddresses")
    @ApiOperation(value="Calculate distance from the Address Register")
    public boolean calculateAddresses(){
        List<Student> students = studentRepository.findAll();
        List<School> schools = schoolRepository.findAll();
        distanceRepository.deleteAll();
        students.forEach(
                (student) -> {
                    schools.forEach((school) -> {
                        //System.out.println("Compare::::::::::"+ school.getAddressId() +":" + student.getAddressId());
                        BigDecimal distanceKm = externalApis.adsDistance(school.getAddressId(), student.getAddressId());
                        //System.out.println("Distance::::::::::" + distanceKm);
                        Distance distance = new Distance();
                        distance.setStudent(student);
                        distance.setSchool(school);
                        distance.setDistanceKm(distanceKm);
                        distanceRepository.save(distance);
                    }
                    );
                }
        );

        return true;
    }

    @GetMapping("/students")
    @ApiOperation("A list of all students registered in the system")
    public List<StudentDTO> getAllStudents() {
        Type studentDTOS = new TypeToken<List<StudentDTO>>() {}.getType();
        return modelMapper.map(studentRepository.findAll(), studentDTOS);
    }

    @GetMapping("/students-for-school/{schoolId}")
    @ApiOperation("A list of all students registered in the system")
    public List<StudentDTO> getConfirmedStudentsForSchool(@PathVariable("schoolId") Long id) {
        Type studentDTOS = new TypeToken<List<StudentDTO>>() {}.getType();
        return modelMapper.map(studentRepository.findAllBySchoolAndStatusIs(
                schoolRepository.findById(id).orElse(null), AdmissionStatus.CONFIRMED),
                studentDTOS);
    }

    @PostMapping("/students/parentWishSchool/{idCode}/{parentWishSchoolId}")
    @ApiOperation(value = "Set school that parent wishes")
    public StudentDTO parentWishSchool(@PathVariable("idCode") String idCode,
                                       @PathVariable("parentWishSchoolId") Long parentWishSchoolId) {
        Optional<Student> student = studentRepository.findById(idCode);
        if (!student.isPresent()) {
            throw new ResourceNotFoundException(String.format("student by idCode %s not found", idCode));
        }
        Student studentToUpdate = student.get();
        Optional<School> parentWishSchool = schoolRepository.findById(parentWishSchoolId);
        if (!parentWishSchool.isPresent()) {
            throw new ResourceNotFoundException(String.format("school by id %d not found", parentWishSchool));
        }

        studentToUpdate.setParentWishSchool(parentWishSchool.get());
        return modelMapper.map(studentRepository.save(studentToUpdate), StudentDTO.class);
    }

    @GetMapping("/new-students")
    @ApiOperation("Update system with new students from population registry.")
    public List<StudentDTO> loadNewStudents() {
        LocalDateTime endDateTime = LocalDateTime.of(
                LocalDateTime.now().getYear() - 7, 8, 31, 23, 59);
        LocalDateTime startDateTime = LocalDateTime.of(
                LocalDateTime.now().getYear() - 8, 9, 1, 0, 0);
        studentRepository.saveAll(externalApis.getNewStudents(startDateTime, endDateTime));
        return getAllStudents();
    }

    @GetMapping("/confirm-students")
    @ApiOperation("Confirm all students who have a school.")
    public List<StudentDTO> confirmStudents() {
        List<Student> studentsToConfirm = studentRepository.findAllBySchoolIsNotNull();
        studentsToConfirm.forEach(s -> s.setStatus(AdmissionStatus.CONFIRMED));
        studentRepository.saveAll(studentsToConfirm);
        return getAllStudents();
    }

    @PostMapping("/fill-data")
    @ApiOperation("Fill data")
    public void fillData() {
        distanceRepository.deleteAll();
        schoolRepository.deleteAll();
        studentRepository.deleteAll();
        schoolRepository.save(new School(1002l, "Mvita Primary School", 32l, "Narok Rd 82"));
        schoolRepository.save(new School(1003l, "Makande Girls Secondary School", 33l, "Masai St 40"));
        schoolRepository.save(new School(1004l, "Abu Hureira Academy", 34l, "Dar Es Salam Rd 154"));

    }


}

