@reg
Feature: Validate HDFC home page
  in order to apply to wheeler loan

  @1home
  Scenario Outline: verify hdfc home page
    Given I open firefox browser
    When I navigate hdfc url
    Then I click on two wheeler loan icon and goto apply form
    And select twowheeler form page
      | hyderad    |
      | kukatpally |
    Given I fill the details and calcuclate elegibility
      | location  | residency | dobday | emptype  | company   | income |
      | Hyderabad | Hostel    |     10 | Salaried | WIPRO LTD |  40000 |
    Given I enter "<name>" into the name field
    Then I enter "<mobile>" into the mobile number field
    And I enter "<email>" into the email field
    Then I click on submit button

    Examples: 
      | name      | mobile      | email            |
      | vijay     | 77777777777 | vijay@gmail.com  |
      | govardhan |   888888888 | gova@gmail.com   |
      | naresh    |  9999999999 | naresh@gmail.com |
