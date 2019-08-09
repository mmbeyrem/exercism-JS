'use strict'

export class Clock {
  constructor(hours, minutes=0) {
    this.reformatTime(hours,minutes);  
  }

  reformatTime(hours,minutes) {
    this.minutes = minutes % 60;
    const extraHours = Math.floor(minutes / 60);
    this.hours = (hours + extraHours) % 24;
    if (this.hours < 0)
      this.hours += 24;
    if (this.minutes < 0)
      this.minutes += 60;
  }

  toString() {
    var h = this.format(this.hours);
    var m = this.format(this.minutes);
    return `${h}:${m}`; 
  }

  format(x) {
    return (x < 10) ? `0${x}` : `${x}`;
  }

  plus(m) {
    this.reformatTime(this.hours,this.minutes + m );
    return this;
  }

  minus(m) {
    this.reformatTime(this.hours,this.minutes - m );
    return this;
  }

  equals(c) {
    return this.minutes == c.minutes && this.hours == c.hours
  }
}
