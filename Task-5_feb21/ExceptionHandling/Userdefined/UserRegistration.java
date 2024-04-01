package ExceptionHandling.UserDefined;

import java.util.Scanner;

public class UserRegistration 
{
	public static Scanner sc = new Scanner(System.in);
	public void registerUser(String name, String userCountry) throws InvalidCountryException
	{
		 String country="India";
		if(!userCountry.equalsIgnoreCase(country))
		{
			throw new InvalidCountryException("User Outside India Cannot be registered");
		}
		else
			System.out.println("User registration done successfully");
	}
	public static void main(String[] args)
	{
		UserRegistration ur = new UserRegistration();
		try
		{
		ur.registerUser(sc.next(),sc.next());
		}
		catch(InvalidCountryException e)
		{
			System.out.println(e.getMessage());
		}
		
	}

}
