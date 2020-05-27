function recup(callback) {

var reqrecov = new XMLHttpRequest()
var i;
var j;
const pais = document.getElementById("valorpais").innerHTML;


console.log(pais);
 // Open a new connection, using the GET reqrecov on the URL endpoint
 reqrecov.open('GET', 'https://api.covid19api.com/total/country/'+pais+'/status/recovered', true);


 reqrecov.onload = function() { // =================== Quando os dados carregarem: ===============
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
  document.getElementById("recov").innerHTML = response[i]["Cases"];
 }

// document.getElementById("id").innerHTML += dates;
 var ctx = document.getElementById('chartRecov').getContext('2d');
 var chart = new Chart(ctx, {
     // The type of chart we want to create
     type: 'bar',

     // The data for our dataset
     data: {
         labels: dates,
         datasets: [{
             label: 'Pacientes recuperados',
             backgroundColor: '#008000',
             borderColor: '#008000',
             data: cases
         }]
     },

     options: {
       tooltips: {
         titleFontSize: 16,
         bodyFontSize: 18,
          callbacks: {
                label: function(tooltipItem, data) {
                  var dataset = data.datasets[tooltipItem.datasetIndex];
                  var currentValue = dataset.data[tooltipItem.index];
                  return "Total de casos: " + currentValue;
                },
                title: function(tooltipItem, data) {
                  return data.labels[tooltipItem[0].index];
                }
          }
      }
     }
});



callback();

 }
// ==============================

 reqrecov.send()




}
