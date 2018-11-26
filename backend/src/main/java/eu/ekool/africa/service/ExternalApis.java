package eu.ekool.africa.service;

import eu.ekool.africa.dto.Gender;
import eu.ekool.africa.dto.NewStudentDTO;
import eu.ekool.africa.entity.Student;
import org.apache.commons.lang3.StringUtils;
import eu.ekool.africa.dto.NewStudentDTO;
import eu.ekool.africa.entity.Student;
import org.springframework.web.client.RestTemplate;
import org.springframework.stereotype.Service;

import javax.net.ssl.*;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.X509Certificate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.math.BigDecimal;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class ExternalApis {
    static {
        disableSslVerification();
    }

    private static void disableSslVerification() {
        try{
            // Create a trust manager that does not validate certificate chains
            TrustManager[] trustAllCerts = new TrustManager[] {new X509TrustManager() {
                public X509Certificate[] getAcceptedIssuers() {
                    return null;
                }
                public void checkClientTrusted(X509Certificate[] certs, String authType) {
                }
                public void checkServerTrusted(X509Certificate[] certs, String authType) {
                }
            }
            };

            // Install the all-trusting trust manager
            SSLContext sc = SSLContext.getInstance("SSL");
            sc.init(null, trustAllCerts, new java.security.SecureRandom());
            HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());

            // Create all-trusting host name verifier
            HostnameVerifier allHostsValid = new HostnameVerifier() {
                public boolean verify(String hostname, SSLSession session) {
                    return true;
                }
            };

            // Install the all-trusting host verifier
            HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (KeyManagementException e) {
            e.printStackTrace();
        }
    }
    public BigDecimal adsDistance(Long adrId1, Long adrId2) {
        BigDecimal retVal = new BigDecimal("1000000");
        try {
            RestTemplate restTemplate = new RestTemplate();
            //String res = restTemplate.getForObject("https://au.reach-u.com/au-property-mgmt-rest/api/1/distance/" + adrId1 + "/" + adrId2, String.class);
            String res = restTemplate.getForObject("https://egov-demo-ss6.westeurope.cloudapp.azure.com/restapi/GOV/M-EDUCATION/EDU-REG/"+
                    adrId1+"/"+adrId2+"?xRoadInstance=EGOV-EXAMPLE&memberClass=GOV&memberCode=M-LAND&subsystemCode=RE-REG&"+
                    "serviceCode=distance&serviceVersion=1", String.class);

            //System.out.println("Retval:"+res);
            retVal = new BigDecimal(res);
        } catch (Exception e){
            System.out.println(e);
        }
        return retVal;
    }

    public List<Student> getNewStudents(LocalDateTime start, LocalDateTime end) {
        RestTemplate restTemplate = new RestTemplate();
        //String url = "http://africa.nortal.com/person-registry/persons?dateFrom=" + start + "&dateTo=" + end;
        String url = "https://egov-demo-ss6.westeurope.cloudapp.azure.com/restapi/GOV/M-EDUCATION/"+
                "EDU-REG?xRoadInstance=EGOV-EXAMPLE&memberClass=GOV&memberCode=M-HOMEAFFAIRS&subsystemCode="+
                "POP-REG&serviceCode=persons&serviceVersion=1&dateFrom=" + start + "&dateTo=" + end;
        List<NewStudentDTO> newStudents = Arrays.asList(Objects.requireNonNull(restTemplate.getForObject(url,
                NewStudentDTO[].class)));

        return mapNewStudentDTOToStudent(newStudents);
    }

    private List<Student> mapNewStudentDTOToStudent(List<NewStudentDTO> newStudentDTOS) {
        List<Student> students = new ArrayList<>();
        newStudentDTOS.forEach(newStudentDTO -> {
            Student student = new Student();
            List<String> names = new ArrayList<>(Collections.singleton(newStudentDTO.getGivenName()));
            names.addAll(newStudentDTO.getMiddleNames());
            student.setFirstName(StringUtils.join(names, " "));
            student.setLastName(newStudentDTO.getFamilyName());
            student.setIdCode(newStudentDTO.getCode());
            student.setAddressId(Long.parseLong(newStudentDTO.getAddressId()));
            student.setBirthDate(newStudentDTO.getBirthday());
            Gender gender = Gender.OTHER;
            if (newStudentDTO.getSex().equals("MALE")) gender = Gender.MALE;
            else if (newStudentDTO.getSex().equals("FEMALE")) gender = Gender.FEMALE;
            student.setGender(gender);
            students.add(student);
        });
        return students;
    }

}
