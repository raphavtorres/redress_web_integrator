package org.example;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class WriteExcel {
    public static void main(String[] args) {
        try {
            // Carrega o arquivo do Excel
            // FileInputStream arquivo = new FileInputStream("C:\\Users\\50050376837\\Documents\\java\\TesteExcel\\src\\main\\java\\RedressRoutes.xlsx");
            String path = new File("RedressRoutes.xlsx").getAbsolutePath();
            System.out.println(path);
            FileInputStream arquivo = new FileInputStream(path);
            XSSFWorkbook workbook = new XSSFWorkbook(arquivo);

            // Obtém a planilha desejada
            XSSFSheet sheet = workbook.getSheetAt(0);

            // Obtém a linha e a célula específica
            Row row = sheet.getRow(4);
            Cell cell = row.getCell(2);

            // Define o novo valor da célula
            cell.setCellValue("Novo Valor");

            // Salva as alterações no arquivo do Excel
            FileOutputStream outFile = new FileOutputStream("C:\\Users\\50050376837\\Documents\\java\\TesteExcel\\src\\main\\java\\Results/RedressRoutes2.xlsx");
            workbook.write(outFile);
            outFile.close();

            System.out.println("Célula editada com sucesso!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
