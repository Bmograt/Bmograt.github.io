var section = document.querySelector('section');
var requestURL = 'https://bmograt.github.io/assignments/mountainspoke/bikemodels.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var cityInfo = request.response;
    showCitydata(cityInfo);
}

function showCitydata(jsonObj) {
    var cities = jsonObj['towns'];
    for (var i = 0; i < cities.length; i ++) {
        
        if (i === 2) {
            continue;
        }
        var myArticle =document.createElement('article');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myList = document.createElement('ul');
        
        myH2.textContent = cities[i].name;
        myH3.textContent = 'Model: ' + cities[i].motto;
        myPara1.textContent = 'Price: ' + cities[i].yearFounded;
        myPara2.textContent = 'Type: ' + cities[i].currentPopulation;
        myPara2.textContent = 'Weight: ' + cities[i].averageRainfall;
        myPara4.textContent = 'image:';
        
        var cityEvents = cities[i].events;
        for (var j = 0; j < cityEvents.length; j++) {
            varlistItem = document.createElement('li');
            varlistItem.textContent = cityEvents[j];
            myList.appendChild(varlistItem);
        }
        
        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);        
        myArticle.appendChild(myPara1);  
        myArticle.appendChild(myPara2);  
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);
        
        section.appendChild(myArticle);
        
    }
}



 