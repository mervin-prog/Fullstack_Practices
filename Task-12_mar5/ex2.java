//Treeset implements SortedSet interface

import java.util.*;
class Library{
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        SortedSet<Integer> st = new TreeSet<>();
        
        int size=sc.nextInt();
        for(int i=0; i<size; i++){
            st.add(sc.nextInt());
        }

        System.out.println("Sorted Set :"+ st);
        //After removing first and last element.
        st.remove(st.first());
        st.remove(st.last());

        System.out.println("Updated Sorted Set :"+st);
        
    }
}