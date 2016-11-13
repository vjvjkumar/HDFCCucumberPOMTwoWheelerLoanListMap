package Base;

import java.util.Iterator;
import java.util.Set;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TestBase {
	public static WebDriver driver;
	
	public void openbrowser(){
		driver=new FirefoxDriver();
		driver.manage().window().maximize();
	}
	public void navigate(String url){
		driver.get(url);
	}
	
	public void closebrowser(){
		driver.quit();
	}
	public void selectpopup(){
		String lastwindow=null;
		Set<String> allwindowsids=driver.getWindowHandles();
		Iterator<String> iter=allwindowsids.iterator();
		while(iter.hasNext()){
			lastwindow=iter.next();
		}
		driver.switchTo().window(lastwindow);
	}

}
