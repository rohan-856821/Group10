package TestRunner;
import java.io.IOException;

import org.junit.AfterClass;
import org.junit.runner.RunWith;



import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith (Cucumber.class)
@CucumberOptions(features = "src/test/resources/FeatureFile", glue = "StepDeffinations",monochrome = true, 
plugin = {"pretty" , 
		  "html:TestReports/cucumber", 
		 })
public class RunnerClass {
	 
	 
			
	
		
	

	}


