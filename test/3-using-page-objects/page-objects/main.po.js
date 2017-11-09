var MainPage = () => {
  let text = {
    url: 'https://juliemr.github.io/protractor-demo/',
    heading3: 'Super Calculator',
    heading2: 'History'
  };

  let locators = {
    text: {
      heading: element(by.css('h3')),
      result: element(by.css('h2.ng-binding'))
    },
    buttons: {
      goButton: element(by.id('gobutton'))
    },
    input: {
      numberOneBox: element(by.model('first')),
      numberTwoBox: element(by.model('second'))
    },
    dropdown: {
      operator: element(by.model('operator'))
    }
  };

  let commands = {
    get: {
      heading: () => {
        return locators.text.heading.getText();
      },
      result: () => {
        return locators.text.result.getText();
      }
    },
    navigate: {
      openPage: () => {
        browser.get(text.url);
      }
    },
    enter: {
      numbers: (numberOne, numberTwo) => {
        locators.input.numberOneBox.sendKeys(numberOne);
        locators.input.numberTwoBox.sendKeys(numberTwo);
      },
      operator: (operator) => {
        locators.dropdown.operator.sendKeys(operator);
      }
    },
    click: {
      goButton: () => {
        locators.buttons.goButton.click();
      }
    }
  };

  return {
    text,
    locators,
    commands
  }
};

module.exports = MainPage();