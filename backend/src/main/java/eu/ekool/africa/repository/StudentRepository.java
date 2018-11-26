package eu.ekool.africa.repository;

import eu.ekool.africa.dto.AdmissionStatus;
import eu.ekool.africa.entity.School;
import eu.ekool.africa.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, String> {

    List<Student> findAllBySchoolIsNotNull();
    List<Student> findByIdCode(String idCode);
    List<Student> findAllBySchoolAndStatusIs(School school, AdmissionStatus status);
}
