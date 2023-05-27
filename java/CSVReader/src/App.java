import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTable;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;

import java.util.ArrayList;


public class App {
    public static void main(String[] args) throws Exception {
        String path = "C:\\Users\\rapha\\Desktop\\redress_web_integrator1\\RedressData.csv";
        BufferedReader reader = null;
        String line = "";
        int i = 0;
        String[] column = {};

        ArrayList<String[]> elementsList = new ArrayList<String[]>();

        // Reading CSV
        try {
            reader = new BufferedReader(new InputStreamReader(new FileInputStream(path), "UTF-8"));
            
            while ((line = reader.readLine()) != null) {
                if (i > 0) {
                    String[] row = line.split(",");
                    elementsList.add(row);
                }
                else {
                    column = line.split(",");
                }    
                i++;
            } 
        }
        catch(Exception e) {
            e.printStackTrace();
        }
        finally {
            reader.close();
        }

        String[][] elementsArray = elementsList.toArray(new String[0][]);

        // Creating Window
        JTable table = new JTable(elementsArray, column);
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

