package eu.ekool.africa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class AfricaApplication {

    public static void main(String[] args) {
        SpringApplication.run(AfricaApplication.class, args);
    }
}
