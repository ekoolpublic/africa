package eu.ekool.africa.controller;

import eu.ekool.africa.dto.AuthRequest;
import eu.ekool.africa.dto.PollRequest;
import eu.ekool.africa.dto.SmartIDAuthResponse;
import eu.ekool.africa.dto.smartid.InitialResponse;
import eu.ekool.africa.dto.smartid.PollResponse;
import eu.ekool.africa.service.SmartIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.InvalidNameException;
import java.security.cert.CertificateException;

@CrossOrigin
@RestController
public class SmartIDController {

    private final SmartIdService smartIdService;

    @Autowired
    public SmartIDController(SmartIdService smartIdService) {
        this.smartIdService = smartIdService;
    }

    @PostMapping("/smart-id/auth")
    public SmartIDAuthResponse authenticateSmartID(@RequestBody AuthRequest request) {
        SmartIDAuthResponse response = new SmartIDAuthResponse();
        String inputCountry = "EE";
        InitialResponse response1 = smartIdService.authenticate(request.getIdCode(), inputCountry);
        response.setChallenge("4430");
        response.setSessionId(response1.getSessionID().toString());
        return response;
    }

    @PostMapping("/smart-id/poll")
    public PollResponse pollSmartID(@RequestBody PollRequest request) throws CertificateException, InvalidNameException {
        return smartIdService.poll(request.getSessionId());
    }

}
