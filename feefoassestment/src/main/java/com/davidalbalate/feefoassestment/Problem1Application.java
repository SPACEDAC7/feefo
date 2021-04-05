package com.davidalbalate.feefoassestment;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class Problem1Application {

    public static void main(String[] args) {
        List<String> normalizedJobs = new ArrayList<>();
        normalizedJobs.add("Architect");
        normalizedJobs.add("Software engineer");
        normalizedJobs.add("Quantity surveyor");
        normalizedJobs.add("Accountant");


        String jt = "Java engineer";
        Problem1 n = new Problem1(normalizedJobs);
        String normalisedTitle = n.normalise(jt);
        System.out.println(normalisedTitle);
        //output normalisedTitle
        jt = "C# engineer";
        normalisedTitle = n.normalise(jt);
        System.out.println(normalisedTitle);
        //output normalisedTitle
        jt = "Chief Accountant";
        normalisedTitle = n.normalise(jt);
        System.out.println(normalisedTitle);
        //output normalisedTitle


    }


}
