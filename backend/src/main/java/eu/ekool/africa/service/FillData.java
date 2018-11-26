package eu.ekool.africa.service;

import eu.ekool.africa.dto.Gender;
import eu.ekool.africa.dto.NewStudentDTO;
import eu.ekool.africa.entity.Student;
import org.apache.commons.lang3.StringUtils;
import eu.ekool.africa.dto.NewStudentDTO;
import eu.ekool.africa.entity.Student;
import eu.ekool.africa.entity.School;
import org.springframework.web.client.RestTemplate;
import org.springframework.stereotype.Service;
import eu.ekool.africa.repository.SchoolRepository;
import eu.ekool.africa.repository.StudentRepository;
import eu.ekool.africa.repository.DistanceRepository;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.math.BigDecimal;

import java.time.LocalDateTime;
import java.util.*;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class FillData {

    @Autowired
    private final SchoolRepository schoolRepository;
    @Autowired
    private final StudentRepository studentRepository;
    @Autowired
    private final DistanceRepository distanceRepository;

    @Autowired
    public FillData(SchoolRepository schoolRepository, StudentRepository studentRepository,
                            DistanceRepository distanceRepository) {
        this.schoolRepository = schoolRepository;
        this.studentRepository = studentRepository;
        this.distanceRepository = distanceRepository;
    }

    @PostConstruct
    public void init() {
    }


}
