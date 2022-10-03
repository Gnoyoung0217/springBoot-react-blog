package com.jerryLog.www.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jerryLog.www.bean.Users;

@RestController
@RequestMapping(value = "/api/users/")
public class LoginController {
	
	@PostMapping(value = "/login")
	public Map login(@RequestBody Users userInfo) {
		String email = userInfo.getEmail();
		String name = userInfo.getName();
		String password = userInfo.getPassword();
		String confirmPassword = userInfo.getConfirmPassword();
		
		System.out.println(email);
		System.out.println(name);
		System.out.println(password);
		System.out.println(confirmPassword);
		
		Map returnMap = new HashMap();
		returnMap.put("loginSuccess", true);
		returnMap.put("email", email);
		returnMap.put("name", name);
		returnMap.put("password", password);
		returnMap.put("confirmPassword", confirmPassword);
				
		return returnMap;
	}
	
	@PostMapping(value = "/register")
	public Map register(@RequestBody Users userInfo) {
		String email = userInfo.getEmail();
		String name = userInfo.getName();
		String password = userInfo.getPassword();
		String confirmPassword = userInfo.getConfirmPassword();
		
		System.out.println(email);
		System.out.println(name);
		System.out.println(password);
		System.out.println(confirmPassword);
		
		Map returnMap = new HashMap();
		returnMap.put("register", true);
		returnMap.put("email", email);
		returnMap.put("name", name);
		returnMap.put("password", password);
		returnMap.put("confirmPassword", confirmPassword);
		
		return returnMap;
	}
	
	@GetMapping(value = "/logout")
	public Map logout() {
		Map returnMap = new HashMap();
		returnMap.put("success", true);
		return returnMap;
	}
}
