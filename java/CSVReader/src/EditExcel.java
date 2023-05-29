// https://pt.stackoverflow.com/questions/154017/editar-um-arquivo-xls-j%C3%A1-criado



// import java.io.FileInputStream;
// import java.io.FileOutputStream;
// import org.apache.poi.ss.usermodel.Cell;
// import org.apache.poi.ss.usermodel.Row;
// import org.apache.poi.xssf.usermodel.XSSFSheet;
// import org.apache.poi.xssf.usermodel.XSSFWorkbook;

// public class EditExcel {
//     public static void main(String args[]) {
//         try {
//             HSSFWorkbook workbook;
//             try (FileInputStream file = new FileInputStream(new File("C:\\teste.xls"))) {
//                 workbook = new HSSFWorkbook(file);
//                 HSSFSheet sheet = workbook.getSheetAt(0);
//                 for (int i = 0; i < sheet.getPhysicalNumberOfRows(); i++) {
    
//                     Row row = sheet.getRow(i);
//                     org.apache.poi.ss.usermodel.Cell a1 = row.getCell(1);
//                     org.apache.poi.ss.usermodel.Cell a2 = row.getCell(2);
    
//                     String as1 = a1.getStringCellValue();
    
//                     if (as1.equals("-")) {
//                         a1.setCellValue("teste");
//                         a2.setCellValue("EDITADO");
//                         i = sheet.getPhysicalNumberOfRows();
//                     }
//                 }
//                 file.close();
    
//                 FileOutputStream outFile = new FileOutputStream(new File("C:\\teste.xls"));
//                 workbook.write(outFile);
//                 outFile.close();
//                 System.out.println("Arquivo Excel editado com sucesso!");
//             }
//         } catch (FileNotFoundException e) {
//             System.out.println("Arquivo Excel não encontrado!");
//         } catch (IOException e) {
//             System.out.println("Erro na edição do arquivo!");
//         }
//     }
// }
