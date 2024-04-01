package ExceptionHandling;

import java.util.Scanner;

public class StringIndexException 
{
	public static Scanner sc = new Scanner(System.in);
	public static void main(String[] args) 
	{
			String str=sc.next();
			try
			{
			int index=sc.nextInt();
			System.out.println("The character at the index"+" "+index+" "+"is:"+str.charAt(index));
			}
			catch(StringIndexOutOfBoundsException e)
			{
				System.out.println(e);
			}
			

		}

	}


