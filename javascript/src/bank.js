class Clock {
  constructor() {
    // set the current date
    this._d = new Date();
  }

  set_date(date) {
    this._d = date;
  }

  get_date(date) {
    return this._d;
  }
}

class Bank {
  transaction;

  constructor(clock) {
    // transactions tuple: date - amount - balance
    this.transaction = [];
    this.clock = clock;
  }

  deposit(amount) {
    this.clock.set_date(new Date());
    let previous_balance = 0;

    // if list is empty you cannot get previous balance
    if (this.transaction.length > 0) {
      previous_balance = this.transaction.at(-1)[2];
    }

    let t = this.clock.get_date();
    let new_d = new Intl.DateTimeFormat(["es"]).format(t);
    this.transaction.push([new_d, amount, previous_balance + amount]);
  }

  withdraw(amount) {
    this.clock.set_date(new Date());
    let b = 0;
    // if list is empty you cannot get previous balance
    if (this.transaction.length > 0) {
      b = this.transaction.at(-1)[2];
    }

    let t = this.clock.get_date();
    let new_d = new Intl.DateTimeFormat(["ban", "id"]).format(t);
    this.transaction.push([new_d, -amount, b - amount]);
  }

  print_statement() {
    console.log("Date       || Amount || Balance");
    for (let i = this.transaction.length - 1; i > -1; i--) {
      console.log(
        `${this.transaction[i][0]} || ${this.transaction[i][1]} || ${this.transaction[i][2]}`
      );
    }
  }

  get_date() {
    // not used
    return new Date();
  }
}

module.exports = { Clock, Bank };
