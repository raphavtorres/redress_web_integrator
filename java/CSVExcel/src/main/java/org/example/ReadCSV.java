package org.example;

import java.io.File;

public class ReadCSV {
    public static void main(String[] args) {
        // getting file path
        String filePath = new File("src\\main\\java\\org\\example\\RedressData.csv").getAbsolutePath();
        // instantiating a reder object
        ReaderParent reader = new ReadCSVFunctions(filePath);
        reader.readData(); // reading file
        reader.displayTable(); // displaying file
    }
}
