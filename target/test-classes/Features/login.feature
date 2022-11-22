Feature: To Validate the login Functionality of HotelApp Applications

  Background: 
    Given The User Should be in HotelApp Login Page

  @invalid
  Scenario Outline: To Validate the Login Functionality with invalid Details
    When The User has to fill the Username "<Username>" and password "<Password>"
    And The User has to click the Login Button
    Then The User Should navigate to invalid Error Message

    Examples: 
      | Username | Password |
      | Srini    |  1234567 |

  @valid
  Scenario Outline: To Validate the Login Functionality with valid Details
    When The User has to fill the Username "<Username>" and password "<Password>"
    And The User has to click the Login Button
    Then The User Should navigate to Home Page

    Examples: 
      | Username      | Password |
      | TestCase00001 | password |

  @invalid
  Scenario Outline: To Validate the Login Functionality with invalid Details
    When The User has to fill the Username "<Username>" and password "<Password>"
    And The User has to click the Login Button
    Then The User Should navigate to invalid Error Message

    Examples: 
      | Username      | Password |
      | TestCase00001 | 12345678 |

  @valid
  Scenario Outline: To Validate the Login Functionality with valid Details
    When The User has to fill the Username "<Username>" and password "<Password>"
    And The User has to click the Login Button
    Then The User Should navigate to Home Page

    Examples: 
      | Username | Password |
      | Srini    |  1234567 |