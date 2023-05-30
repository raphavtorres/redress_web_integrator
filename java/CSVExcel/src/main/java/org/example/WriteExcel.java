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
            // READING EXCEL FILE
            String path = new File("src\\main\\java\\org\\example\\RedressRoutes.xlsx").getAbsolutePath();
            System.out.println(path);
            FileInputStream arquivo = new FileInputStream(path);
            XSSFWorkbook workbook = new XSSFWorkbook(arquivo);

            // GETTING SHEET
            XSSFSheet sheet = workbook.getSheetAt(0);

            // GETTING CELL
            Row row = sheet.getRow(4);
            Cell cell = row.getCell(2);

            // CHANGING CELL VALUE
            cell.setCellValue("SALVE");

            // SAVING A NEW FILE WITH MODIFICATIONS
            String fileExcel = new File("src\\main\\java\\RedressRoutesResult.xlsx").getAbsolutePath();
            FileOutputStream outFile = new FileOutputStream(fileExcel);
            workbook.write(outFile);
            outFile.close();

            System.out.println("Célula editada com sucesso!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
