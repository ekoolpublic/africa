package eu.ekool.africa.dto;

import eu.ekool.africa.entity.Student;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Set;

@Data
public class SchoolDTO {
    private Long id;
    private String name;
    private BigDecimal longitude;
    private BigDecimal latitude;
    private String address;
    private Long addressId;
    private Set<Student> students;
}
