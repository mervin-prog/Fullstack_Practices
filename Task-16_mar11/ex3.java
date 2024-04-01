
//Better efficency while reading and writing ie).File I/O operations.

import java.io.*;
public class ex3 {
    public static void main(String args[]){
        try{
            InputStream bis=new BufferedInputStream(new FileInputStream("sample3.txt"));
            OutputStream bos=new BufferedOutputStream(new FileOutputStream("output2.txt"));

            int byteRead;
            while((byteRead=bis.read())!=-1){
                bos.write(byteRead);
            }
            bis.close();
            bos.close();

            System.out.println("File successfully copied to destination.");
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
