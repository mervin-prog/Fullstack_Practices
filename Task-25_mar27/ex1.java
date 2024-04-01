
import java.util.*;
public class ex1 {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a String : ");
        String obj=sc.nextLine();

        char chArr[]=obj.toCharArray();

        int AlphabetCount=0;
        int DigitsCount=0;
        int SpecialCharsCount=0;

        for(char c:chArr){
            if(Character.isLetter(c))
            AlphabetCount++;
            else if(Character.isDigit(c))
            DigitsCount++;
            else
            SpecialCharsCount++;
        }

        System.out.println("No.of.Alphabets in the given string : "+AlphabetCount);
        System.out.println("No.of.Digits in the given string : "+DigitsCount);
        System.out.println("No.of.Special characters in the given string : "+SpecialCharsCount);

    }
}
