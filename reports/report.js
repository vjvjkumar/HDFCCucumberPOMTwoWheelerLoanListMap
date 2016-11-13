$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027Testcases\\001homepage.feature\u0027");
formatter.feature({
  "line": 2,
  "name": "Validate HDFC home page",
  "description": "in order to apply to wheeler loan",
  "id": "validate-hdfc-home-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@reg"
    }
  ]
});
formatter.scenario({
  "line": 21,
  "name": "verify hdfc home page",
  "description": "",
  "id": "validate-hdfc-home-page;verify-hdfc-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@1home"
    },
    {
      "line": 1,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate hdfc url",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on two wheeler loan icon and goto apply form",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select twowheeler form page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill the details and calcuclate elegibility",
  "rows": [
    {
      "cells": [
        "location",
        "residency",
        "dobday",
        "emptype",
        "company",
        "income"
      ],
      "line": 12
    },
    {
      "cells": [
        "Hyderabad",
        "Hostel",
        "10",
        "Salaried",
        "WIPRO LTD",
        "40000"
      ],
      "line": 13
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter \"vijay\" into the name field",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter \"77777777777\" into the mobile number field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter \"vijay@gmail.com\" into the email field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.I_open_firefox_browser()"
});
formatter.result({
  "duration": 7874628689,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_navigate_hdfc_url()"
});
formatter.result({
  "duration": 3704641424,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_click_on_two_wheeler_loan_icon_and_goto_apply_form()"
});
formatter.result({
  "duration": 812337759,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.select_twowheeler_form_page()"
});
formatter.result({
  "duration": 269655233,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_fill_the_details_and_calcuclate_elegibility(DataTable)"
});
formatter.result({
  "duration": 6296451662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vijay",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_name_field(String)"
});
formatter.result({
  "duration": 3196057963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "77777777777",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_mobile_number_field(String)"
});
formatter.result({
  "duration": 152929821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vijay@gmail.com",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_email_field(String)"
});
formatter.result({
  "duration": 182621473,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_click_on_submit_button()"
});
formatter.result({
  "duration": 2640533816,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify hdfc home page",
  "description": "",
  "id": "validate-hdfc-home-page;verify-hdfc-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@1home"
    },
    {
      "line": 1,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate hdfc url",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on two wheeler loan icon and goto apply form",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select twowheeler form page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill the details and calcuclate elegibility",
  "rows": [
    {
      "cells": [
        "location",
        "residency",
        "dobday",
        "emptype",
        "company",
        "income"
      ],
      "line": 12
    },
    {
      "cells": [
        "Hyderabad",
        "Hostel",
        "10",
        "Salaried",
        "WIPRO LTD",
        "40000"
      ],
      "line": 13
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter \"govardhan\" into the name field",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter \"888888888\" into the mobile number field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter \"gova@gmail.com\" into the email field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.I_open_firefox_browser()"
});
formatter.result({
  "duration": 6277309401,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_navigate_hdfc_url()"
});
formatter.result({
  "duration": 4837457353,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_click_on_two_wheeler_loan_icon_and_goto_apply_form()"
});
formatter.result({
  "duration": 748452103,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.select_twowheeler_form_page()"
});
formatter.result({
  "duration": 231378409,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_fill_the_details_and_calcuclate_elegibility(DataTable)"
});
formatter.result({
  "duration": 6514223802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "govardhan",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_name_field(String)"
});
formatter.result({
  "duration": 3098254141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "888888888",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_mobile_number_field(String)"
});
formatter.result({
  "duration": 115979582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gova@gmail.com",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_email_field(String)"
});
formatter.result({
  "duration": 144457977,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_click_on_submit_button()"
});
formatter.result({
  "duration": 926526750,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify hdfc home page",
  "description": "",
  "id": "validate-hdfc-home-page;verify-hdfc-home-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@1home"
    },
    {
      "line": 1,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate hdfc url",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on two wheeler loan icon and goto apply form",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select twowheeler form page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill the details and calcuclate elegibility",
  "rows": [
    {
      "cells": [
        "location",
        "residency",
        "dobday",
        "emptype",
        "company",
        "income"
      ],
      "line": 12
    },
    {
      "cells": [
        "Hyderabad",
        "Hostel",
        "10",
        "Salaried",
        "WIPRO LTD",
        "40000"
      ],
      "line": 13
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter \"naresh\" into the name field",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter \"9999999999\" into the mobile number field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter \"naresh@gmail.com\" into the email field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.I_open_firefox_browser()"
});
formatter.result({
  "duration": 6966111342,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_navigate_hdfc_url()"
});
formatter.result({
  "duration": 3887958265,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_click_on_two_wheeler_loan_icon_and_goto_apply_form()"
});
formatter.result({
  "duration": 763405057,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.select_twowheeler_form_page()"
});
formatter.result({
  "duration": 270831285,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_fill_the_details_and_calcuclate_elegibility(DataTable)"
});
formatter.result({
  "duration": 6339933902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naresh",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_name_field(String)"
});
formatter.result({
  "duration": 3112997545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_mobile_number_field(String)"
});
formatter.result({
  "duration": 131949500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naresh@gmail.com",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_email_field(String)"
});
formatter.result({
  "duration": 156074367,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_click_on_submit_button()"
});
formatter.result({
  "duration": 2374499965,
  "status": "passed"
});
});