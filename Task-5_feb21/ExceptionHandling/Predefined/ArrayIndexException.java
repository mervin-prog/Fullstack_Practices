package ExceptionHandling;

import java.util.Scanner;

public class ArrayIndexException 
{
	public static Scanner sc=new Scanner(System.in);     /*scanner can be gn in this method also*/
	public static void main(String[] args) 
	{
		int n,il,e;
		char f;
//		Scanner sc=new Scanner(System.in);
		n=sc.nextInt();
		int arr[]=new int[n];
		for(il=0; il<n; il++)
		{
			arr[il]=sc.nextInt();
		}
		System.out.println("Do you want to fetch the values from the array:");
		f=sc.next().charAt(0);
		if(f=='Y')
		{
				System.out.println("Enter the array positon:");
				e=sc.nextInt();
				try
				{
				System.out.println("value :"+arr[e]);
				}
				catch(ArrayIndexOutOfBoundsException A)
				{
					System.out.println("Index out of array size is not possible"+" "+A);
				}
		}	
		else if(f=='N')
		{
			System.out.println("End of the program");
		}

	}
		
}


