package me.ads.module.login.to;

import java.io.Serializable;

import me.ads.container.RestResponse;

public class UserDetailTo extends RestResponse implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer userId;
	private String firstName;
	private String lastName;
	private String mobileNo;
	private String emailId;

	public UserDetailTo() {
	}

	public UserDetailTo(Integer userId, String firstName, String lastName, String mobileNo, String emailId) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.emailId = emailId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
