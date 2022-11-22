package org.hotelapppage;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.BaseClass;
public class BookHotel extends BaseClass{
	public BookHotel() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="first_name")
	private WebElement txtFirstName;
	@FindBy(id="last_name")
	private WebElement txtLastName;
	@FindBy(id="address")
	private WebElement txtAddress;
	@FindBy(id="cc_num")
	private WebElement txtCardNo;
	@FindBy(id="cc_type")
	private WebElement drdCardType;
	@FindBy(id="cc_exp_month")
	private WebElement drdExpiryMonth;
	@FindBy(id="cc_exp_year")
	private WebElement drdExpiryYear;
	@FindBy(id="cc_cvv")
	private WebElement txtCvvNo;
	@FindBy(id="book_now")
	private WebElement btnBookNow;
	@FindBy(id="cancel")
	private WebElement btnCancel;
	public WebElement getTxtFirstName() {
		return txtFirstName;
	}
	public WebElement getTxtLastName() {
		return txtLastName;
	}
	public WebElement getTxtAddress() {
		return txtAddress;
	}
	public WebElement getTxtCardNo() {
		return txtCardNo;
	}
	public WebElement getDrdCardType() {
		return drdCardType;
	}
	public WebElement getDrdExpiryMonth() {
		return drdExpiryMonth;
	}
	public WebElement getDrdExpiryYear() {
		return drdExpiryYear;
	}
	public WebElement getTxtCvvNo() {
		return txtCvvNo;
	}
	public WebElement getBtnBookNow() {
		return btnBookNow;
	}
	public WebElement getBtnCancel() {
		return btnCancel;
	}
	
}
