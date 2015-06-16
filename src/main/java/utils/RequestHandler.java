/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utils;

import utils.request.GetRequest;

/**
 *
 * @author Patrick
 */
public class RequestHandler {
 
    public String getContainerList() {
        GetRequest req = new GetRequest("http://localhost:4000", "/containerslist");
        req.execute();        
        return req.getRespone();
    }

    public String getLogs(String name) {
        GetRequest req = new GetRequest("http://localhost:4567", "/read/"+name);
        req.execute();
        return req.getRespone();
    }

    public String getLogList() {
        GetRequest req = new GetRequest("http://localhost:4567", "/loglist");
        req.execute();
        return req.getRespone();
    }

    public String ContainerManage(String id, String what) {
        if(what.equals("start") || what.equals("stop") || what.equals("restart")){
            GetRequest req = new GetRequest("http://localhost:4567", "/containers/"+id+"/"+what);
            req.execute();
            return req.getRespone();
        }
        else{
            return "no valid call";
        }
    }

    public String getServerList() {
        GetRequest req = new GetRequest("http://localhost:4567", "/servers");
        req.execute();
        return req.getRespone();
    }
}
