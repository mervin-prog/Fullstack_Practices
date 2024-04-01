
//Bytearray I/O streams Implementation.
import java.io.*;

import java.io.ByteArrayInputStream;
public class ex1 {
    public static void main(String args[]){
        try {
            String s="Hello, Iam Mervin";
            ByteArrayInputStream bis=new ByteArrayInputStream(s.getBytes());
            ByteArrayOutputStream bos=new ByteArrayOutputStream();

            int data;
            while((data=bis.read())!=-1){
                bos.write(data);
            }
            System.out.println(bos.toString());
        } catch (Exception e) {
           e.printStackTrace(); //method used to print the stack trace of an exception to the standard error stream
        }
    }
}
