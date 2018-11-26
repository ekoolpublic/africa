FROM gradle:4.9-jdk8-alpine AS build
COPY --chown=gradle:gradle . /project
WORKDIR /project
RUN gradle bootJar

FROM openjdk:8-jdk-alpine
ARG SPRING_PROFILE=''
ENV SPRING_PROFILES_ACTIVE $SPRING_PROFILE
# EXPOSE 8087
EXPOSE 8088
VOLUME /tmp

COPY --from=build /project/build/libs/*.jar app.jar
# COPY --from=build /project/ekool.keystore ekool.keystore

# HEALTHCHECK --start-period=15s CMD wget --quiet --tries=1 --spider http://localhost:8087/auth || exit 1
# ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-Djavax.net.ssl.trustStore=ekool.keystore", "-Djavax.net.ssl.trustStorePassword=looke098", "-jar","/app.jar"]
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar","/app.jar"]