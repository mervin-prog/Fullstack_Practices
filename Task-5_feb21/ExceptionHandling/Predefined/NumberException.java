package ExceptionHandling;

import java.util.Scanner;

public class NumberException 
{
	public static void main(String[] args)
	{
		String str;
		Scanner sc = new Scanner(System.in);
		try
		{
		str=sc.next();
		int n=Integer.parseInt(str);	
		System.out.println(n*n);
	//	System.out.println("The work has been done successfully");
		}
		catch(NumberFormatException e)
		{
			System.out.println("Entered input is not a valid format for an integer");
		}
		sc.close();

	}

}
