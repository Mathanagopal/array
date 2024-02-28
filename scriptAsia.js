//Get all the countries from Asia continent /region using Filter function
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((a)=>{
        if(a.region==='Asia'){
            return a.name;
        }
    })
    console.log(asia);}