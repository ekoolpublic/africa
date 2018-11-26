package eu.ekool.africa.dto.smartid;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PollResponse implements Serializable {

    private State state;
    private Result result;
    private Signature signature;
    private Cert cert;
    private String cn;

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("PollResponse{");
        sb.append("state=").append(state);
        sb.append(", result=").append(result);
        sb.append(", signature=").append(signature);
        sb.append(", cert=").append(cert);
        sb.append(", cn=").append(cn);
        sb.append('}');
        return sb.toString();
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    public Signature getSignature() {
        return signature;
    }

    public void setSignature(Signature signature) {
        this.signature = signature;
    }

    public Cert getCert() {
        return cert;
    }

    public void setCert(Cert cert) {
        this.cert = cert;
    }

    public String getCn() {
        return cn;
    }

    public void setCn(String cn) {
        this.cn = cn;
    }
}
