package org.example;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;


public class WriteExcel {
    public static void main(String[] args) throws IOException {
        String cep = "";
        String pathJson = new File("src\\main\\java\\org\\example\\info.json").getAbsolutePath();
        String jsonString = String.join(" ", Files.readAllLines(Paths.get(pathJson), StandardCharsets.UTF_8));
        cep = jsonString.replaceAll("\\D", "");

        try {
            // READING EXCEL FILE
            String path = new File("src\\main\\java\\org\\example\\RedressRoutes.xlsx").getAbsolutePath();
            System.out.println(path);
            FileInputStream arquivo = new FileInputStream(path);
            XSSFWorkbook workbook = new XSSFWorkbook(arquivo);

            XSSFSheet sheet = workbook.getSheetAt(0);
            Row row = sheet.getRow(4);
            Cell cell = row.getCell(2);
            cell.setCellValue(cep);

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
