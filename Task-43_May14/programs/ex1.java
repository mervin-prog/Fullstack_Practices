import java.util.*;
class ex1{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Size :");
        int arr_size=sc.nextInt();
        ArrayList<String> names = new ArrayList<>();
        for(int i=0; i<arr_size; i++){
            names.add(sc.next());
        }
        Iterator<String> it=names.iterator();
        System.out.print("[ ");
        while(it.hasNext()){
            System.out.print(it.next()+" ");
        }
        System.out.print("]");
    }
}