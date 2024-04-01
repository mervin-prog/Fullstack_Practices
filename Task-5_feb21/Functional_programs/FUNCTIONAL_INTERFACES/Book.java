package FUNCTIONAL_INTERFACES;

import java.util.List;

public class Book 
{
	private int id;
	private String title;
	private List<String> genres;
	private String author;
	private double price;
	
	public Book(int id, String title, List<String> genres, String author, double price)
	{
		this.id=id;
		this.title=title;
		this.genres=genres;
		this.author=author;
		this.price=price;
	}
	
	public void setid(int id)
	{
		this.id=id;
	}
	public int getid()
	{
		return id;
	}
	public void settitle(String title)
	{
		this.title=title;
	}
	public String gettitle()
	{
		return title;
	}
	public void setgenres(List<String> genres)
	{
		this.genres=genres;
	}
	public List<String> getgenres()
	{
		return genres;
	}
    public void setauthor(String author)
    {
    	this.author=author;
    }
    public String getauthor()
    {
    	return author;
    }
    public void setprice(double price)
    {
    	this.price=price;
    }
    public double getprice()
    {
    	return price;
    }
    @Override
    public String toString()
    {
    	return id+" "+title+" "+genres+" "+author+" "+price;
    }
}
