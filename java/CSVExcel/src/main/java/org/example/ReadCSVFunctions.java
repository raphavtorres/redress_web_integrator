package org.example;

import javax.swing.*;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;


public class ReadCSVFunctions extends ReaderParent {
    // Constructor
    public ReadCSVFunctions(String filePath) {
        super(filePath);
    }

    @Override
    public void readData() {
        BufferedReader reader = null;
        String line = "";
        int rowCount = 0;

        ArrayList<String[]> rows = new ArrayList<>();

        try {
            // creating reader-
            reader = new BufferedReader(new InputStreamReader(new FileInputStream(filePath), "UTF-8"));
            // reading lines if they're not empty
            while ((line = reader.readLine()) != null) {
                if (rowCount == 0) {
                    columnNames = line.split(",");
                } else {
                    String[] row = line.split(",");
                    rows.add(row);
                }
                rowCount++;
            }
            // checking for errors in reading
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        // creating array with an array of rows
        data = rows.toArray(new String[0][]);
    }

    @Override
    public void displayTable() {
        // creating table from data array
        JTable table = new JTable(data, columnNames);
        JScrollPane scrollPane = new JScrollPane(table);

        JFrame window = new JFrame();
        window.setTitle("REDRESS PRODUCTS");
        window.setSize(500, 500);
        window.add(scrollPane);

        window.pack();
        window.setVisible(true);
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}
