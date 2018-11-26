package eu.ekool.africa.dto.smartid;

import java.io.Serializable;

public class Signature implements Serializable{
    public String value;
    public String algorithm;


    @Override
    public String toString() {
        return "Signature{" +
                "value='" + value + '\'' +
                ", algorithm='" + algorithm + '\'' +
                '}';
    }
}
