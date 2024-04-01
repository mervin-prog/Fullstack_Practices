package ExceptionHandling.UserDefined;

import java.util.Scanner;

public class Marks {

	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		String name,A,B,C;
		name=sc.next();
		A=sc.next();
		B=sc.next();
		C=sc.next();
		try
		{
			int a=Integer.parseInt(A);
			int b=Integer.parseInt(B);
			int c=Integer.parseInt(C);
			if(!(a>=0 && a<=100) || !(b>=0 && b<=100) || !(c>=0 && c<=100)) 
				throw new ValuesOutOfRangeException("a,b,c values should be >=0 and  <=100");
			else
			System.out.println("Name:"+" "+name);
			System.out.println("Marks of subject A:"+" "+a);
			System.out.println("Marks of subject B:"+" "+b);
			System.out.println("Marks of subject C:"+" "+c);
		}
		catch(ValuesOutOfRangeException e)
		{
			System.out.println(e.getMessage());
		}
		catch(NumberFormatException e)
		{
			System.out.println(e);
		}
		sc.close();
         
	}

}
