package me.ads.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "all_users")
public class AllUser implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "UNIQUE_USER_ID")
	private Integer uniqueUserId;

	@Column(name = "USER_NAME")
	private String userName;

	@Column(name = "PASSWORD")
	private String password;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "USER_ID")
	private UserDetail userDetail;

	@Column(name = "IS_ACTIVE")
	private Boolean isActive;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "LAST_LOGIN_DATE")
	private Date lastLoginDate;

	public Integer getUniqueUserId() {
		return uniqueUserId;
	}

	public void setUniqueUserId(Integer uniqueUserId) {
		this.uniqueUserId = uniqueUserId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public UserDetail getUserDetail() {
		return userDetail;
	}

	public void setUserDetail(UserDetail userDetail) {
		this.userDetail = userDetail;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public Date getLastLoginDate() {
		return lastLoginDate;
	}

	public void setLastLoginDate(Date lastLoginDate) {
		this.lastLoginDate = lastLoginDate;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}