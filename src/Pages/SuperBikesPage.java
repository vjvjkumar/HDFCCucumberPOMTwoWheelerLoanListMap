package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SuperBikesPage {
	
	public WebDriver driver;
	public SuperBikesPage(WebDriver driver){
		this.driver=driver;
	}
	@FindBy(xpath="//*[@id='lcform_name']")
	public WebElement name;
	@FindBy(xpath="//*[@id='lcform_mobile']")
	public WebElement mobile;
	@FindBy(xpath="//*[@id='lcform_email']")
	public WebElement email;
	
	@FindBy(xpath="//*[@id='lcform_0']")
	public WebElement submit;
	
	public void entername(String myname){
		name.sendKeys(myname);		
	}
	public void entermobile(String mymobile){
		mobile.sendKeys(mymobile);		
	}
	public void enteremail(String myemail){
		email.sendKeys(myemail);		
	}
	public void clicksubmit(){
		submit.click();	
	}

}
