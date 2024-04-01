package ExceptionHandling.UserDefined;

public class InvalidCountryException extends Exception
{
	InvalidCountryException(String str)
	{
		super(str);
	}

}
