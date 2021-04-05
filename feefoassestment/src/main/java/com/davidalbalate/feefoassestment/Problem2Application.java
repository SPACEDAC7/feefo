package com.davidalbalate.feefoassestment;

import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Problem2Application {

    public static void main(String[] args) {
        int[] mybigarray = new int[]{ 1,2,3,4,5,6,7,8,9,10,111,5,5 };

        //now print out some basic stats on the array
        Problem2 arrayManipulator = new Problem2();
        arrayManipulator.getStats(mybigarray);




    }


}
