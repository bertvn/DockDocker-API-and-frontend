/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


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
public class CurlHandler {
    
    private final String USER_AGENT = "Mozilla/5.0";
    
    public String ExecuteCurl(String URL, String What, boolean get){
        //execute the curl call
        if(get){
            return sendGet(URL, What);
        } else{
            return sendPost(URL, What);
        }
    }
    
    public String sendGet(String URL, String What){
        
        HttpURLConnection con = null;
        try {
            String url = URL+What;
            
            URL obj = new URL(url);
            con = (HttpURLConnection) obj.openConnection();
            
            // optional default is GET
            con.setRequestMethod("GET");
            //add request header
            con.setRequestProperty("User-Agent", USER_AGENT);
            
            int responseCode = con.getResponseCode();
            
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();
            
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
            
            //print result
            return response.toString();
        } catch (MalformedURLException ex) {
            Logger.getLogger(CurlHandler.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(CurlHandler.class.getName()).log(Level.SEVERE, null, ex);
        }
        return "Request failed";
    }
    
    public String sendPost(String URL, String What){
        //This is used for post requests
        return null;
    }
}
