package org.hotelapppage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.BaseClass;

public class LoginPage extends BaseClass {
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="username")
	private WebElement txtUser;
	@FindBy(id="password")
	private WebElement txtpass;
	@FindBy(id="login")
	private WebElement btnLogin;
	@FindBy(className="auth_error")
	private WebElement invalid;
	
	public WebElement getInvalid() {
		return invalid;
	}
	public WebElement getTxtUser() {
		return txtUser;
	}
	public WebElement getTxtpass() {
		return txtpass;
	}
	public WebElement getBtnLogin() {
		return btnLogin;
	}
	
	
}
