package me.ads.module.appbootstrap.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/boot", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = {
		RequestMethod.GET, RequestMethod.POST })
public class BootController {
	@RequestMapping(path = "/test", produces = MediaType.TEXT_PLAIN_VALUE)
	public String test() {
		return "hello";
	}
}
