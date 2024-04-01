package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class conn 
{
	public static Connection Connect() throws ClassNotFoundException{	
		Connection con = null;
		try 
		{
	    
	        con = DriverManager.getConnection("jdbc:mysql://localhost:3306/employee","root","mervin");
	        if(con!=null) {
	        	System.out.println("Connection established");
	        }
	    } 
		catch (SQLException e) {
	        e.printStackTrace();
	    }
		return con;
	}
}