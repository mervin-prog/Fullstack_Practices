
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class ex1 
{
	public static void main(String[] args) 
	{
		try
		{
		File f = new File("sample.txt");
		FileInputStream fis = new FileInputStream(f);
		int ch=fis.read();
		while(ch!=-1)
		{
			System.out.print((char)ch);
			ch=fis.read();
		}
//		System.out.println(ch);  //empty file -1
		fis.close();
		}
		catch(IOException e) //Exception
		{
			System.err.println(e);
		}
		
	}
}