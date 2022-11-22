package org.run;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.utility.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", 
				glue = "org.steps", 
				dryRun = false, 
				tags = "@invalid or @valid", 
				monochrome=true,
				plugin = {"json:target\\Reports\\jsonreport\\report.json",
				})
public class TestRunner {
	@AfterClass
	public static void reports1() {
		JVMReport.generateJVMReport();
		System.out.println("JVM Report Generated....");
	}

}
