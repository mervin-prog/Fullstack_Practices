import java.util.*;

public class ex3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str=sc.nextLine();
        HashMap<Character, Integer> mp=new HashMap<>();

        for(int i=0; i<str.length(); i++){
            char c=str.charAt(i);
            mp.put(c, mp.getOrDefault(c,0)+1);
        }
        for(Map.Entry<Character,Integer> map_entry : mp.entrySet()){
            System.out.println(map_entry.getKey()+ " "+ map_entry.getValue());
        }
    }
}
