function mortes(callback) {

var reqdead = new XMLHttpRequest()
var i;
var j;
const pais = document.getElementById("valorpais").innerHTML;


console.log(pais);
 // Open a new connection, using the GET reqdead on the URL endpoint
 reqdead.open('GET', 'https://api.covid19api.com/total/country/'+pais+'/status/deaths', true);


 reqdead.onload = function() { // =================== Quando os dados carregarem: ===============
 var response = JSON.parse(this.response)
 var dates = [];
 var cases = [];
 var datai;
 var dia;
 var month = new Array();
month[0] = "01";
month[1] = "02";
month[2] = "03";
month[3] = "04";
month[4] = "05";
month[5] = "06";
month[6] = "07";
month[7] = "08";
month[8] = "09";
month[9] = "10"
month[10] = "11";
month[11] = "12";

// document.getElementById("titulo").innerHTML += response[0]["Country"];
var prefixo;

 for (i = 0; i < response.length; i++) {
   datai = new Date(response[i]["Date"]);
   prefixo = ''
   if (datai.getDate()<10) {
     prefixo = "0";
   }

   dia = prefixo + datai.getDate() + "/" + month[datai.getMonth()];
    // + "/" + datai.getFullYear()
  // document.getElementById("id").innerHTML += data[i]["Country"] + data[i]["Cases"] + "</br>";
  dates.push(dia);
  cases.push(response[i]["Cases"]);
  document.getElementById("dead").innerHTML = response[i]["Cases"];
 }

// document.getElementById("id").innerHTML += dates;
 var ctx = document.getElementById('chartMortes').getContext('2d');
 var chart = new Chart(ctx, {
     // The type of chart we want to create
     type: 'bar',

     // The data for our dataset
     data: {
         labels: dates,
         datasets: [{
             label: 'Número de mortes',
             backgroundColor: '#b80000',
             borderColor:     '#b80000',
             data: cases
         }]
     },

     options: {}
});

callback(ativos);
 }
// ==============================

 reqdead.send()




}
