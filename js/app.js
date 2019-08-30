// we want to render the same table in the HTML but in JS

var tableEl = document.getElementById('table');
 //var allPets = [];
var allStores = [];

var hoursInADay =[' ','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'
,'6pm','7pm','8pm'];

var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
for(var i=0;i<hoursInADay.length;i++){  
    var tdEl = document.createElement('td');
    tdEl.textContent=hoursInADay[i];
    tableEl.appendChild(tdEl);
}

function generateRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
  };

  var pike = {
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
  
      
            for(var i=0;i<hoursInADay.length;i++){
                var tdEl = document.createElement('td');
                tdEl.textContent = `${this.cookiesSoldEachHourArr[i]}`;
                tableEl.appendChild(tdEl)
            }
        }
  
      }
      pike.render();

function Stores(name){
    this.name=name;

    allStores.push(this);
}
Stores.prototype.render= function(){
    var trEl = document.createElement('tr');
    trEl.textContent=this.name;
    tableEl.appendChild(trEl);
}
new Stores('1st and Pike');
new Stores('Seatac Airport');
new Stores('Seattle Center');
new Stores('Capitol Hill');
new Stores('Alki');

for(var i = 0; i < allStores.length; i++){
  allStores[i].render();
}



var pike = {
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
  
      
            for(var i=0;i<hoursInADay.length;i++){
                var tdEl = document.createElement('td');
                tdEl.textContent = `${this.cookiesSoldEachHourArr[i]}`;
                tableEl.appendChild(tdEl)
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
      
          
                for(var i=0;i<hoursInADay.length;i++){
                    var tdEl = document.createElement('td');
                    tdEl.textContent = `${this.cookiesSoldEachHourArr[i]}`;
                    tableEl.appendChild(tdEl)
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
      
          
                for(var i=0;i<hoursInADay.length;i++){
                    var tdEl = document.createElement('td');
                    tdEl.textContent = `${this.cookiesSoldEachHourArr[i]}`;
                    tableEl.appendChild(tdEl)
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
      
          
                for(var i=0;i<hoursInADay.length;i++){
                    var tdEl = document.createElement('td');
                    tdEl.textContent = `${this.cookiesSoldEachHourArr[i]}`;
                    tableEl.appendChild(tdEl)
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
      
          
                for(var i=0;i<hoursInADay.length;i++){
                    var tdEl = document.createElement('td');
                    tdEl.textContent = `${this.cookiesSoldEachHourArr[i]}`;
                    tableEl.appendChild(tdEl)g
                }
            }
      
          }
          alki.render();