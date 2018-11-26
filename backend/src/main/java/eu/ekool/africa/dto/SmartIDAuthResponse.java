package eu.ekool.africa.dto;

import lombok.Data;

@Data
public class SmartIDAuthResponse {
    private String sessionId;
    private String challenge;
    private boolean isError = false;

    public SmartIDAuthResponse error() {
        SmartIDAuthResponse response = new SmartIDAuthResponse();
        response.setError(true);
        return response;
    }
}
