package eu.ekool.africa.dto.smartid;

import java.io.Serializable;

public class Result implements Serializable {

    private EndResult endResult;
    private String documentNumber;

    @Override
    public String toString() {
        return "Result{" +
                "endResult=" + endResult +
                ", documentNumber='" + documentNumber + '\'' +
                '}';
    }

    public EndResult getEndResult() {
        return endResult;
    }

    public void setEndResult(EndResult endResult) {
        this.endResult = endResult;
    }

    public String getDocumentNumber() {
        return documentNumber;
    }

    public void setDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
    }
}
