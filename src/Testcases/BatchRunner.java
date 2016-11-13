package Testcases;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format={"html: reports"},tags={"@reg"})
public class BatchRunner {
	
}
