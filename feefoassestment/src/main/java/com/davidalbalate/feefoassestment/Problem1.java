package com.davidalbalate.feefoassestment;

import java.util.List;

public class Problem1 {

    private List<String> normalizedJobs;

    public Problem1(List<String> n) {
        this.normalizedJobs = n;
    }

    public String normalise(String jt) {
        double q = 0;
        String result = "";

        for(String job: this.normalizedJobs){
            double qualityLevel = getQualityLevel(jt.toLowerCase(), job.toLowerCase());
            if(qualityLevel > q){
                q = qualityLevel;
                result = job;
            }
        }

        return result ;
    }

    private double getQualityLevel(String jt, String job) {
        double maxStringLengh = 0;
        int initialIndex = 0;
        int endIndex = 1;


        while (endIndex <= jt.length()){
            String testSubString = jt.substring(initialIndex, endIndex);

            int position = job.indexOf(testSubString);

            if(position >= 0){
                endIndex+=1;
                if(testSubString.length() > maxStringLengh){
                    maxStringLengh = testSubString.length();
                }
            } else {
                initialIndex = endIndex;
                endIndex = endIndex + 1;
            }


        }

        return maxStringLengh / jt.length();

    }
}
