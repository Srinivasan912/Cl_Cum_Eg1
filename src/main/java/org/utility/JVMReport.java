package org.utility;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;


public class JVMReport {
	public static void main(String[] args) {
		System.out.println(System.getProperty("user.dir"));
	}
	
	public static void generateJVMReport() {
		File loc= new File("/Xamples/target/report");
		Configuration con= new Configuration(loc, "HotelApp");
		List<String> jsonfile=new ArrayList<String>();
		jsonfile.add("src\\test\\resources\\Reports\\jsonreport\\report.json");
		ReportBuilder r=new ReportBuilder(jsonfile, con);
		r.generateReports();
		
	}

}
