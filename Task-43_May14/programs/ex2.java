import java.util.*;

public class ex2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Size :");
        int arr_size=sc.nextInt();

        LinkedList<String> fruits = new LinkedList<>();

        for(int i=0; i<arr_size-1; i++){
            fruits.add(sc.next());
        }
        fruits.add(1, "Grapes");
        fruits.removeLast();

        Iterator<String> it=fruits.iterator();
        System.out.print("[ ");
        while(it.hasNext()){
            System.out.print(it.next()+" ");
        }
        System.out.print("]");
    }
}
