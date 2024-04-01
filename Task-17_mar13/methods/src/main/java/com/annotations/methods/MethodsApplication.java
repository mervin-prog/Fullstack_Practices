package com.annotations.methods;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@RestController
public class MethodsApplication {

    private Map<Integer, String> data = new HashMap<>();

    public static void main(String[] args) {
        SpringApplication.run(MethodsApplication.class, args);
    }

    @RequestMapping(value = "/data/{id}", method = RequestMethod.GET) //RequestMapping-> annotation is used for each endpoint
    public ResponseEntity<String> getData(@PathVariable int id) {   //PathVariable ->   retrieve the ID from the URL
        String result = data.getOrDefault(id, "Not found");
        return ResponseEntity.ok(result);
    }

    @RequestMapping(value = "/data", method = RequestMethod.POST)
    public ResponseEntity<String> addData(@RequestParam int id, @RequestParam String value) { // ResponseEntity-> structured response with status codes and headers.
        data.put(id, value);
        return ResponseEntity.ok("Data added successfully");
    }

    @RequestMapping(value = "/data/{id}", method = RequestMethod.PUT)
    public ResponseEntity<String> updateData(@PathVariable int id, @RequestParam String value) {
        if (data.containsKey(id)) {
            data.put(id, value);
            return ResponseEntity.ok("Data updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(value = "/data/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<String> deleteData(@PathVariable int id) {
        if (data.containsKey(id)) {
            data.remove(id);
            return ResponseEntity.ok("Data deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}


