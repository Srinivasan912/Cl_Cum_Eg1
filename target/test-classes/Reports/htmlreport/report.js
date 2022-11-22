$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "To Validate the login Functionality of HotelApp Applications",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To Validate the Login Functionality with invalid Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "The User has to fill the Username \"\u003cUsername\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The User has to click the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "The User Should navigate to invalid Error Message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "Srini",
        "1234567"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User Should be in HotelApp Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_User_Should_be_in_HotelApp_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Login Functionality with invalid Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "The User has to fill the Username \"Srini\" and password \"1234567\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_User_has_to_fill_the_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User has to click the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_User_has_to_click_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User Should navigate to invalid Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_User_Should_navigate_to_invalid_Error_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To Validate the Login Functionality with valid Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "The User has to fill the Username \"\u003cUsername\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The User has to click the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "The User Should navigate to Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "TestCase00001",
        "password"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User Should be in HotelApp Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_User_Should_be_in_HotelApp_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Login Functionality with valid Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "The User has to fill the Username \"TestCase00001\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_User_has_to_fill_the_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User has to click the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_User_has_to_click_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User Should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_User_Should_navigate_to_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To Validate the Login Functionality with invalid Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "The User has to fill the Username \"\u003cUsername\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The User has to click the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "The User Should navigate to invalid Error Message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "TestCase00001",
        "12345678"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User Should be in HotelApp Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_User_Should_be_in_HotelApp_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Login Functionality with invalid Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "The User has to fill the Username \"TestCase00001\" and password \"12345678\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_User_has_to_fill_the_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User has to click the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_User_has_to_click_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User Should navigate to invalid Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_User_Should_navigate_to_invalid_Error_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To Validate the Login Functionality with valid Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "The User has to fill the Username \"\u003cUsername\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The User has to click the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "The User Should navigate to Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "Srini",
        "1234567"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User Should be in HotelApp Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_User_Should_be_in_HotelApp_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Login Functionality with valid Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "The User has to fill the Username \"Srini\" and password \"1234567\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_User_has_to_fill_the_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User has to click the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_User_has_to_click_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User Should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_User_Should_navigate_to_Home_Page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Valid Login\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.steps.StepDefinition.the_User_Should_navigate_to_Home_Page(StepDefinition.java:56)\r\n\tat ✽.The User Should navigate to Home Page(file:src/test/resources/Features/login.feature:40)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});