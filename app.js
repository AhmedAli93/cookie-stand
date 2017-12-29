'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var cookiesoldtable = document.getElementById('sold-table');

//create form
var form = document.getElementById('locations');
form.addEventListener('submit', cookiesData);
var data = [];

function NewStore (location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;

  this.calcCustsEachHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.custsEachHour.push(random(this.min, this.max));
    }
  }

  this.calcCookiesEachHour = function() {
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++) {
      var eachHour = Math.ciel(this.custsEachHour[i] * this.avg);
      data.push(eachHour);
      this.totalDailySales += eachHour;
      newRow();
    }
  }
}

function cookiesData(event) {
  event.preventDefault();

  var name = event.target.location.value;
  var minCustomer = event.target.min.value;
  var maxCustomer = event.target.max.value;
  var averageCookie = event.target.avg.value;
  new Cookiestand(null, name, minCustomer, maxCustomer, averageCookie)
  storeLocations[storeLocations.length - 1].makeHtml();
  var total = document.getElementById("total");
  total.remove();
  makeFooterRow();
  form.reset();
  console.log(storeLocations)
}


//end of form and bottom new row


var storeLocations = [];

// function for entire head row

function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableRow.appendChild(tableHeader);

  for(var i = 0; i < hours.length; i++){
    tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }
  cookiesoldtable.appendChild(tableRow);


  tableHeader = document.createElement('th');
  tableHeader.textContent = 'Total';
  tableRow.appendChild(tableHeader);
}
makeHeaderRow();


//constructor
function CookieStore(id, locationName, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust) {
  this.id = id;
  this.name = locationName;
  this.minPerHour = minCustsPerHour;
  this.maxPerHour = maxCustsPerHour;
  this.avgCookiePerCust = avgCookiesPerCust;
  this.totalSales = 0;
  this.custsEachHour = [];
  this.cookiesHour = [];
  storeLocations.push(this);

  this.calcCustsEachHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.custsEachHour.push(random(this.minPerHour, this.maxPerHour));
    }
  },

  this.calcCookiesEachHour = function() {
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++) {
      var eachHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      this.cookiesHour.push(eachHour);
      this.totalSales += eachHour;
    }
  }

  this.makeHtml = function() {
    this.calcCookiesEachHour();

    var tableRow = document.createElement('tr');
    var tableData = document.createElement('td');
    tableData.textContent = locationName;
    tableRow.appendChild(tableData);

    for(var i = 0; i < hours.length; i++){
      tableData = document.createElement('td');
      tableData.textContent = this.cookiesHour[i];
      tableRow.appendChild(tableData);
    }

    tableData = document.createElement('tr');
    tableData.textContent = this.totalSales;
    tableRow.appendChild(tableData);
    cookiesoldtable.appendChild(tableRow);
  }

};


new CookieStore('market', '1st and Pike', 23,	65,	6.3);
new CookieStore('airpot'.'SeaTac Airport', 3, 24, 1.2);
new CookieStore('SC','Seattle Center', 11, 38, 3.7);
new CookieStore('SC','Capitol Hill', 20, 38, 2.3);
new CookieStore('beach','Alki', 2, 16, 4.6);

function makeFooterRow() {
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');

  tableData = document.createElement('td');
  tableData.textContent = 'Hourly Totals:';
  tableRow.appendChild(tableData);


  var count = 0;

  for(var i = 0; i < hours.length + 1; i++) {
    var hourlyTotal = 0;
    for(var j = 0; j < storeLocations.length; j++) {
      count++
      hourlyTotal += storeLocations[j].cookiesHour[i];
    }
    tableData = document.createElement('td');
    tableData.textContent = hourlyTotal;
    tableRow.appendChild(tableData);
    tableRow.setAttribute("id", "total");
    cookiesoldtable.appendChild(tableRow);
  }

  var totalTotal = 0;
    for(var i = 0; i < storeLocations.length; i++) {
      totalTotal += storeLocations[i].totalDailySales;
    }

    tableData.textContent = totalTotal;
    tableRow.appendChild(tableData);
    cookiesoldtable.appendChild(tableRow);
  }

  for(var i = 0; i < storeLocations.length; i++) {
    storeLocations[i].makeHtml();
  }


makeFooterRow();
