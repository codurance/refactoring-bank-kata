class Clock {
  constructor() {
    // set the current date
    this._d = new Date();
    this.iter = 0;
  }

  set_date(date) {
    this._d = date;
  }

  get_date(date) {
    switch (this.iter) {
      case 0:
        this.iter++;
        return new Date(2012, 1, 10);
      case 1:
        this.iter++;
        return new Date(2012, 1, 13);
      case 2:
        this.iter++;
        return new Date(2012, 1, 14);
    }
  }
}

module.exports = Clock;
