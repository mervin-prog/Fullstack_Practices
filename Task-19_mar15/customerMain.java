import java.util.Scanner;

public class customerMain {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ElectricityBill e= new ElectricityBill();
        boolean exit=false;
        while(!exit){
            System.out.println("Choose an option:");
            System.out.println("1. Add a new customer");
            System.out.println("2. Enter reading details");
            System.out.println("3. Generate bill for a customer");
            System.out.println("4. Generate all bills");
            System.out.println("5. Exit");

            int choice=sc.nextInt();
            sc.nextLine();

            switch(choice){
                case 1: 

                System.out.println("Enter customer name:");
                String name = sc.nextLine();
                System.out.println("Enter customer address:");
                String address = sc.nextLine();
                e.addCustomer(new customer(name, address));
                System.out.println("Customer added successfully.");
                break;

                case 2:

                for(customer c:e.getCustomers()){
                    System.out.println("Enter Your Current Reading: "+c.getName());
                    double currentReading=sc.nextDouble();
                    System.out.println("Enter Your Previous Reading: "+c.getName());
                    double previousReading=sc.nextDouble();
                    e.ReadingDetails(c, previousReading, currentReading);
                    
                }
                break;

                case 3:

                for(customer c: e.getCustomers()){
                    System.out.println("Enter Customer Name :");
                    String user=sc.nextLine();
                    String tocompareString=c.getName().toLowerCase();
                    if(tocompareString.contains(user.toLowerCase()))
                    {
                        e.customerBill(c);
                        break;
                    }
                }
                break;

                case 4:

                System.out.println("Sure !........");
                e.displayBills();
                break;

                case 5:

                exit=true;
                System.out.println("It's my exit..bye!");
                break;

                default:

                System.out.println("Invalid choice. Please try again.");
                break;
            }
        }
    }
}
