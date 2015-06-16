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
        RequestHandler handler = new RequestHandler();

        get("/containerslist", "application/json", (request, response) -> {
            return handler.getContainerList();
        });
        
        get("/serverslist", "application/json", (request, response) -> {
            return handler.getServerList();
        });
        
        get("/deleteServer/:id", "application/json", (request, response) -> {
            return handler.deteleServerFromList(request.params(":id"));
        });
        
        get("/addServer/:serverName/:serverIp/:dockerStatus", "application/json", (request, response) -> {
            return handler.addServerToList(request.params(":serverName"), request.params(":serverIp"), request.params(":dockerStatus"));
        });
        
        get("/containers/:id/:action", "application/json", (request, response) -> {
            return handler.ContainerManage(request.params(":id"), request.params(":action"));
        });
        
        get("/loglist", "application/json", (request, response) -> {
            return handler.getLogList();
        });
        
        get("/read/:name", "application/json", (request, response) -> {
            return handler.getLogs(request.params(":name"));
        });

    }
}
