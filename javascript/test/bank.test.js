var api = require("../src/bank.js");
var mock = require("./mockClock.js");

test("transactions work", () => {
  console.log = jest.fn();
  let clock = new mock();
  let bank = new api.Bank(clock);

  bank.deposit(1000);
  bank.deposit(2000);
  bank.withdraw(500);
  bank.print_statement();

  console.debug(console.log.mock.calls);
  expect(console.log.mock.calls[0][0]).toBe("Date       || Amount || Balance");
  expect(console.log.mock.calls[1][0]).toBe("14/2/2012 || -500 || 2500");
  expect(console.log.mock.calls[2][0]).toBe("13/2/2012 || 2000 || 3000");
  expect(console.log.mock.calls[3][0]).toBe("10/2/2012 || 1000 || 1000");
});
