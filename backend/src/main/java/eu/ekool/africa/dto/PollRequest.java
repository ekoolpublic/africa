package eu.ekool.africa.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class PollRequest {
    private UUID sessionId;
}
