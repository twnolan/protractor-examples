// var chai = require('chai');
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);
// var expect = chai.expect;

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
    heading = element(by.id('firstHeading'));
    searchBox = element(by.id('simpleSearch')).element(by.id('searchInput'));
    searchButton = element(by.id('searchButton'));
  });

  it('search for AngularJS', function() {

    // type angular into the searchbox and click search button
    searchBox.sendKeys('AngularJS');
    searchButton.click();

    // wait a couple of seconds for page transition
    browser.sleep(2 * 1000);

    // check the title and heading are as expected
    expect(browser.getTitle()).toEqual('AngularJS - Wikipedia');
    expect(heading.getText()).toEqual('AngularJS');
  });

  it('search for Node.js then navigate to talk tab', function() {

    // locate the search box and button
    searchBox.sendKeys('Node.js');
    searchButton.click();

    // wait a couple of seconds for page transition
    browser.sleep(2 * 1000);

    // check the title and heading are as expected
    expect(browser.getTitle()).toEqual('Node.js - Wikipedia');
    expect(heading.getText()).toEqual('Node.js');

    // look for talk tab, make sure it contains Talk and click it
    var talkTab = element(by.id('ca-talk')).element(by.css('span a'));
    expect(talkTab.getText()).toEqual('Talk');
    talkTab.click();

    // wait for page transition and check heading is as expected
    browser.sleep(2 * 1000);
    expect(heading.getText()).toEqual('Talk:Node.js');
  });
});