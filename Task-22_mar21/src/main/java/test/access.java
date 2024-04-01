package test;


import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.Scanner;

public class access {
    private static final String DATABASE_URL = "jdbc:mysql://localhost:3306/demo";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "mervin";
   

    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);
    	
        // Create database tables if they don't exist
    	createTables();
    	 addImage("img1.jpg", "public/img1.jpg");
    	 
         addFile("hello.txt", "public/hello.txt");
         
         addFolder("/output");
        
         System.out.println("Enter Id to Get details :");
         int getid=scanner.nextInt();
         getImage(getid);
         getFile(getid);
         getFolder(getid);
         
         System.out.println("Enter Id to Update details :");
        int updateid=scanner.nextInt();
         updateImage(updateid, "img2.jpg", "public/img2.jpg");
         updateFile(updateid, "hi.txt", "public/hi.txt");
         
         System.out.println("Enter Id to Delete details :");
         int deleteid=scanner.nextInt();
         deleteImage(deleteid);
         deleteFile(deleteid);
         deleteFolder(deleteid);
     }

     public static void createTables() {
         try (Connection conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
              Statement stmt = conn.createStatement()) {
             // Create tables if they don't exist
             stmt.execute("CREATE TABLE IF NOT EXISTS images (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), path VARCHAR(255))");
             stmt.execute("CREATE TABLE IF NOT EXISTS files (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), path VARCHAR(255))");
             stmt.execute("CREATE TABLE IF NOT EXISTS folders (id INT AUTO_INCREMENT PRIMARY KEY, path VARCHAR(255))");
         } catch (SQLException e) {
             e.printStackTrace();
         }
     }

     public static void addImage(String name, String path) {
         try (Connection conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
              PreparedStatement pstmt = conn.prepareStatement("INSERT INTO images (name, path) VALUES (?, ?)")) {
             pstmt.setString(1, name);
             pstmt.setString(2, path);
             pstmt.executeUpdate();
             System.out.println("Image Added");
         } catch (SQLException e) {
             e.printStackTrace();
         }
         
     }

     public static void addFile(String name, String path) {
         try (Connection conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
              PreparedStatement pstmt = conn.prepareStatement("INSERT INTO files (name, path) VALUES (?, ?)")) {
             pstmt.setString(1, name);
             pstmt.setString(2, path);
             pstmt.executeUpdate();
             System.out.println("File Added");
         } catch (SQLException e) {
             e.printStackTrace();
         }
     }

     public static void addFolder(String path) {
         try (Connection conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
              PreparedStatement pstmt = conn.prepareStatement("INSERT INTO folders (path) VALUES (?)")) {
             pstmt.setString(1, path);
             pstmt.executeUpdate();
             System.out.println("Folder Added");
         } catch (SQLException e) {
             e.printStackTrace();
         }
     }

     public static void getImage(int id) {
         try (Connection conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
              PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM images WHERE id = ?")) {
             pstmt.setInt(1, id);
             ResultSet rs = pstmt.executeQuery();
             if (rs.next()) {
                 String name = rs.getString("name");
                 String path = rs.getString("path");
                 // Render image to HTML page
                 renderImageToHTML(name, path);
                 System.out.println("Rendered in input_output.html, run it manually");
             } else {
                 System.out.println("Image not found");
             }
         } catch (SQLException e) {
             e.printStackTrace();
         }
     }

     public static void renderImageToHTML(String name, String path) {
         try (PrintWriter out = new PrintWriter(new FileWriter("image_output.html"))) {
             out.println("<!DOCTYPE html>");
             out.println("<html>");
             out.println("<head>");
             out.println("<title>Image Viewer</title>");
             out.println("</head>");
             out.println("<body>");
             out.println("<h1>Retrieved image: " + name + "</h1>");
             out.println("<img src="+path+">");
             out.println("</body>");
             out.println("</html>");
         } catch (IOException e) {
             e.printStackTrace();
         }
     }
     
     

     public static void getFile(int id) {
         try (Connection conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
              PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM files WHERE id = ?")) {
             pstmt.setInt(1, id);
             ResultSet rs = pstmt.executeQuery();
             if (rs.next()) {
                 String name = rs.getString("name");
                 String path = rs.getString("path");
                 // Use the name and path to work with the file
                 System.out.println("Retrieved file: " + name + " from " + path);
             } else {
                 System.out.println("File not found");
             }
         } catch (SQLException e) {
             e.printStackTrace();
         }
     }

     public static void getFolder(int id) {
         try (Connection conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
              PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM folders WHERE id = ?")) {
             pstmt.setInt(1, id);
             ResultSet rs = pstmt.executeQuery();
             if (rs.next()) {
                 String path = rs.getString("path");
                 // Use the path to work with the folder
                 System.out.println("Retrieved folder from " + path);
             } else {
                 System.out.println("Folder not found");
             }
         } catch (SQLException e) {
             e.printStackTrace();
         }
     }

     public static void updateImage(int id, String newName, String newPath) {
         try (Connection conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
              PreparedStatement pstmt = conn.prepareStatement("UPDATE images SET name = ?, path = ? WHERE id = ?")) {
             pstmt.setString(1, newName);
             pstmt.setString(2, newPath);
             pstmt.setInt(3, id);
             pstmt.executeUpdate();
             System.out.println("Updated the Image");
         } catch (SQLException e) {
             e.printStackTrace();
         }
     }

     public static void updateFile(int id, String newName, String newPath) {
         try (Connection conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
              PreparedStatement pstmt = conn.prepareStatement("UPDATE files SET name = ?, path = ? WHERE id = ?")) {
             pstmt.setString(1, newName);
             pstmt.setString(2, newPath);
             pstmt.setInt(3, id);
             pstmt.executeUpdate();
             System.out.println("Updated the File");
         } catch (SQLException e) {
             e.printStackTrace();
         }
     }

     public static void deleteImage(int id) {
         try (Connection conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
              PreparedStatement pstmt = conn.prepareStatement("DELETE FROM images WHERE id = ?")) {
             pstmt.setInt(1, id);
             pstmt.executeUpdate();
             System.out.println("Image Deleted");
         } catch (SQLException e) {
             e.printStackTrace();
         }
     }

     public static void deleteFile(int id) {
         try (Connection conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
              PreparedStatement pstmt = conn.prepareStatement("DELETE FROM files WHERE id = ?")) {
             pstmt.setInt(1, id);
             pstmt.executeUpdate();
             System.out.println("File Deleted");
         } catch (SQLException e) {
             e.printStackTrace();
         }
     }

     public static void deleteFolder(int id) {
         try (Connection conn = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
              PreparedStatement pstmt = conn.prepareStatement("DELETE FROM folders WHERE id = ?")) {
             pstmt.setInt(1, id);
             pstmt.executeUpdate();
             System.out.println("Folder Deleted");
         } catch (SQLException e) {
             e.printStackTrace();
         }
     }
 }

