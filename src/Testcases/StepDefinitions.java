package Testcases;

import java.util.List;
import java.util.Map;
import org.openqa.selenium.support.PageFactory;
import Base.TestBase;
import Pages.GetelegibilityPage;
import Pages.HomePage;
import Pages.SuperBikesPage;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class StepDefinitions extends TestBase{
	TestBase pom=new TestBase();
	@Given("^I open firefox browser$")
	public void I_open_firefox_browser() throws Throwable {
	   System.out.println("I open firefox browser");
	   pom.openbrowser();
	}

	@When("^I navigate hdfc url$")
	public void I_navigate_hdfc_url() throws Throwable {
	    System.out.println("I navigate hdfc url");
	    pom.navigate("http://hdfcbank.com");
	}

	@Then("^I click on two wheeler loan icon and goto apply form$")
	public void I_click_on_two_wheeler_loan_icon_and_goto_apply_form() throws Throwable {
	    System.out.println("I click on two wheeler loan icon and goto apply form");
	    HomePage hp=PageFactory.initElements(driver, HomePage.class);
	    hp.gotoelegibility();
	}
	@Then("^select twowheeler form page$")
	public void select_twowheeler_form_page() throws Throwable {
	   System.out.println("select twowheeler form page");
	   pom.selectpopup();
	}
	
	@Given("^I fill the details and calcuclate elegibility$")
	public void I_fill_the_details_and_calcuclate_elegibility(DataTable table) throws Exception{
		System.out.println("I fill the details and calcuclate elegibility");
		List<Map<String, String>> data=table.asMaps();
		System.out.println(data.get(0).get("location"));
		System.out.println(data.get(0).get("residency"));
		System.out.println(data.get(0).get("dobday"));
		System.out.println(data.get(0).get("emptype"));
		System.out.println(data.get(0).get("company"));
		System.out.println(data.get(0).get("income"));
		GetelegibilityPage gp=PageFactory.initElements(driver, GetelegibilityPage.class);
		gp.gotoDecidetoApply(data.get(0).get("location"), data.get(0).get("residency"), data.get(0).get("dobday"), data.get(0).get("emptype"), data.get(0).get("company"), data.get(0).get("income"));
		
	}
	
	
	@Given("^I enter \"([^\"]*)\" into the name field$")
	public void I_enter_into_the_name_field(String name) throws Throwable {
	   System.out.println("I enter "+name+" into the name field");	
	   SuperBikesPage sp=PageFactory.initElements(driver, SuperBikesPage.class);
	   Thread.sleep(3000);
	   sp.entername(name);
	}

	@Then("^I enter \"([^\"]*)\" into the mobile number field$")
	public void I_enter_into_the_mobile_number_field(String mobile) throws Throwable {
	    System.out.println("I enter "+mobile+" into the mobile number field");	  
	    SuperBikesPage sp=PageFactory.initElements(driver, SuperBikesPage.class);
		sp.entermobile(mobile);
	}

	@Then("^I enter \"([^\"]*)\" into the email field$")
	public void I_enter_into_the_email_field(String email) throws Throwable {
	   System.out.println("I enter "+email+" into the email field");	
	   SuperBikesPage sp=PageFactory.initElements(driver, SuperBikesPage.class);
	   sp.enteremail(email);
	}

	@Then("^I click on submit button$")
	public void I_click_on_submit_button() throws Throwable {
	  System.out.println("I click on submit button");
	  SuperBikesPage sp=PageFactory.initElements(driver, SuperBikesPage.class);	 
	  sp.clicksubmit();
	  driver.quit();
	}

}
