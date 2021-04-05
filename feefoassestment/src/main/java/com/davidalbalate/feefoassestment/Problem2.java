package com.davidalbalate.feefoassestment;

import java.util.Arrays;

public class Problem2 {

    public static double median(int[] intArray) {
        if (intArray.length == 0) throw new RuntimeException("List too small");

        Arrays.sort(intArray);
        int middleValue = intArray.length / 2;
        if (intArray.length % 2 == 1) {
            return intArray[middleValue];
        } else {
            return (intArray[middleValue - 1] + intArray[middleValue]) / 2.0;
        }
    }


    public static double mean(int[] intArray) {
        if (intArray.length == 0) throw new RuntimeException("List too small");

        int sum = 0;
        for (int i = 0; i < intArray.length; i++) {
            sum += intArray[i];
        }
        return sum / intArray.length;

    }

    public static int mode(int intArray[]) {
        if (intArray.length == 0) throw new RuntimeException("List too small");

        int maxValue = 0;
        int maxCount = 0;

        for (int i = 0; i < intArray.length; ++i) {
            int count = 0;
            for (int j = 0; j < intArray.length; ++j) {
                if (intArray[j] == intArray[i]) ++count;
            }
            if (count > maxCount) {
                maxCount = count;
                maxValue = intArray[i];
            }
        }

        return maxValue;
    }

    public static int range(int intArray[]) {
        if (intArray.length == 0) throw new RuntimeException("List too small");

        Arrays.sort(intArray);
        return intArray[intArray.length - 1] - intArray[0];
    }

    public void getStats(int[] intArray) {
        System.out.println("median: " + median(intArray));
        System.out.println("mean: " + mean(intArray));
        System.out.println("mode: " + mode(intArray));
        System.out.println("range: " + range(intArray));
    }
}
