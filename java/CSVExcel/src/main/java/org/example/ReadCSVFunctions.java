package org.example;

import javax.swing.*;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;


public class ReadCSVFunctions {
    private String filePath;
    private String[] columnNames;
    private String[][] data;

//    Constructor
    public ReadCSVFunctions(String filePath) {
        this.filePath = filePath;
    }

//    Methods
    public void readData() {
        BufferedReader reader = null;
        String line = "";
        int rowCount = 0;

        ArrayList<String[]> rows = new ArrayList<>();

        try {
            reader = new BufferedReader(new InputStreamReader(new FileInputStream(filePath), "UTF-8"));

            while ((line = reader.readLine()) != null) {
                if (rowCount == 0) {
                    columnNames = line.split(",");
                } else {
                    String[] row = line.split(",");
                    rows.add(row);
                }
                rowCount++;
            }
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

        data = rows.toArray(new String[0][]);
    }

    public void displayTable() {
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
