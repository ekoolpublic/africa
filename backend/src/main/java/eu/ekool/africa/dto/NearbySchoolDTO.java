package eu.ekool.africa.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class NearbySchoolDTO {
    private BigDecimal distance = BigDecimal.TEN;
    private String schoolName;
    private Long schoolId;

    public BigDecimal getDistance() {
        return distance;
    }

    public void setDistance(BigDecimal distance) {
        this.distance = distance;
    }

    public String getSchoolName() {
        return schoolName;
    }

    public void setSchoolName(String schoolName) {
        this.schoolName = schoolName;
    }

    public Long getSchoolId() {
        return schoolId;
    }

    public void setSchoolId(Long schoolId) {
        this.schoolId = schoolId;
    }
}
