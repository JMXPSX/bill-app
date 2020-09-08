package com.accenture.web.restwebservices.jwt.resource;

import java.io.Serializable;

import org.springframework.security.core.userdetails.UserDetails;

public class JwtTokenResponse implements Serializable {

  private static final long serialVersionUID = 8317676219297719109L;

  private final String username;
  private final String password;
  private final String token;

    public JwtTokenResponse(String token, UserDetails userDetails) {
        
        this.username = userDetails.getUsername();
        this.password = userDetails.getPassword();
        this.token = token;
    }
    
    public String getUsername() {
        return this.username;
    }
    
    public String getPassword() {
        return this.password;
    }

    public String getToken() {
        return this.token;
    }
    
    
}