package LAMBDA_EXPRESSIONS;

public class Add
{
/* 	public int add(int a,int b)
	{
		return a+b;
	} */
	
	public static void main(String[] args) 
	{
		//without Lambda Expression
		/*Add a = new Add();
		System.out.println(a.add(10, 5)); */
		
		
		//with Lambda Expresssion
		Addition ad =(a,b)->(a+b);
		System.out.println(ad.add(10, 5));
		
		
		//without Lambda Expression
	/*	Addition ad = new Addition()
		{
			public int add(int a,int b)
			{
				return a+b;
			}
		};
		System.out.println(ad.add(10, 5)); */
	}
}
