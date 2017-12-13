var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//constructor
/*function Store(){
  this.name = '';
  this.minCust = 0;
  this.maxCust = 0;
  this.avgCookies = 0;
  this.custEachHour = [];
  this.cookiesEachHour = [];
  this.total 0;
  this.calCustomersEachHour = function() {
      for(var i = 0; i < hours.length; i++){
        this.custEachHour.push(random(this.minCust, this.maxCust));
      }
    }
  this.calCookiesEachHour = function(){
    this.calCustomersEachHour();
    for(var i = 0; i < hours.length; i++){
      var everyHour = Math.ceil(this.custEachHour[i] * this.avgCookies);
      this.cookiesEachHour.push(everyHour);
      this.total = this.total + everyHour;
      }
  }
  this.makeHtml = function() {
    this.calCookiesEachHour()
    var container = document.createElement('div');
    container.innerHTML = '<p>' + pikePlace.name + '</p>';
    document.body.appendChild(container);

    var list = document.createElement('ul');
    var listArr = [];

    for (var i = 0; i < hours.length; i++) {
      listArr.push('<li>' + hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies </li>');
      }

    var fullList = listArr.join('');
    list.innerHTML = fullList;
    document.body.appendChild(list);
  }

}*/


var pikePlace = {
  name: '1st and Pike',
  minCust: 6,
  maxCust: 25,
  avgCookies: 8,
  custEachHour: [],
  cookiesEachHour: [],
  total: 0,
  calCustomersEachHour: function() {
      for(var i = 0; i < hours.length; i++){
        this.custEachHour.push(random(this.minCust, this.maxCust));
      }
    },

  calCookiesEachHour: function(){
    this.calCustomersEachHour();
    for(var i = 0; i < hours.length; i++){
      var everyHour = Math.ceil(this.custEachHour[i] * this.avgCookies);
      this.cookiesEachHour.push(everyHour);
      this.total = this.total + everyHour;
      }
  },
  makeHTML: function() {
    this.calCookiesEachHour()
    var container = document.createElement('div');
    container.innerHTML = '<p>' + pikePlace.name + '</p>';
    document.body.appendChild(container);

    var list = document.createElement('ul');
    var listArr = [];

    for (var i = 0; i < hours.length; i++) {
      listArr.push('<li>' + hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies </li>');
      }

    var fullList = listArr.join('');
    list.innerHTML = fullList;
    document.body.appendChild(list);
  }
}

var seatacAirpot = {
  name: 'Seatac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  custEachHour: [],
  cookiesEachHour: [],
  total: 0,
  calCustomersEachHour: function() {
      for(var i = 0; i < hours.length; i++){
        this.custEachHour.push(random(this.minCust, this.maxCust));
      }
    },

  calCookiesEachHour: function(){
    this.calCustomersEachHour();
    for(var i = 0; i < hours.length; i++){
      var everyHour = Math.ceil(this.custEachHour[i] * this.avgCookies);
      this.cookiesEachHour.push(everyHour);
      this.total = this.total + everyHour;
      }
  },
  makeHTML: function() {
    this.calCookiesEachHour()
    var container = document.createElement('div');
    container.innerHTML = '<p>' + seatacAirpot.name + '</p>';
    document.body.appendChild(container);

    var list = document.createElement('ul');
    var listArr = [];

    for (var i = 0; i < hours.length; i++) {
      listArr.push('<li>' + hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies </li>');
      }

    var fullList = listArr.join('');
    list.innerHTML = fullList;
    document.body.appendChild(list);
  }
}


var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  custEachHour: [],
  cookiesEachHour: [],
  total: 0,
  calCustomersEachHour: function() {
      for(var i = 0; i < hours.length; i++){
        this.custEachHour.push(random(this.minCust, this.maxCust));
      }
    },

  calCookiesEachHour: function(){
    this.calCustomersEachHour();
    for(var i = 0; i < hours.length; i++){
      var everyHour = Math.ceil(this.custEachHour[i] * this.avgCookies);
      this.cookiesEachHour.push(everyHour);
      this.total = this.total + everyHour;
      }
  },
  makeHTML: function() {
    this.calCookiesEachHour()
    var container = document.createElement('div');
    container.innerHTML = '<p>' + seattleCenter.name + '</p>';
    document.body.appendChild(container);

    var list = document.createElement('ul');
    var listArr = [];

    for (var i = 0; i < hours.length; i++) {
      listArr.push('<li>' + hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies </li>');
      }

    var fullList = listArr.join('');
    list.innerHTML = fullList;
    document.body.appendChild(list);
  }
}



var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  custEachHour: [],
  cookiesEachHour: [],
  total: 0,
  calCustomersEachHour: function() {
      for(var i = 0; i < hours.length; i++){
        this.custEachHour.push(random(this.minCust, this.maxCust));
      }
    },

  calCookiesEachHour: function(){
    this.calCustomersEachHour();
    for(var i = 0; i < hours.length; i++){
      var everyHour = Math.ceil(this.custEachHour[i] * this.avgCookies);
      this.cookiesEachHour.push(everyHour);
      this.total = this.total + everyHour;
      }
  },
  makeHTML: function() {
    this.calCookiesEachHour()
    var container = document.createElement('div');
    container.innerHTML = '<p>' + capitolHill.name + '</p>';
    document.body.appendChild(container);

    var list = document.createElement('ul');
    var listArr = [];

    for (var i = 0; i < hours.length; i++) {
      listArr.push('<li>' + hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies </li>');
      }

    var fullList = listArr.join('');
    list.innerHTML = fullList;
    document.body.appendChild(list);
  }
}



var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  custEachHour: [],
  cookiesEachHour: [],
  total: 0,
  calCustomersEachHour: function() {
      for(var i = 0; i < hours.length; i++){
        this.custEachHour.push(random(this.minCust, this.maxCust));
      }
    },

  calCookiesEachHour: function(){
    this.calCustomersEachHour();
    for(var i = 0; i < hours.length; i++){
      var everyHour = Math.ceil(this.custEachHour[i] * this.avgCookies);
      this.cookiesEachHour.push(everyHour);
      this.total = this.total + everyHour;
      }
  },
  makeHTML: function() {
    this.calCookiesEachHour()
    var container = document.createElement('div');
    container.innerHTML = '<p>' + alki.name + '</p>';
    document.body.appendChild(container);

    var list = document.createElement('ul');
    var listArr = [];

    for (var i = 0; i < hours.length; i++) {
      listArr.push('<li>' + hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies </li>');
      }

    var fullList = listArr.join('');
    list.innerHTML = fullList;
    document.body.appendChild(list);
  }
}

pikePlace.makeHTML();
seatacAirpot.makeHTML();
seattleCenter.makeHTML();
capitolHill.makeHTML();
alki.makeHTML();
