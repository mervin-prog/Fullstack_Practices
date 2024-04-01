
public class MultiThread extends Thread
{
	public void run()
	{
		System.out.println("Thread Name :"+Thread.currentThread().getName()+" "+"Thread Priority :"+Thread.currentThread().getPriority());
	}
	public static void main(String[] args) 
	{
		MultiThread m1 = new MultiThread();
		MultiThread m2 = new MultiThread();
		MultiThread m3 = new MultiThread();
		MultiThread m4 = new MultiThread();
		
		m1.setName("Thread-1");
		m1.setPriority(MAX_PRIORITY);
	
		m2.setName("Thread-2");
		m2.setPriority(NORM_PRIORITY);

		m3.setName("Thread-3");
		m3.setPriority(4);
		
		m4.setName("Thread-4");
		m4.setPriority(MIN_PRIORITY);
		
		m1.start();
		m2.start();
		m3.start();
		m4.start();

	}

}
