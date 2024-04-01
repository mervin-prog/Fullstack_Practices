
//array List(In c++ closest equivalent for array list is vector-->ex4)
import java.util.*;
public class ex2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int arrsize=sc.nextInt();

        ArrayList<String> arr=new ArrayList<>();
        for(int i=0; i<arrsize; i++){
            String val=sc.next();
            arr.add(val);
        }

        //Hashmap to store string frequency.
        HashMap<String,Integer> mp=new HashMap<>();
        for(String word:arr){
            mp.put(word, mp.getOrDefault(word,0)+1);
        }
        //Iterate using map.entry

        for(Map.Entry<String,Integer>it:mp.entrySet()){
            System.out.println("String: "+it.getKey()+" "+ "Frequency: "+it.getValue());
        }
    }
}
