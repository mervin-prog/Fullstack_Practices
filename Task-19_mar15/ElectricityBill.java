import java.util.ArrayList;

public class ElectricityBill {
    private ArrayList<customer> customersList;

    public ElectricityBill()
    {
        customersList=new ArrayList<>();
    }

    public void addCustomer(customer c){
        customersList.add(c);
    }

    public ArrayList<customer> getCustomers(){
        return customersList;
    } 

    public void ReadingDetails(customer c, double previousReading, double currentReading){
        c.setCurrentReading(currentReading);
        c.setPreviousReading(previousReading);
    }

    public void customerBill(customer c){
        double unitsConsumed=c.getCurrentReading()-c.getPreviousReading();
        double amount=unitsConsumed * 5.0;

        System.out.println("Bill for: " + c.getName());
        System.out.println("Address: " + c.getAddress());
        System.out.println("Units Consumed: " + unitsConsumed);
        System.out.println("Amount Due: Rs." + amount);
    }

    public void displayBills(){
        for(customer c: customersList){
            customerBill(c);
            System.out.println();
        }
    }
}
