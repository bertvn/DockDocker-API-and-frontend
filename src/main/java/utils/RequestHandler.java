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
        GetRequest req = new GetRequest("http://localhost:4567", "/containerslist");
        req.execute();
        return req.getRespone();
    }
}
