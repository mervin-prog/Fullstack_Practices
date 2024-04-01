//Linked List.-->maintains insertion order,

import java.util.*;
public class ex3 {
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        Set<String> st = new LinkedHashSet<>();
        
        int size=sc.nextInt();
        for(int i=0; i<size; i++){
            st.add(sc.next());
        }
        System.out.println(st);
    }
}
