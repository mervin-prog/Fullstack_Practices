
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;

public class FileOperations {

	public static void main(String[] args) throws IOException
	{
		FileReader fr = new FileReader("/media/mervin/DATA/Numetry_technologies_intership/task_feb21/File_IO/file1.txt");
        FileWriter fw = new FileWriter("/media/mervin/DATA/Numetry_technologies_intership/task_feb21/File_IO/output.txt");
        int ch;
        while((ch=fr.read())!=-1)
        {
        	fw.write(ch);    
        	System.out.print((char)ch);
        }
        System.out.println("\nSuccessfully printed and copied to a file");
        BufferedReader br = new BufferedReader(new FileReader("/media/mervin/DATA/Numetry_technologies_intership/task_feb21/File_IO/file1.txt"));
        ArrayList<String> a1 = new ArrayList<>();
        String str;
        int ctr=0;
        while((str=br.readLine())!=null)
        {
        	String[] words=str.split(" ");
        	ctr+=words.length;
        	for(int i=0; i<words.length; i++)
        	{
        		a1.add(words[i]);
        	}
        	Collections.sort(a1);
        }
        System.out.println("\nTotal Word Count:"+ctr);
        System.out.println("\nAfter Sorting");
        for(String s:a1)
        {
        	System.out.print(s+" ");
        }
        HashSet<String> h1=new HashSet<>(a1);
        Iterator<String> i =h1.iterator();
        System.out.println("\n\nAfter Removing Duplicates");
        while(i.hasNext())
        {
        	System.out.print(i.next()+" ");
        }
        fr.close();
        fw.close();
        
	}

}
