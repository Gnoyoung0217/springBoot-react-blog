package com.jerryLog.www.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@RequestMapping(value = "/home")
	public List<String> home() {
		return Arrays.asList("안녕하세요", "여기는 home 컨트롤러 입니다.", "home메소드");
	}
}