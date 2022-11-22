package org.hotelapppage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.BaseClass;

public class SelectHotelPage extends BaseClass {
	public SelectHotelPage() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="radiobutton_0")
	private WebElement radSelect;
	@FindBy(id="continue")
	private WebElement btnContinue;
	@FindBy(id="cancel")
	private WebElement btnCancel;
	public WebElement getRadSelect() {
		return radSelect;
	}
	public WebElement getBtnContinue() {
		return btnContinue;
	}
	public WebElement getBtnCancel() {
		return btnCancel;
	}
	

}
