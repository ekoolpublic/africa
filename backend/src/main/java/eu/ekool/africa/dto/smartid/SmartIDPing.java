package eu.ekool.africa.dto.smartid;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.UUID;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class SmartIDPing {
    private UUID sessionID;
    private String idCode;
    private String firstName;
    private String lastName;

    private Boolean isDone = false;
    private Boolean isError = false;
}
