import java.util.*;

public class Library {

    private String name;
    private List<Book> books;
    private List<Patron> patrons;

    public Library(String name){
        this.name=name;
        this.books=new ArrayList<>();
        this.patrons=new ArrayList<>();
    }

    //Inner class Book
    class Book{
        private String title;
        private String author;

        public Book(String title, String author) {
            this.title = title;
            this.author = author;
        }
        
        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getAuthor() {
            return author;
        }

        public void setAuthor(String author) {
            this.author = author;
        }
    }

    //Inner class Patron
    class Patron{

        private String name;
        private int memberId;
        
        public Patron(String name, int memberId) {
            this.name = name;
            this.memberId = memberId;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getMemberId() {
            return memberId;
        }

        public void setMemberId(int memberId) {
            this.memberId = memberId;
        }
    }

    //methods for adding books and patrons.
    public void addBooks(String title, String author){
        books.add(new Book(title,author));
    }

    public void addPatrons(String name, int memberId){
        patrons.add(new Patron(name,memberId));
    }

    //Display all books and patrons in Library.

    public void DisplayBooks(){
        System.out.println("Books in "+name+" Library : ");
        System.out.println();
        for(Book book:books){
            System.out.println(book.getTitle()+" by "+book.getAuthor());
        }
    }

    public void DisplayPatrons(){
        System.out.println("Patrons of "+name+" Library : ");
        System.out.println();
        for(Patron patron:patrons){
            System.out.println(patron.getName()+" (Member Id :"+patron.getMemberId()+")");
        }
    }


    public static void main(String args[]){

        Library library=new Library("Oxford");

        library.addBooks("Java Programming","Alex");
        library.addBooks("Data Structures and Algorithms", "John");
        library.addBooks("Python Programming", "Alan Walker");
        library.addBooks("Data Science","Taylor Swift");

        library.addPatrons("Zayn", 1001);
        library.addPatrons("One Direction", 1002);
        library.addPatrons("Justin Bieber", 1003);
        library.addPatrons("Sabrina", 1004);
        
        library.DisplayBooks();
        System.out.println();
        library.DisplayPatrons();
    }

}
