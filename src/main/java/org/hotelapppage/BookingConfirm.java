package org.hotelapppage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.BaseClass;

public class BookingConfirm extends BaseClass {
	public BookingConfirm() {
		PageFactory.initElements(driver, this );
	}
	@FindBy(id="order_no")
	private WebElement txtOrderNumber;
	@FindBy(id="logout")
	private WebElement btnLogOut;
	@FindBy(id="search_hotel")
	private WebElement btnSearchhotel;
	@FindBy(id="my_itinerary")
	private WebElement btnMyItinerary;
	public WebElement getTxtOrderNumber() {
		return txtOrderNumber;
	}
	public WebElement getBtnLogOut() {
		return btnLogOut;
	}
	public WebElement getBtnSearchhotel() {
		return btnSearchhotel;
	}
	public WebElement getBtnMyItinerary() {
		return btnMyItinerary;
	}

}
