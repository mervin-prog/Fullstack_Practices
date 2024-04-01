package task_Mar1;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import util.conn;

public class ex1
{
	public static Scanner sc = new Scanner(System.in);
	static int basicsal;
	static String fname,lname,desgn,dept,empno;
	
	public static void add() throws SQLException, ClassNotFoundException
	{
		Connection c = conn.Connect();
		System.out.println("Enter no of rows to be entered :");
		int count=sc.nextInt();
		for(int i=1; i<=count; i++)
		{
			PreparedStatement pst;
			pst=c.prepareStatement("insert into Employee_table values(?,?,?,?,?,?,?)");
			System.out.print("Enter Emp No :"+sc.nextLine());
			empno=sc.next();
			pst.setString(1, empno);
			System.out.print("Enter First Name :"+sc.nextLine());
			fname=sc.nextLine();
			pst.setString(2, fname);
			System.out.print("Enter Last Name :");
			lname=sc.next();
			pst.setString(3, lname);
			System.out.print("Press enter to set current Date"+sc.nextLine());
			java.util.Date date = new java.util.Date();
			java.sql.Date sqldate = new java.sql.Date(date.getTime());
			pst.setDate(4, sqldate);
			System.out.print("Enter the Designation :"+sc.nextLine());
			desgn=sc.nextLine();
			pst.setString(5, desgn);
			System.out.print("Enter the Department :");
			dept=sc.nextLine();
			pst.setString(6, dept);
			System.out.print("Enter the Basic Salary :");
			basicsal=sc.nextInt();
			pst.setInt(7, basicsal);
			pst.executeUpdate();
		}
	}
	
	public static void modify() throws ClassNotFoundException, SQLException
	{
			Connection c;
			c=conn.Connect();
			PreparedStatement pst;
			Statement stmt=c.createStatement();
			pst=c.prepareStatement("update Employee_table set Designation= ?,Basic_Salary= ? where Emp_No=? ");
			System.out.println("Enter the no of rows to be modified :");
			int count=sc.nextInt();
			for(int i=1; i<=count; i++)
			{
				System.out.println("NOTE : Modification is only done for Designation and Basic Salary columns\n");
				System.out.println("Enter the Emp no :");
				empno=sc.next();
				pst.setString(3, empno);
				System.out.print("Enter the Designation :");
				desgn=sc.next();
				pst.setString(1, desgn);
				System.out.println("Enter the Basic Salary :");
				basicsal=sc.nextInt();
				pst.setInt(2, basicsal);
				pst.executeUpdate();	
			}
			ResultSet rs1;
			rs1=stmt.executeQuery("select * from Employee_table order by Emp_No");
			System.out.println("---AFTER MODIFICATION---\n");
			while(rs1.next())
			{
				System.out.println(rs1.getString(1)+" "+rs1.getString(2)+" "+rs1.getString(3)+" "+rs1.getDate(4)+" "+rs1.getString(5)+" "+rs1.getString(6)+" "+rs1.getInt(7));
			}
	}
	
	public static void delete()
	{
		try
		{
			Connection c = conn.Connect();
			PreparedStatement pst;
			pst=c.prepareStatement("delete from Employee_table where Emp_No=?");
			System.out.println("Enter the employee no");
			empno=sc.next();
			pst.setString(1, empno);
			pst.executeUpdate();
			System.out.println("Deletion Successful");
		}
		catch(Exception e)
		{
			System.out.println("Not a valid Employee no");
		}	
	}
	
	public static void display()
	{
		try
		{
			Connection c = conn.Connect();
			Statement stmt=c.createStatement();
			System.out.println("Enter a employee no:");
			String eno=sc.next();
	    	String query="select * from Employee_table where Emp_No='"+eno+"'";
			ResultSet rs2;
			rs2=stmt.executeQuery(query);
			System.out.println("---"+" "+eno+" "+"RECORD---");
			while(rs2.next())
			{
				System.out.println(rs2.getString(1)+" "+rs2.getString(2)+" "+rs2.getString(3)+" "+rs2.getDate(4)+" "+rs2.getString(5)+" "+rs2.getString(6)+" "+rs2.getInt(7));
			}
		}
		catch(Exception e)
		{
			System.out.println("Not a valid Employee no");
		}
	}
	
	public static void displayall() throws SQLException, ClassNotFoundException
	{
		Connection c=conn.Connect();
		Statement stmt=c.createStatement();
		ResultSet rs3;
		rs3=stmt.executeQuery("select * from Employee_table order by Emp_No");
		System.out.println("---ALL RECORDS IN EMPLOYEE TABLE---\n");
		while(rs3.next())
		{
			System.out.println(rs3.getString(1)+" "+rs3.getString(2)+" "+rs3.getString(3)+" "+rs3.getDate(4)+" "+rs3.getString(5)+" "+rs3.getString(6)+" "+rs3.getInt(7));
		}
	}
	
	
	public static void main(String[] args) throws ClassNotFoundException, SQLException 
	{
		Connection c = conn.Connect();
		if(c!=null)
		{
			System.out.println("Connected....");
		}
		else 
		{
			System.out.println("Not Connected....");
		}
		Statement stmt=c.createStatement();
    	stmt.executeUpdate("create table Employee_table(Emp_No varchar(5),First_Name varchar(30),Last_Name varchar(30),Join_Date Date,Designation varchar(30),Dept varchar(30),Basic_Salary int)");
		System.out.println("");
		int choice;
		do
		{
			System.out.println("\n*** EMPLOYEE TABLE ***\n");
			System.out.println("1. Add a Record");
			System.out.println("2. Modify a Record");
			System.out.println("3. Delete a Record");
			System.out.println("4. Display a Record");
			System.out.println("5. Display all records");
			System.out.println("6. Exit");
			System.out.println("/-------------------------------------/");
		    System.out.println("Enter Your Choice :");
		    choice=sc.nextInt();
		    switch(choice)
			{
			case 1:
				add();
				break;
			case 2:
				modify();
				break;
			case 3:
				delete();
				break;
			case 4:
				display();
				break;
			case 5:
				displayall();
				break;
			case 6:
				System.out.println("---THANK YOU FOR USING THIS APPLICATION---");
				break;
				
				default: System.out.println("Enter the Correct Choice");
			}	
		}while(choice!=6);
		c.close();
		stmt.close();
	}
}