
//Data I/O stream implementation.
import java.io.*;
public class ex2 {

    public static void main(String args[]){
        try {
            DataOutputStream dos=new DataOutputStream(new FileOutputStream("info.txt"));
            dos.writeDouble(5.5);
            dos.writeInt(10);
            dos.writeBoolean(true);
            dos.writeUTF("Alex");

            DataInputStream dis=new DataInputStream(new FileInputStream("info.txt"));
            double val1=dis.readDouble();
            int val2=dis.readInt();
            boolean val3=dis.readBoolean();
            String val4=dis.readUTF();

            System.out.println(val1+" "+val2+" "+val3+" "+val4);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
