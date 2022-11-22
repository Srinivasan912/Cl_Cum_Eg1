package org.hotelapppage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.BaseClass;

public class SearchHotelPage extends BaseClass {
	
	public SearchHotelPage() {
		PageFactory.initElements(driver, this);
	}	
	@FindBy(id="location")
	private WebElement drdLocation;
	@FindBy(id="hotels")
	private WebElement drdhotels;
	@FindBy(id="room_type")
	private WebElement drdRoomtype;
	@FindBy(id="room_nos")
	private WebElement drdRoomnos;
	@FindBy(id="datepick_in")
	private WebElement txtDatein ;
	@FindBy(id="datepick_out")
	private WebElement txtDateout ;
	@FindBy(id="adult_room")
	private WebElement drdAdultroom ;
	@FindBy(id="child_room")
	private WebElement drdChildroom ;
	@FindBy(id="Submit")
	private WebElement btnSearch ;
	@FindBy(id="Reset")
	private WebElement btnReset ;
	
	public WebElement getDrdLocation() {
		return drdLocation;
	}
	public WebElement getDrdhotels() {
		return drdhotels;
	}
	public WebElement getDrdRoomtype() {
		return drdRoomtype;
	}
	public WebElement getDrdRoomnos() {
		return drdRoomnos;
	}
	public WebElement getTxtDatein() {
		return txtDatein;
	}
	public WebElement getTxtDateout() {
		return txtDateout;
	}
	public WebElement getDrdAdultroom() {
		return drdAdultroom;
	}
	public WebElement getDrdChildroom() {
		return drdChildroom;
	}
	public WebElement getBtnSearch() {
		return btnSearch;
	}
	public WebElement getBtnReset() {
		return btnReset;
	}
	
	
}
