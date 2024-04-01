package FUNCTIONAL_INTERFACES;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BookDetails 
{
	public static List<Book> getAllBooks()
	{
		ArrayList<Book> booklist = new ArrayList<Book>();
		Book b1 = new Book(1001, "The Hobbit", Arrays.asList("Crime,Adventure"), "J.R.R.Tolkien",278);
		Book b2 = new Book(1002, "Harry Potter and the Sorcerer's Stone",Arrays.asList("Fantasy,Detective"),"J.K.Rowling",210);
		Book b3 = new Book(1003, "Harry Potter",Arrays.asList("Fantasy,Action,Adventure"),"J.K.Rowling",325);
		
		booklist.addAll(Arrays.asList(b1,b2,b3));
		return booklist;
	}

}
