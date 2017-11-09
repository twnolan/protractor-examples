const logText = async (locator) => {
  return console.log(await locator.getText());
};

describe('testing 2). non-angular site with protractor', function() {
  var heading;
  var searchBox;
  var searchButton;

  beforeEach(function() {
    // don't wait for angular to load
    browser.ignoreSynchronization = true;

    // navigate to wikipedia and make sure the title is right
    browser.get('https://en.wikipedia.org/wiki/Main_Page');
    expect(browser.getTitle()).toEqual('Wikipedia, the free encyclopedia');


    // variables holding locator data
    heading = browser.driver.findElement(by.id('firstHeading'));
    searchBox = browser.driver.findElement(by.id('searchInput'));
    searchButton = browser.driver.findElement(by.id('searchButton'));
  });

  it('search for AngularJS', function() {

    // type angular into the searchbox and click search button
    searchBox.sendKeys('AngularJS');
    searchButton.click();

    // wait a couple of seconds for page transition
    browser.sleep(2 * 1000);

    // check the title and heading are as expected
    expect(browser.getTitle()).toEqual('AngularJS - Wikipedia');
    // required to refind each time or will encounter stale element reference
    expect(browser.driver.findElement(by.id('firstHeading')).getText()).toEqual('AngularJS');
  });

  it('search for Node.js then navigate to talk tab', function() {

    // locate the search box and button
    searchBox.sendKeys('Node.js');
    searchButton.click();

    // wait a couple of seconds for page transition
    browser.sleep(2 * 1000);

    // check the title and heading are as expected
    expect(browser.getTitle()).toEqual('Node.js - Wikipedia');
    expect(browser.driver.findElement(by.id('firstHeading')).getText()).toEqual('Node.js');

    // look for talk tab, make sure it contains Talk and click it
    var talkTab = browser.driver.findElement(by.css('#ca-talk span a'));
    logText(talkTab);
    expect(talkTab.getText()).toEqual('Talk');
    talkTab.click();

    // wait for page transition and check heading is as expected
    browser.sleep(2 * 1000);
    expect(browser.driver.findElement(by.id('firstHeading')).getText()).toEqual('Talk:Node.js');
  });
});