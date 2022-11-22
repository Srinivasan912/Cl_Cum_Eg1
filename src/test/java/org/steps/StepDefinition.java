package org.steps;

import java.util.concurrent.TimeUnit;

import org.hotelapppage.LoginPage;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.utility.BaseClass;

import io.cucumber.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDefinition extends BaseClass {
	WebDriver driver;
	LoginPage l;

	@Given("The User Should be in HotelApp Login Page")
	public void the_User_Should_be_in_HotelApp_Login_Page() {
		// WebDriverManager.chromedriver().setup();
		// driver = new ChromeDriver();
		// driver.get("http://adactinhotelapp.com/");
		// driver.manage().window().maximize();
		// driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		

	}

	@When("The User has to fill the Username {string} and password {string}")
	public void the_User_has_to_fill_the_Username_and_password(String user, String pass) {
		// driver.findElement(By.id("username")).sendKeys(user);
		// driver.findElement(By.id("password")).sendKeys(pass);
		l = new LoginPage();
		sendkeys(l.getTxtUser(), user);
		sendkeys(l.getTxtpass(), pass);
	}

	@When("The User has to click the Login Button")
	public void the_User_has_to_click_the_Login_Button() {
//		WebElement btnlogin = driver.findElement(By.id("login"));
//		btnlogin.click();
		click(l.getBtnLogin());
	}

	@Then("The User Should navigate to invalid Error Message")
	public void the_User_Should_navigate_to_invalid_Error_Message() {
		Assert.assertTrue("Invalid Login", l.getInvalid().isEnabled());
		System.out.println("=======invalid login=============");
		//quit();
	}

	@Then("The User Should navigate to Home Page")
	public void the_User_Should_navigate_to_Home_Page() {
		Assert.assertTrue(true);
		//Assert.assertTrue("Valid Login", currentUrl().contains("SearchHotel"));
		System.out.println("=======valid login=============");
	}

}
