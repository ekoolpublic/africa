package eu.ekool.africa.repository;

import eu.ekool.africa.entity.School;
import eu.ekool.africa.entity.Student;
import eu.ekool.africa.entity.Distance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface DistanceRepository extends JpaRepository<Distance, Long> {
    public List<Distance> findByStudentOrderByDistanceKmAsc(Student student);

}
