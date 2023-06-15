package org.example;

public abstract class ReaderParent {
    private String filePath;
    private String[] columnNames;
    private String[][] data;

    //    Constructor
    public ReaderParent(String filePath) {
        this.filePath = filePath;
    }

    public abstract readData();
    public abstract displayTable();
}
