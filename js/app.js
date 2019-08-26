'use strict';

var hoursInADay =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'
,'6pm','7pm','8pm'];

function generateRandom(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
  };
  generateRandom(1,100);

var storeOneEl = document.getElementById('pike');
var storeTwoEl = document.getElementById('seatac');
var storeThreeEl = document.getElementById('seattlecenter');
var storeFourEl = document.getElementById('capitolhill');
var storeFiveEl = document.getElementById('alki');

var storeOne = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSalesPerCust: 6.3,
  storeOneArray:[],

      calculateCookiesPerHourStoreOne : function(avgSalesPerCust,randCust){
        var randCust;
        var totalcookiesSoldEachHour;
        for (var i=0;i<hoursInADay.length;i++){
             randCust = generateRandom(minCust,maxCust);
             totalcookiesSoldEachHour = (avgSalesPerCust)*randCust;
             var string =`${hoursInADay[i]}:${totalcookiesSoldEachHour} cookies`;
             storeOne.storeOneArray.push (totalcookiesSoldEachHour,string);
             totalPerDay += totalcookiesSoldEachHour;
             return(totalcookiesSoldEachHour,string)

        }
        storeOne.storeOneArray.push(`Total : ${totalPerDay} cookies`);
        calculateCookiesPerHourStoreOne(6.3,generateRandom(23,65));
      }
    }
    
        // make an li
        var liElOne = document.createElement('li');
    
        // give it content - the name
        liElOne.textContent = storeOne.storeOneArray;
    
        // stick it on the DOM - to the UL
        storeOneEl.appendChild(liElOne);
    



var storeTwo = {
  name: 'SeaTac Airport', 
  minCust: 3,
  maxCust: 24,
  avgSalesPerCust: 1.2,
  storeTwoArray:[],

      calculateCookiesPerHour : function(avgSalesPerCust,randCust){
        var randCust;
        var totalcookiesSoldEachHour;
        for (var i=0;i<hoursInADay.length;i++){
             randCust = generateRandom(minCust,maxCust);
             totalcookiesSoldEachHour = (avgSalesPerCust)*randCust;
             var string =`${hoursInADay[i]}:${totalcookiesSoldEachHour} cookies`;
             storeTwo.storeTwoArray.push (string);
             totalPerDay += totalcookiesSoldEachHour;
             return(totalcookiesSoldEachHour,string)

        }
        storeTwo.storeTwoArray.push(`Total : ${totalPerDay} cookies`);
        calculateCookiesPerHourStoreOne(1.2,generateRandom(3,24));
      }
}

// make an li
var liElTwo = document.createElement('li');
    
// give it content - the name
liElTwo.textContent = storeTwo.storeTwoArray;

// stick it on the DOM - to the UL
storeTwoEl.appendChild(liElTwo);


var storeThree = {
    name: 'Seattle Center', 
    minCust: 11,
    maxCust: 38,
    avgSalesPerCust: 3.7,
    storeThreeArray:[],
    calculateCookiesPerHour : function(avgSalesPerCust,randCust){
        var randCust;
        var totalcookiesSoldEachHour;
        for (var i=0;i<hoursInADay.length;i++){
             randCust = generateRandom(minCust,maxCust);
             totalcookiesSoldEachHour = (avgSalesPerCust)*randCust;
             var string =`${hoursInADay[i]}:${totalcookiesSoldEachHour} cookies`;
             storeThree.storeThreeArray.push (string);
             totalPerDay += totalcookiesSoldEachHour;
             return(totalcookiesSoldEachHour,string)

        }
        storeThree.storeThreeArray.push(`Total : ${totalPerDay} cookies`);
        calculateCookiesPerHourStoreOne(3.7,generateRandom(11,38));
      }
}

// make an li
var liElThree = document.createElement('li');
    
// give it content - the name
liElThree.textContent = storeThree.storeThreeArray;

// stick it on the DOM - to the UL
storeThreeEl.appendChild(liElThree);

var storeFour = {
    name: 'Capitol Hill', 
    minCust: 20,
    maxCust: 38,
    avgSalesPerCust: 2.3,
    storeFourArray:[],
    calculateCookiesPerHour : function(avgSalesPerCust,randCust){
        var randCust;
        var totalcookiesSoldEachHour;
        for (var i=0;i<hoursInADay.length;i++){
             randCust = generateRandom(minCust,maxCust);
             totalcookiesSoldEachHour = (avgSalesPerCust)*randCust;
             var string =`${hoursInADay[i]}:${totalcookiesSoldEachHour} cookies`;
             storeFour.storeFourArray.push (string);
             totalPerDay += totalcookiesSoldEachHour;
             return(totalcookiesSoldEachHour,string)

        }
        storeFour.storeFourArray.push(`Total : ${totalPerDay} cookies`);
        calculateCookiesPerHourStoreOne(2.3,generateRandom(20,38));
      }
}

// make an li
var liElFour = document.createElement('li');
    
// give it content - the name
liElFour.textContent = storeFour.storeFourArray;

// stick it on the DOM - to the UL
storeFourEl.appendChild(liElFour);

var storeFive = {
    name: 'Alki', 
    minCust: 2,
    maxCust: 16,
    avgSalesPerCust: 4.6,
    storeFiveArray:[],
    calculateCookiesPerHour : function(avgSalesPerCust,randCust){
        var randCust;
        var totalcookiesSoldEachHour;
        for (var i=0;i<hoursInADay.length;i++){
             randCust = generateRandom(minCust,maxCust);
             totalcookiesSoldEachHour = (avgSalesPerCust)*randCust;
             var string =`${hoursInADay[i]}:${totalcookiesSoldEachHour} cookies`;
             storeFive.storeFiveArray.push (string);
             totalPerDay += totalcookiesSoldEachHour;
             return(totalcookiesSoldEachHour,string)

        }
        storeFive.storeFiveArray.push(`Total : ${totalPerDay} cookies`);
        calculateCookiesPerHourStoreOne(4.6,generateRandom(2,16));
      }
}

// make an li
var liElFive = document.createElement('li');
    
// give it content - the name
liElFive.textContent = storeFive.storeFiveArray;

// stick it on the DOM - to the UL
storeFiveEl.appendChild(liElFive);

