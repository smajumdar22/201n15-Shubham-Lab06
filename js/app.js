'use strict';

var hoursInADay =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'
,'6pm','7pm','8pm'];


function generateRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
  };
var pikeEl = document.getElementById('pike');
var seatacEl = document.getElementById('seatac');
var seattlecenterEl = document.getElementById('seattlecenter');
var capitolhillEl = document.getElementById('capitolhill');
var alkiEl = document.getElementById('alki');

var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSalesPerCust: 6.3,
  cookiesSoldEachHourArr :[],
  customersPerHourArr : [],
  totalPerDay : 0,

      calcCustomersEachHour : function(){
          for (var i =0;i<hoursInADay.length;i++){
              var customersEachHour = generateRandom(this.minCust,this.maxCust)
              this.customersPerHourArr.push(customersEachHour)
          }
       
      },
      calcCookiesSoldEachHour : function(){
          for(var i=0;i<hoursInADay.length;i++){
              var cookiesSoldEachHour = Math.floor(this.customersPerHourArr[i] * this.avgSalesPerCust);
            this.cookiesSoldEachHourArr.push(cookiesSoldEachHour);
              this.totalPerDay += cookiesSoldEachHour;

          }
      },

      render : function(){
          this.calcCustomersEachHour();
          this.calcCookiesSoldEachHour();

          var liEl = document.createElement('li');
          liEl.textContent = this.name;
          pikeEl.appendChild(liEl);
    
          for(var i=0;i<hoursInADay.length;i++){
              var liEl = document.createElement('li');
              liEl.textContent = `${hoursInADay[i]}: ${this.cookiesSoldEachHourArr[i]} cookies`;
              pikeEl.appendChild(liEl)
          }
      }

    }
    pike.render();
    


var seatac = {
  name: 'SeaTac Airport', 
  minCust: 3,
  maxCust: 24,
  avgSalesPerCust: 1.2,
  cookiesSoldEachHourArr :[],
  customersPerHourArr : [],
  totalPerDay : 0,

      calcCustomersEachHour : function(){
          for (var i =0;i<hoursInADay.length;i++){
              var customersEachHour = generateRandom(this.minCust,this.maxCust)
              this.customersPerHourArr.push(customersEachHour)
          }
       
      },
      calcCookiesSoldEachHour : function(){
          for(var i=0;i<hoursInADay.length;i++){
              var cookiesSoldEachHour = Math.floor(this.customersPerHourArr[i] * this.avgSalesPerCust);
            this.cookiesSoldEachHourArr.push(cookiesSoldEachHour);
              this.totalPerDay += cookiesSoldEachHour;

          }
      },

      render : function(){
          this.calcCustomersEachHour();
          this.calcCookiesSoldEachHour();

          var liEl = document.createElement('li');
          liEl.textContent = this.name;
          seatacEl.appendChild(liEl);
    
          for(var i=0;i<hoursInADay.length;i++){
              var liEl = document.createElement('li');
              liEl.textContent = `${hoursInADay[i]}: ${this.cookiesSoldEachHourArr[i]} cookies`;
              seatacEl.appendChild(liEl)
          }
      }

    }
    seatac.render();

var seattlecenter = {
    name: 'Seattle Center', 
    minCust: 11,
    maxCust: 38,
    avgSalesPerCust: 3.7,
    cookiesSoldEachHourArr :[],
  customersPerHourArr : [],
  totalPerDay : 0,

      calcCustomersEachHour : function(){
          for (var i =0;i<hoursInADay.length;i++){
              var customersEachHour = generateRandom(this.minCust,this.maxCust)
              this.customersPerHourArr.push(customersEachHour)
          }
       
      },
      calcCookiesSoldEachHour : function(){
          for(var i=0;i<hoursInADay.length;i++){
              var cookiesSoldEachHour = Math.floor(this.customersPerHourArr[i] * this.avgSalesPerCust);
            this.cookiesSoldEachHourArr.push(cookiesSoldEachHour);
              this.totalPerDay += cookiesSoldEachHour;

          }
      },

      render : function(){
          this.calcCustomersEachHour();
          this.calcCookiesSoldEachHour();

          var liEl = document.createElement('li');
          liEl.textContent = this.name;
          seattlecenterEl.appendChild(liEl);
    
          for(var i=0;i<hoursInADay.length;i++){
              var liEl = document.createElement('li');
              liEl.textContent = `${hoursInADay[i]}: ${this.cookiesSoldEachHourArr[i]} cookies`;
              seattlecenterEl.appendChild(liEl)
          }
      }

    }
    seattlecenter.render();

var capitolhill = {
    name: 'Capitol Hill', 
    minCust: 20,
    maxCust: 38,
    avgSalesPerCust: 2.3,
    cookiesSoldEachHourArr :[],
  customersPerHourArr : [],
  totalPerDay : 0,

      calcCustomersEachHour : function(){
          for (var i =0;i<hoursInADay.length;i++){
              var customersEachHour = generateRandom(this.minCust,this.maxCust)
              this.customersPerHourArr.push(customersEachHour)
          }
       
      },
      calcCookiesSoldEachHour : function(){
          for(var i=0;i<hoursInADay.length;i++){
              var cookiesSoldEachHour = Math.floor(this.customersPerHourArr[i] * this.avgSalesPerCust);
            this.cookiesSoldEachHourArr.push(cookiesSoldEachHour);
              this.totalPerDay += cookiesSoldEachHour;

          }
      },

      render : function(){
          this.calcCustomersEachHour();
          this.calcCookiesSoldEachHour();

          var liEl = document.createElement('li');
          liEl.textContent = this.name;
          capitolhillEl.appendChild(liEl);
    
          for(var i=0;i<hoursInADay.length;i++){
              var liEl = document.createElement('li');
              liEl.textContent = `${hoursInADay[i]}: ${this.cookiesSoldEachHourArr[i]} cookies`;
              capitolhillEl.appendChild(liEl)
          }
      }

    }
    capitolhill.render();

var alki= {
    name: 'Alki', 
    minCust: 2,
    maxCust: 16,
    avgSalesPerCust: 4.6,
    cookiesSoldEachHourArr :[],
  customersPerHourArr : [],
  totalPerDay : 0,

      calcCustomersEachHour : function(){
          for (var i =0;i<hoursInADay.length;i++){
              var customersEachHour = generateRandom(this.minCust,this.maxCust)
              this.customersPerHourArr.push(customersEachHour)
          }
       
      },
      calcCookiesSoldEachHour : function(){
          for(var i=0;i<hoursInADay.length;i++){
              var cookiesSoldEachHour = Math.floor(this.customersPerHourArr[i] * this.avgSalesPerCust);
            this.cookiesSoldEachHourArr.push(cookiesSoldEachHour);
              this.totalPerDay += cookiesSoldEachHour;

          }
      },

      render : function(){
          this.calcCustomersEachHour();
          this.calcCookiesSoldEachHour();

          var liEl = document.createElement('li');
          liEl.textContent = this.name;
          alkiEl.appendChild(liEl);
    
          for(var i=0;i<hoursInADay.length;i++){
              var liEl = document.createElement('li');
              liEl.textContent = `${hoursInADay[i]}: ${this.cookiesSoldEachHourArr[i]} cookies`;
              alkiEl.appendChild(liEl)
          }
      }

    }
    alki.render();