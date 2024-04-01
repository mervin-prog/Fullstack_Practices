public class customer {
    private String name;
    private String address;
    private double previousReading;
    private double currentReading;
    
    public customer(String name, String address) {
        this.name = name;
        this.address = address;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public double getPreviousReading() {
        return previousReading;
    }
    public void setPreviousReading(double previousReading) {
        this.previousReading = previousReading;
    }
    public double getCurrentReading() {
        return currentReading;
    }
    public void setCurrentReading(double currentReading) {
        this.currentReading = currentReading;
    }
}
