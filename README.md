#Protractor-Examples

This repository is a collection of some basic protractor examples to give people 
an idea of how to get started with testing in protractor for angular and 
non-angular applications, showing how to create page objects to help with test 
readability and maintainability and ow to run tests in multiple
browsers in parallel.

To run the tests:


1). Install prequisites 

```
npm install
```

2). Download and update then start WebDriver

```
npm run wdm:update
npm run wdm:start
```

3). Use one of the following commands to run a test file

```
npm run angular:demo-app
npm run angular:multi-browser
npm run non-angular:ignoreSync
npm run non-angular:webDriver
npm run page-objects
```

'npm run angular:demo-app' runs the basic demo app test in 1-basic-angular folder

'npm run angular:multi-browser' runs the same test file but with a new conf file in same folder

'npm run non-angular:ignoreSync' runs a non-angular test that uses the ingoreSynchronization flag

'npm run non-angular:webDriver' runs the same non-angular test, but uses calls to browser.driver instead of  

'npm run page-objects' runs a test similar to the basic demo app test, but using page objects
