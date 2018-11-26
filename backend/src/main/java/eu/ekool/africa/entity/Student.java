package eu.ekool.africa.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import eu.ekool.africa.dto.AdmissionStatus;
import eu.ekool.africa.dto.Gender;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.math.BigDecimal;
import java.time.LocalDate;

import static eu.ekool.africa.dto.AdmissionStatus.NOT_CONFIRMED;
import static javax.persistence.EnumType.STRING;

@Getter
@Setter
@Entity
public class Student {
    @Id
    private String idCode;
    private String firstName;
    private String lastName;
    private LocalDate birthDate;
    @Enumerated(STRING)
    private Gender gender;
    private String address;
    private Long addressId;
    private BigDecimal longitude;
    private BigDecimal latitude;
    @ManyToOne
    @JsonBackReference
    private School school;
    @ManyToOne
    @JsonBackReference
    private School parentWishSchool;
    @Enumerated(STRING)
    private AdmissionStatus status;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Student student = (Student) o;

        return idCode.equals(student.idCode);
    }

    @Override
    public int hashCode() {
        return idCode.hashCode();
    }
}
