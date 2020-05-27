function ativos() {



function plotpie(d,r){


  let options = {
      cutoutPercentage: 40,
      tooltips: {
        titleFontSize: 16,
        bodyFontSize: 18,
         callbacks: {
               label: function(tooltipItem, data) {
                 var dataset = data.datasets[tooltipItem.datasetIndex];
                 var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                 var total = meta.total;
                 var currentValue = dataset.data[tooltipItem.index];
                 var percentage = parseFloat((currentValue/total*100).toFixed(1));
                 return currentValue.toLocaleString('de-DE') + '  (' + percentage + '%)';
               },
               title: function(tooltipItem, data) {
                 return data.labels[tooltipItem[0].index];
               }
         }
     }
  };


  var data = {
      datasets: [{
          data: [d, r],

          backgroundColor: ['#b80000', '#008000']
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Mortos',
          'Recuperados'
      ]
  };

  var ctx = document.getElementById('chartClosed').getContext('2d');
  var fechamento = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options
  });
}

var pais = document.getElementById("valorpais").innerHTML;
var aovivo = document.getElementById("valorcode").innerHTML;



  var final = new XMLHttpRequest();
  final.open('GET', 'https://api.thevirustracker.com/free-api?countryTotal='+aovivo, true);
   final.onload = function() {

     var response = JSON.parse(this.response)
     // alert(response['countrydata'][0]['total_cases'].toLocaleString("de-DE"));
     var dead = Number(response['countrydata'][0]['total_deaths']);
     var recov = Number(response['countrydata'][0]['total_recovered']);
     document.getElementById('total').innerHTML = response['countrydata'][0]['total_cases'].toLocaleString("de-DE");
     document.getElementById("active").innerHTML = response['countrydata'][0]['total_active_cases'].toLocaleString("de-DE");
     document.getElementById("dead").innerHTML = response['countrydata'][0]['total_deaths'].toLocaleString("de-DE");
   if(pais == 'united kingdom'){
     document.getElementById("recov").innerHTML = "N/A";
     alert("Os número de pacientes recuperados estão desatualizados para este país.")
   }
   else{
     document.getElementById("recov").innerHTML = response['countrydata'][0]['total_recovered'].toLocaleString("de-DE");
   }
     plotpie(dead, recov);
     }

 final.send()



}
