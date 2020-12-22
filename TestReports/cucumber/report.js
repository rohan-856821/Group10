$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Steps.feature");
formatter.feature({
  "line": 1,
  "name": "Hackathon Project",
  "description": "",
  "id": "hackathon-project",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Create New User",
  "description": "",
  "id": "hackathon-project;create-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Navigate to the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "In the Home page Enter the User Name and Password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click Login Verify Login successful",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Employee Details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Create New User Link verify New user page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter all the mandatory details",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Save Details",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Employee Details Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.navigate_to_the_Application()"
});
formatter.result({
  "duration": 15406818460,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.in_the_Home_page_Enter_the_User_Name_and_Password()"
});
formatter.result({
  "duration": 8496901533,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_Login_Verify_Login_successful()"
});
formatter.result({
  "duration": 632456637,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_Employee_Details()"
});
formatter.result({
  "duration": 4764224115,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.create_New_User_Link_verify_New_user_page_is_displayed()"
});
formatter.result({
  "duration": 2847853789,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.enter_all_the_mandatory_details()"
});
formatter.result({
  "duration": 6843947456,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027ULTRON\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002714\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\Rohan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49415}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 09847ce19f499a1d89162ff493019318\n*** Element info: {Using\u003dxpath, value\u003d//textarea[@name\u003d\u0027address2\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat PageObject.EmpDetails.address2(EmpDetails.java:42)\r\n\tat StepDeffinations.StepDefination.enter_all_the_mandatory_details(StepDefination.java:187)\r\n\tat ✽.And Enter all the mandatory details(Steps.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefination.click_on_Save_Details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.click_on_Employee_Details_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.click_on_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Edit details",
  "description": "",
  "id": "hackathon-project;edit-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Navigate to the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "In the Home page Enter the User Name and Password",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Click Login Verify Login successful",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on Employee Details",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click on Edit Employee icon",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Change email",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on update Details",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Assert E-mail Updated",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on Logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.navigate_to_the_Application()"
});
formatter.result({
  "duration": 23984931565,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.in_the_Home_page_Enter_the_User_Name_and_Password()"
});
formatter.result({
  "duration": 7199764492,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_Login_Verify_Login_successful()"
});
formatter.result({
  "duration": 613613032,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_Employee_Details()"
});
formatter.result({
  "duration": 3946968104,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_Edit_Employee_icon()"
});
formatter.result({
  "duration": 2558356483,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.change_email()"
});
formatter.result({
  "duration": 1575150564,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_update_Details()"
});
formatter.result({
  "duration": 5479300685,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.validation()"
});
formatter.result({
  "duration": 785435994,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_Logout()"
});
formatter.result({
  "duration": 6290886615,
  "status": "passed"
});
});