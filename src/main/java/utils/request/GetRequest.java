/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utils.request;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Patrick
 */
public class GetRequest extends Request {

    public GetRequest(String domain, String url) {
        super(domain, url);
    }

    @Override
    public void execute() {
        HttpURLConnection con = null;
        try {            
            URL obj = new URL(domain+url);
            con = (HttpURLConnection) obj.openConnection();
            
            con.setRequestMethod("GET");            
            int responseCode = con.getResponseCode();
            
            /*
             * TODO: add check
             * IF response code == ##
             *   do something
             * ELSE 
             *   do something else
             *
             */
            
            // Read response
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer responseReader = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                responseReader.append(inputLine);
            }
            in.close();
            
            // Set response
            response = responseReader.toString();
        } catch (MalformedURLException ex) {
            Logger.getLogger(this.getClass().getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(this.getClass().getName()).log(Level.SEVERE, null, ex);
        } finally {
            con.disconnect();
        }
    }
    
}
