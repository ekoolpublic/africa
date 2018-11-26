package eu.ekool.africa.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

import static com.fasterxml.jackson.annotation.JsonFormat.Shape.STRING;

@Data
public class StudentDTO {
    private String idCode;
    private String firstName;
    private String lastName;
    private LocalDate birthDate;
    private Gender gender;
    private String address;
    private BigDecimal longitude;
    private BigDecimal latitude;

    private Long schoolId;
    private String schoolName;
    private Long parentWishSchoolId;
    private String parentWishSchoolName;
    private AdmissionStatus status;
}
