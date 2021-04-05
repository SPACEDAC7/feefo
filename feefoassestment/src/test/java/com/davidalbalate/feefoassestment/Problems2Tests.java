package com.davidalbalate.feefoassestment;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Problems2Tests {

    public int[] mybigarray = new int[]{ 1,10,3,4,6,5,7,8,9,2};
    int[] emptyArray = new int[]{ };


    @Test
    void test_mean() {
        double mean = Problem2.mean(mybigarray);
        assertEquals(5.0, mean);
    }

    @Test
    void test_mean_zero_elements() {
        assertThrows(RuntimeException.class, () -> Problem2.mean(emptyArray));
    }

    @Test
    void test_median() {
        double mean = Problem2.median(mybigarray);

        assertEquals(5.5, mean);
    }

    @Test
    void test_median_zero_elements() {
        assertThrows(RuntimeException.class, () -> Problem2.median(emptyArray));
    }

    @Test
    void test_mode() {
        double mean = Problem2.median(mybigarray);

        assertEquals(5.5, mean);
    }

    @Test
    void test_mode_zero_elements() {
        assertThrows(RuntimeException.class, () -> Problem2.mode(emptyArray));
    }

    @Test
    void test_range() {
        double mean = Problem2.median(mybigarray);

        assertEquals(5.5, mean);
    }

    @Test
    void test_range_zero_elements() {
        assertThrows(RuntimeException.class, () -> Problem2.range(emptyArray));
    }

}
