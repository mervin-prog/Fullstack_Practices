
//navigable set -->It is an interface that extends the SortedSet interface 
//and can be implemented using TreeSet.
import java.util.*;
public class ex4 {
    public static void main(String[] args) {
         Scanner sc =new Scanner(System.in);
        NavigableSet<Integer> st = new TreeSet<>();
        
        int size=sc.nextInt();
        for(int i=0; i<size; i++){
            st.add(sc.nextInt());
        }
        System.out.println("Navigable Set:"+st);
        // Get the closest element less than or equal to a given element
        int a,b=0;
        System.out.print("Enter element to check floor function:");
        a=sc.nextInt();
        System.out.println(st.floor(a));
        // Get the closest element greater than or equal to a given element
        System.out.print("Enter element to check ceil function :");
        b=sc.nextInt();
        System.out.println(st.ceiling(b));


        //remove first and last element

        System.out.println("Enter Choice yes/no for removing element");
        String choice=sc.next();
        if(choice.equalsIgnoreCase("yes")){
            st.pollFirst();
            st.pollLast();
            System.out.println("Removed first and last element from the Navigable set");
            System.out.println("Updated Navigable Set :"+st);
        }
        else{
            System.out.println("Ok..Program terminated");
        }
    }
}
