package eu.ekool.africa.dto.smartid;

import java.io.Serializable;

public class Cert implements Serializable{

    public String value;
    public String ocspResponse;
    public String assuranceLevel;
    public String certificateLevel;

    @Override
    public String toString() {
        return "Cert{" +
                "value='" + value + '\'' +
                ", ocspResponse='" + ocspResponse + '\'' +
                ", assuranceLevel='" + assuranceLevel + '\'' +
                ", certificateLevel='" + certificateLevel + '\'' +
                '}';
    }
}
