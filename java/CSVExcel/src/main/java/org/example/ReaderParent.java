package org.example;

public abstract class ReaderParent {
    // creating class attributes
    protected String filePath;
    protected String[] columnNames;
    protected String[][] data;

    // Constructor
    public ReaderParent(String filePath) {
        this.filePath = filePath;
    }

    // creating abstract methods
    public abstract void readData();

    public abstract void displayTable();
}
