
import java.io.*;
public class ex2 {
    public static void main(String[] args) 
	{
		try
		{
		File f = new File("sample2.txt");
		
		FileInputStream fis = new FileInputStream(f);
		FileOutputStream fos = new FileOutputStream("output.txt");
		int ch=fis.read();
		while(ch!=-1)
		{
			//System.out.print((char)ch);  
			fos.write(ch);
			ch=fis.read();
		}
		fis.close();
		fos.close();
		}
		catch(IOException e)
		{
			System.err.println(e);
		}
	}
}
