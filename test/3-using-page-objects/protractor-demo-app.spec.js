const mainPage = require('./page-objects/main.po');

describe('Protractor Demo App', function() {
  beforeEach(function() {
    mainPage.commands.navigate.openPage();
    //browser.sleep(1000);
  });

  it('should have a title', function() {
    expect(mainPage.commands.get.heading()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    mainPage.commands.enter.numbers(1, 3);
    mainPage.commands.click.goButton();

    expect(mainPage.commands.get.result()).toEqual('4');
  });

  it('should add four and six', function() {
    mainPage.commands.enter.numbers(4, 6);
    mainPage.commands.click.goButton();

    expect(mainPage.commands.get.result()).toEqual('10');
  });
  it('should take four from six', function() {
    mainPage.commands.enter.numbers(6, 4);
    mainPage.commands.enter.operator('-');
    mainPage.commands.click.goButton();

    expect(mainPage.commands.get.result()).toEqual('2');
  });
});
