package eu.ekool.africa.service;

import eu.ekool.africa.dto.smartid.Cert;
import eu.ekool.africa.dto.smartid.EndResult;
import eu.ekool.africa.dto.smartid.InitialResponse;
import eu.ekool.africa.dto.smartid.PollResponse;
import eu.ekool.africa.dto.smartid.Request;
import eu.ekool.africa.dto.smartid.State;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.util.Base64Utils;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;

import javax.naming.InvalidNameException;
import javax.naming.ldap.LdapName;
import java.io.ByteArrayInputStream;
import java.security.cert.CertificateException;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import static java.lang.String.format;

@Service
public class SmartIdService {

    private static final Logger logger = LoggerFactory.getLogger(SmartIdService.class);

    private String CA_CERT = "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";
    private String url = "https://sid.demo.sk.ee/smart-id-rp/v1/";
    private UUID relyingPartyUUID = UUID.fromString("11111111-0000-0000-0000-000000000000");

    private final RestOperations restOperations = new RestTemplate();

    @Autowired
    public SmartIdService() {
    }

    public InitialResponse authenticate(String personalCode, String country) {
        String hash = "K74MSLkafRuKZ1Ooucvh2xa4Q3nz+R/hFWIShN96SPHNcem+uQ6mFMe9kkJQqp5EaoZnJeaFpl310TmlzRgNyQ==";
        Request request = create();
        request.setDisplayText("Login to Ekool");
        request.setHash(hash);
        if (logger.isInfoEnabled()) {
            logger.info(request.toJson());
            logger.info(url + "authentication/pno/" + country + "/" + personalCode);
        }
        byte[] hash1 = DigestUtils.getSha256Digest().digest(hash.getBytes());
        long result = 0x00FF & hash1[hash1.length - 2];
        result <<= 8;
        result += 0x00FF & hash1[hash1.length - 1];

        InitialResponse response = restOperations.postForEntity(url + "authentication/pno/" + country + "/" + personalCode, request,
                InitialResponse.class).getBody();
        response.setCode(StringUtils.right(Long.toString(result), 4));
        return response;
    }

    public PollResponse poll(UUID sessionId) throws CertificateException, InvalidNameException {
        Map<String, Object> urlParams = new HashMap<>();
        urlParams.put("timeoutMs", "10000");
        PollResponse pollResponse = restOperations.getForEntity(url + "session/" + sessionId + "?timeoutMs=6900",
                PollResponse.class, urlParams).getBody();

        if (logger.isInfoEnabled()) {
            logger.info(format("UUID: %s", pollResponse));
        }

        verify(pollResponse);

        return pollResponse;
    }

    private String getCommonName(Cert cert) throws CertificateException, InvalidNameException {
        Assert.notNull(cert.value, "Cert is missing");
        byte[] decoded = Base64Utils.decodeFromString(cert.value
                .replaceAll("-----BEGIN CERTIFICATE-----", "")
                .replaceAll("-----END CERTIFICATE-----", ""));

        X509Certificate x509Certificate = (X509Certificate) CertificateFactory.getInstance("X.509").generateCertificate(new ByteArrayInputStream(decoded));
        String name = x509Certificate.getSubjectDN().getName();
        Enumeration<String> all = new LdapName(name).getAll();
        while (all.hasMoreElements()) {
            String[] split = all.nextElement().split("=");
            if (split[0].equals("CN")) {
                return split[1];
            }
        }

        throw new IllegalArgumentException("certificate doesn't contain CN field: " + name);
    }

    private void verify(PollResponse pollResponse) throws CertificateException, InvalidNameException {
        if (pollResponse.getState() == State.COMPLETE && pollResponse.getResult().getEndResult() == EndResult.OK) {
            Assert.notNull(pollResponse.getSignature(), "Signature is missing");
            Assert.notNull(pollResponse.getCert(), "Cert is missing");
            pollResponse.setCn(getCommonName(pollResponse.getCert()));
        }
    }

    private Request create() {
        Request request = new Request();
        request.setCertificateLevel("ADVANCED");
        String relyingPartyName = "DEMO POC";
        request.setRelyingPartyName(relyingPartyName);
        request.setRelyingPartyUUID(relyingPartyUUID);
        request.setHashType("SHA512");
        return request;
    }

    public boolean isVerificationCompleted(PollResponse response) {
        if (response.getResult() != null && response.getState() != null) {
            return response.getResult().getEndResult() == EndResult.OK &&
                    response.getState() == State.COMPLETE &&
                    !response.getCn().isEmpty();
        }
        return false;
    }
}