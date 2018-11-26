package eu.ekool.africa.dto.smartid;

import lombok.Data;

import java.io.Serializable;
import java.util.UUID;

@Data
public class InitialResponse implements Serializable{

    private UUID sessionID;
    private String code;
    private Boolean isError = false;

    public static InitialResponse error() {
        InitialResponse response = new InitialResponse();
        response.setIsError(true);

        return response;
    }
}
