package eu.ekool.africa.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class NewStudentDTO {
    private String code;
    private String givenName;
    private List<String> middleNames;
    private String familyName;
    private String sex;
    private LocalDate birthday;
    private String addressId;
}
