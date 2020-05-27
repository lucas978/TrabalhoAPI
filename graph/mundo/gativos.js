function ativos() {

  let options = {
      cutoutPercentage: 40,
  };

var total = Number(document.getElementById("total").innerHTML);
var dead =  Number(document.getElementById("dead").innerHTML);
var recov = Number(document.getElementById("recov").innerHTML);


var ativ = (total-dead-recov);
// console.log(total-dead-recov)
document.getElementById('active').innerHTML = ativ.toLocaleString("de-DE");
document.getElementById("total").innerHTML = total.toLocaleString("de-DE");
document.getElementById("dead").innerHTML = dead.toLocaleString("de-DE");
document.getElementById("recov").innerHTML = recov.toLocaleString("de-DE");

var data = {
    datasets: [{
        data: [dead, recov],

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
