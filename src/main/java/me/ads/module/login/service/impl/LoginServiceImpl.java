package me.ads.module.login.service.impl;

import org.springframework.stereotype.Component;

import me.ads.module.login.service.LoginService;
import me.ads.module.login.to.AuthorizationTo;

@Component("loginService")
public class LoginServiceImpl implements LoginService {

	public Integer authenticate(String userName, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	public AuthorizationTo authorization(Integer uniqueUserId) {
		// TODO Auto-generated method stub
		return null;
	}

}
