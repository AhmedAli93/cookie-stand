'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allStores = [];

var cookiesoldtable = document.getElementById('cookiesoldtable');

//constructor
function Store(name, min, max, avg){
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookies = avg;
  this.custEachHour = [];
  this.cookiesEachHour = [];
  this.total = 0;
  allStores.push(this);
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

    var tableRow = document.createElement('tr');
    var tableHeader = document.createElement('th');
    tableHeader.textContent = this.name;
    tableRow.appendChild(tableHeader);

    for(var i = 0; i < hours.length; i++){
      var tableData = document.createElement('td');
      tableData.textContent = this.cookiesEachHour[i];
      tableRow.appendChild(tableData);
    }

    tableData = document.createElement('td');
    tableData.textContent = this.total;
    tableRow.appendChild(tableData);

    cookiesoldtable.appendChild(tableRow);


  }

};

function makeHeader(){

  var tableRow = document.createElement('tr');

  var tableHeader = document.createElement('th');
  tableHeader.textContent = 'Store Name';
  tableRow.appendChild(tableHeader);

  for(var i = 0; i < hours.length; i++){
    tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }

  tableHeader = document.createElement('th');
  tableHeader.textContent = 'Total';
  tableRow.appendChild(tableHeader);

  cookiesoldtable.appendChild(tableRow);

};


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

new Store( '1st and Pike', 23,	65,	6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

for(var i = 0; i < allStores.length; i++){
  allStores[i].makeHtml();
  console.log(allStores);
};
