/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.BufferedInputStream;
import static spark.Spark.*;
import utils.RequestHandler;

/**
 *
 * @author Bert
 */
public class Sparks implements spark.servlet.SparkApplication {

    //private String projectLocation = "C:\\Users\\Bert\\Documents\\NetBeansProjects";
    
    @Override
    public void init() {
        

        get("/containerslist", "application/json", (request, response) -> {
            RequestHandler handler = new RequestHandler();
            return handler.getContainerList();
        });
        
        get("/container/:id/:action", "application/json", (request, response) -> {
            RequestHandler handler = new RequestHandler();
            return handler.ContainerManage(request.params(":id"), request.params(":action"));
        });
        
        get("/loglist", "application/json", (request, response) -> {
            RequestHandler handler = new RequestHandler();
            return handler.getLogList();
        });
        
        get("/read/:name", "application/json", (request, response) -> {
            RequestHandler handler = new RequestHandler();
            return handler.getLogs(request.params(":name"));
        });
        
        /*
        TODO: Remove this?
        
        get("/hello/:name", "application/json", (request, response) -> {
            return "Hello: " + request.params(":name");
        });

        get("/list", "application/json", (request, response) -> {
            return "[\n"
                    + "{\n"
                    + "\"index\": 1,\n"
                    + "\"age\": 20,\n"
                    + "\"salary\": 15.5158,\n"
                    + "\"name\": \"Katherine\",\n"
                    + "\"surname\": \"Fisher\",\n"
                    + "\"fullname\": \"Heather Nixon\",\n"
                    + "\"email\": \"claire@goldstein.lc\"\n"
                    + "},\n"
                    + "{\n"
                    + "\"index\": 2,\n"
                    + "\"age\": 41,\n"
                    + "\"salary\": 12.9761,\n"
                    + "\"name\": \"Sandra\",\n"
                    + "\"surname\": \"Townsend\",\n"
                    + "\"fullname\": \"Jessica Proctor\",\n"
                    + "\"email\": \"curtis@barrett.ps\"\n"
                    + "},\n"
                    + "{\n"
                    + "\"index\": 3,\n"
                    + "\"age\": 13,\n"
                    + "\"salary\": 15.3979,\n"
                    + "\"name\": \"Marlene\",\n"
                    + "\"surname\": \"Dyer\",\n"
                    + "\"fullname\": \"Judith Blackwell\",\n"
                    + "\"email\": \"hazel@eason.tz\"\n"
                    + "}]";
        });
        
        get("/cyvan","application/json", (request, response)-> {
            
            Process p = Runtime.getRuntime().exec("java -jar " + projectLocation + "\\DockDocker-Container-Management\\DockDocker-ContainerManagement\\dist\\DockDocker-ContainerManagement.jar");
        BufferedInputStream bis = new BufferedInputStream(p.getInputStream());
        synchronized (p) {
            p.waitFor();
        }
        StringBuilder res = new StringBuilder();
        int b=0;
        while((b=bis.read()) >0){

            res.append((char)b);    
        }
            
            return "[" + res.toString() + "]";
        });
        */
    }
}
