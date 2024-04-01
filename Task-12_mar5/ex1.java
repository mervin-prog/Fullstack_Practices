
//Hashset -->It extends Set interface, random order is followed. 


import java.util.*;
class ex1{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        int size=sc.nextInt();

        Set<String> st=new HashSet<>();
        for(int i=0; i<size; i++){
            String str=sc.next();
            st.add(str.toUpperCase());
        }
        Iterator<String> it=st.iterator();
         while(it.hasNext()){
            System.out.println(it.next());
         }
    }
}