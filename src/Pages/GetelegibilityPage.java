package Pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GetelegibilityPage {
	public WebDriver driver;
	public GetelegibilityPage(WebDriver driver){
		this.driver=driver;
	}
	
	@FindBy(xpath="//*[@id='eForm_form_applicantPlaceHolder_residenceCity_value']")
	public WebElement location;
	@FindBy(xpath="//*[@id='eForm_form_details_applicant_residenceType']")
	public WebElement residencetype;
	@FindBy(xpath="//*[@id='eForm_form_applicantPlaceHolder_dob_day']")
	public WebElement dobd;
	@FindBy(xpath="//*[@id='eForm_form_applicantPlaceHolder_dob_month']")
	public WebElement dobmonth;
	@FindBy(xpath="//*[@id='eForm_form_applicantPlaceHolder_dob_year']")
	public WebElement dobyear;
	@FindBy(xpath="//*[@id='twoWheelerName6254']")
	public WebElement makemodelradio;
	@FindBy(xpath="//*[@id='eForm_form_details_bookedVehicletrue']")
	public WebElement bookedvehichleradio;
	@FindBy(xpath="//*[@id='eForm_form_details_applicant_existingBankAccounts_0__bank_id2']")
	public WebElement hdfcacradio;
	
	@FindBy(xpath="//*[@id='eForm_form_details_applicant_employment_type']")
	public WebElement employmenttype;
	@FindBy(xpath="//*[@id='eForm_form_applicantPlaceHolder_companyName']")
	public WebElement companyname;
	@FindBy(xpath="//*[@id='eForm_form_details_applicant_income_grossMonthlyIncome']")
	public WebElement income;
	@FindBy(xpath="//*[@id='eForm_form_formDisclaimer']/label")
	public WebElement checkbox;
	@FindBy(xpath="//*[@id='eForm_0']")
	public WebElement calcelegibility;
	
	
	public SuperBikesPage gotoDecidetoApply(String loc, String resi, String dobday, String emptype,String comp,String incom) throws Exception{
		location.sendKeys(loc);
		residencetype.sendKeys(resi);
		dobd.sendKeys(dobday);
		//dobd.sendKeys(dobday,Keys.TAB,"2",Keys.TAB,"1982");
		dobmonth.sendKeys("2");
		dobyear.sendKeys("1982");		
		makemodelradio.click();
		//bookedvehichleradio.click();		
		employmenttype.sendKeys(emptype,Keys.TAB);
		companyname.sendKeys(comp);
		income.sendKeys(incom,Keys.TAB);
		hdfcacradio.click();
		//checkbox.click();
		Thread.sleep(1000);
		calcelegibility.click();
		return PageFactory.initElements(driver, SuperBikesPage.class);		
	}
}
