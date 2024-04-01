package ExceptionHandling;

import java.util.Scanner;

public class FinallyBlockEx 
{

	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the 2 numbers");
		int a=sc.nextInt(),b=sc.nextInt();
		try
		{
			System.out.println("The quotient of"+a+"/"+b+"="+a/b);
		}
		catch(ArithmeticException e)
		{
			System.out.println(e.getMessage()+" "+"caught");
		}
		finally
		{
			System.out.println("Inside finally block");
		}
		sc.close();

	}

}
