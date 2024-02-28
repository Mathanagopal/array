// Get all the countries with a population of less than 2 lakhs using \Filter function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(population);}