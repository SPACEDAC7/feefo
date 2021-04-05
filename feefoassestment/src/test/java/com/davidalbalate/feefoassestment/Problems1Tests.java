package com.davidalbalate.feefoassestment;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problems1Tests {

    private Problem1 problem1;

    @BeforeEach
    void setup(){
        List<String> normalizedJobs =  Arrays.asList("Architect", "Software engineer", "Quantity surveyor", "Accountant");
        problem1 = new Problem1(normalizedJobs);
    }

    @Test
    void test_engineer_upper_and_lower_case() {
        String result = problem1.normalise("Test Test EnGiNeer");
        assertEquals("Software engineer", result);
    }

    @Test
    void test_engineer_just_name() {
        String result = problem1.normalise("EnGiNeer");
        assertEquals("Software engineer", result);
    }

    @Test
    void test_engineer_minimal_string() {
        String result = problem1.normalise("ee");
        assertEquals("Software engineer", result);
    }

    @Test
    void test_architect_two_works() {
        String result = problem1.normalise("ArchitectEnGiNeer");
        assertEquals("Architect", result);
    }

    @Test
    void test_architect_minimal_string() {
        String result = problem1.normalise("ch");
        assertEquals("Architect", result);
    }

    @Test
    void test_surveyor_mixed() {
        String result = problem1.normalise("ArchitectQuantity su");
        assertEquals("Quantity surveyor", result);
    }

    @Test
    void test_accountant_mixed() {
        String result = problem1.normalise("AccountantQuantit");
        assertEquals("Accountant", result);
    }

    @Test
    void test_empty() {
        String result = problem1.normalise("");
        assertEquals("", result);
    }

}
