package me.ads.container;

import java.io.Serializable;

public class RestResponse implements Serializable {
	private static final long serialVersionUID = 1L;

	public boolean status;

	public RestResponse() {
		this.status = true;
	}

	public RestResponse(boolean status) {
		super();
		this.status = status;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public static RestResponse failure() {
		return new RestResponse(false);
	}

}
