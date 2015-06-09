/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utils.request;

/**
 *
 * @author Patrick
 */
public abstract class Request implements IRequest {
    
    protected String domain;
    protected String url;
    protected String response;
    
    public Request(String domain, String url) {
        this.domain = domain;
        this.url = url;
    }

    public String getRespone() {
        return response;
    }
    
    @Override
    public abstract void execute();
}
