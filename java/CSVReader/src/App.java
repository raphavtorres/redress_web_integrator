import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTable;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;

import java.util.ArrayList;
import java.util.Arrays;


public class App {
    public static void main(String[] args) throws Exception {
        String path = "C:\\Users\\rapha\\Desktop\\redress_web_integrator1\\RedressData.csv";
        BufferedReader reader = null;
        String line = "";

        ArrayList<String[]> elementsList = new ArrayList<String[]>();

        try {
            reader = new BufferedReader(new InputStreamReader(new FileInputStream(path), "UTF-8"));
            int i = 0;
            String[] column = {};
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
            String[][] elementsArray = elementsList.toArray(new String[0][]);

            System.out.println(Arrays.toString(elementsArray));

            JTable table = new JTable(elementsArray, column);
            JScrollPane scrollPane = new JScrollPane(table);
    
            JFrame frame = new JFrame();
            frame.add(scrollPane);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.pack();
            frame.setVisible(true);
        }
        catch(Exception e) {
            e.printStackTrace();
        }
        finally {
            reader.close();
        }
    }
}

