package FUNCTIONAL_INTERFACES;

import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.function.Supplier;

public class BookMain 
{
	private static Predicate<Book> p1 = (b)->b.getprice()>275;  //Predicate
	private static Predicate<Book> p2 = (b)->b.getgenres().contains("Action");
	private static Predicate<Book> p3= (b)->b.getgenres().contains("Adventure");
	private static Predicate<Book> p4= (b)->b.getauthor().equals("J.K.Rowling");
	
	private static BiConsumer<String,String> c1 = (title,author)->{      //BiConsumer
		System.out.println(title.toUpperCase()+" By "+author.toUpperCase());
	};
	
	private static Consumer<Book>c2=(b)->System.out.println(b+"\n");  //Consumer
	
	private static Supplier<List<Book>> s1=()->BookDetails.getAllBooks(); //Supplier
	
	public static void printTitleandAuthor()
	{
		List<Book> booklist = s1.get();
		booklist.forEach(b->c1.accept(b.gettitle(), b.getauthor()));
	}
	
	public static void printCostlyBooks()
	{
		List<Book>booklist=s1.get();
		booklist.forEach(b->{
		if(p1.test(b)){
			c2.accept(b);
		}
		});
	}
 
	public static void printBooksByGenres()
	{
		List<Book>booklist=s1.get();
		booklist.forEach(b->{
			if(p2.and(p3).test(b)) {
				c2.accept(b);
			}
		});
	}
	
	public static void printBooksByAuthor()
	{
		List<Book>booklist=s1.get();
		booklist.forEach(b->{
			if(p4.test(b)) {
				c2.accept(b);
			}
		});
	}
	
	public static void printAll()
	{
		List<Book> booklist=s1.get();
		booklist.forEach(b->c2.accept(b));
	}
	
	public static void main(String[] args)
	{
		printTitleandAuthor();
		System.out.println();
		printCostlyBooks();
		
		printBooksByGenres();
		
		printBooksByAuthor();
		
		printAll();
	}
}
