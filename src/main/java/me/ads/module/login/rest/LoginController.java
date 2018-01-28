package me.ads.module.login.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import me.ads.entity.UserDetail;
import me.ads.module.login.to.IdPasswordTo;
import me.ads.module.login.to.UserDetailTo;
import me.ads.repository.AllUserRepository;

@RestController
@RequestMapping(path = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = {
		RequestMethod.GET, RequestMethod.POST })
public class LoginController {
	@Autowired
	AllUserRepository allUserRepository;

	@RequestMapping(path = "/execute")
	public UserDetailTo login(@RequestBody IdPasswordTo idPasswordTo) {
		UserDetailTo userDetailTo = null;
		Integer uniqueUserId = allUserRepository.authenticate(idPasswordTo.getUserName(), idPasswordTo.getPassword());
		if (uniqueUserId == null) {
			return null;
		}
		UserDetail userDetail = allUserRepository.authorization(uniqueUserId);
		if (userDetail == null) {
			return null;
		}
		userDetailTo = new UserDetailTo(userDetail.getUserId(), userDetail.getFirstName(), userDetail.getLastName(),
				userDetail.getMobileNo(), userDetail.getEmailId());
		return userDetailTo;
	}


}
