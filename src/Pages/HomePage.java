package Pages;

import java.util.Iterator;
import java.util.Set;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	public WebDriver driver;
	
	public HomePage(WebDriver driver){
		this.driver=driver;
	}
	
	@FindBy(xpath="//*[@id='element2']/div[1]/div/div[5]/div[1]/div[1]/div[2]/div[4]/img[1]")
	public WebElement twicon;
	@FindBy(xpath="//*[@id='element2']/div[1]/div/div[5]/div[1]/div[1]/div[2]/div[4]/div[1]/div/div/a[1]")
	public WebElement applynow;
	
	public GetelegibilityPage gotoelegibility(){
		twicon.click();
		applynow.click();
		return PageFactory.initElements(driver, GetelegibilityPage.class);
		
	}
	
	
	

}
