package ExceptionHandling;

import java.util.Scanner;

public class DivisionException 
{
	public static void main(String[] args) 
		{
			int a,b;
			Scanner sc = new Scanner(System.in);
			a=sc.nextInt();
			b=sc.nextInt();
			System.out.println("Add:"+(a+b));
			System.out.println("Subtract :"+(a-b));
		//	System.out.println("Subtract :"+(a/b));
			try
			{
				System.out.println(a / b);
			}
			catch(ArithmeticException e) //e-formal parameter(any variable)
			{
				System.out.println("Division by zero is not possible"+" "+ e);
			} 
			sc.close();
			
			

		}

	}


