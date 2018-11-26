package eu.ekool.africa.dto.smartid;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;

import java.io.Serializable;
import java.util.UUID;

@Data
public class Request implements Serializable {
    private UUID relyingPartyUUID;
    private String relyingPartyName;
    private String certificateLevel;
    private String hash;
    private String hashType;
    private String displayText;
    private String nonce;

    public String toJson() {
        try {
            return new ObjectMapper().writerWithDefaultPrettyPrinter().writeValueAsString(this);
        } catch (JsonProcessingException ignored) {
        }
        return "";
    }

    @Override
    public String toString() {
        return "Request{" +
                "relyingPartyUUID=" + relyingPartyUUID +
                ", relyingPartyName='" + relyingPartyName + '\'' +
                ", certificateLevel='" + certificateLevel + '\'' +
                ", hash='" + hash + '\'' +
                ", hashType='" + hashType + '\'' +
                ", displayText='" + displayText + '\'' +
                ", nonce='" + nonce + '\'' +
                '}';
    }
}
