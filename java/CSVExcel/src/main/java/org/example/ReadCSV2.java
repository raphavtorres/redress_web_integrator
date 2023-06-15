package org.example;

import java.io.File;

public class ReadCSV2 {
    public static void main(String[] args) {
        String filePath = new File("src\\main\\java\\org\\example\\RedressData.csv").getAbsolutePath();
        ReadCSVFunctions reader = new ReadCSVFunctions(filePath);
        reader.readData();
        reader.displayTable();
    }
}
