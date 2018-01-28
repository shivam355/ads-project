package me.ads.module.login.service;

import me.ads.module.login.to.AuthorizationTo;

public interface LoginService {
	public Integer authenticate(String userName, String password);

	public AuthorizationTo authorization(Integer uniqueUserId);
}
