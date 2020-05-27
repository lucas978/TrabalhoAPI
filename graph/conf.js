window.onload = function() {

var request = new XMLHttpRequest()
var i;
var j;
const pais = document.getElementById("valorpais").innerHTML;
// const tipo = document.getElementById("valortipo").innerHTML;
console.log(pais);
var mapaTraducoes = {
  "US":"Estados Unidos da América",
  "United States of America":"Estados Unidos da América",
  "Italy":"Itália",
  "China":"China",
  "Spain":"Espanha",
  "Germany":"Alemanha",
  "France":"França",
  "Iran":"Irã",
  "Iran (Islamic Republic of)":"Irã (Republica Islâmica do Irã)",
  "United Kingdom":"Reino Unido",
  "Switzerland":"Suíça",
  "Turkey":"Peru",
  "Belgium":"Bélgica",
  "Netherlands":"Países Baixos / Holanda",
  "Austria":"Áustria",
  "Korea, South":"Coréia do Sul",
  "Republic of Korea":"República da Coreia",
  "South Korea":"Coréia do Sul",
  "Canada":"Canadá",
  "Portugal":"Portugal",
  "Brazil":"Brasil",
  "Israel":"Israel",
  "Sweden":"Suécia",
  "Norway":"Noruega",
  "Australia":"Austrália",
  "Czechia":"República Tcheca",
  "Ireland":"Irlanda",
  "Denmark":"Dinamarca",
  "Chile":"Chile",
  "Malaysia":"Malásia",
  "Russia":"Rússia",
  "Russian Federation":"Federação Russa",
  "Ecuador":"Equador",
  "Poland":"Polônia",
  "Romania":"Romênia",
  "Japan":"Japão",
  "Luxembourg":"Luxemburgo",
  "Philippines":"Filipinas",
  "Pakistan":"Paquistão",
  "India":"Índia",
  "Thailand":"Tailândia",
  "Saudi Arabia":"Arábia Saudita",
  "Indonesia":"Indonésia",
  "Finland":"Finlândia",
  "Greece":"Grécia",
  "South Africa":"África do Sul",
  "Peru":"Peru",
  "Panama":"Panamá",
  "Dominican Republic":"República Dominicana",
  "Iceland":"Islândia",
  "Mexico":"México",
  "Argentina":"Argentina",
  "Colombia":"Colômbia",
  "Serbia":"Sérvia",
  "Singapore":"Cingapura",
  "Croatia":"Croácia",
  "Algeria":"Argélia",
  "Slovenia":"Eslovênia",
  "Qatar":"Catar",
  "United Arab Emirates":"Emirados Árabes Unidos",
  "New Zealand":"Nova Zelândia",
  "Ukraine":"Ucrânia",
  "Egypt":"Egito",
  "Estonia":"Estônia",
  "Iraq":"Iraque",
  "Cruise Ship":"Cruzeiro",
  "Diamond Princess":"Diamond Princess (navio)",
  "Others":"Outras",
  "Morocco":"Marrocos",
  "Lithuania":"Lituânia",
  "Armenia":"Armênia",
  "Bahrain":"Bahrain",
  "Hungary":"Hungria",
  "Lebanon":"Líbano",
  "Bosnia and Herzegovina":"Bósnia e Herzegovina",
  "Latvia":"Letônia",
  "Moldova":"Moldova",
  "Tunisia":"Tunísia",
  "Bulgaria":"Bulgária",
  "Slovakia":"Eslováquia",
  "Andorra":"Andorra",
  "Kazakhstan":"Cazaquistão",
  "Costa Rica":"Costa Rica",
  "Azerbaijan":"Azerbaijão",
  "North Macedonia":"Macedônia do Norte",
  "Uruguay":"Uruguai",
  "Taiwan":"Taiwan",
  "Taiwan*":"Taiwan*",
  "Cyprus":"Chipre",
  "Kuwait":"Kuwait",
  "Burkina Faso":"Burkina Faso",
  "Jordan":"Jordânia",
  "Albania":"Albânia",
  "Afghanistan":"Afeganistão",
  "San Marino":"San Marino",
  "Cameroon":"Camarões",
  "Viet Nam":"Vietnã",
  "Vietnam":"Vietnã",
  "Cuba":"Cuba",
  "Oman":"Omã",
  "Ghana":"Gana",
  "Cote d'Ivoire":"Costa do Marfim",
  "Senegal":"Senegal",
  "Malta":"Malta",
  "Uzbekistan":"Uzbequistão",
  "Nigeria":"Nigéria",
  "Honduras":"Honduras",
  "Belarus":"Bielorrússia",
  "Mauritius":"Maurícia",
  "Sri Lanka":"Sri Lanka",
  "Venezuela":"Venezuela",
  "West Bank and Gaza":"Cisjordânia e Gaza",
  "Brunei":"Brunei",
  "Kosovo":"Kosovo",
  "Montenegro":"Montenegro",
  "Georgia":"Geórgia",
  "Bolivia":"Bolívia",
  "Hong Kong":"Hong Kong",
  "Kyrgyzstan":"Quirguistão",
  "Cambodia":"Camboja",
  "Congo (Kinshasa)":"Congo (Kinshasa)",
  "Trinidad and Tobago":"Trinidad e Tobago",
  "Rwanda":"Ruanda",
  "Kenya":"Quênia",
  "Paraguay":"Paraguai",
  "Niger":"Níger",
  "Liechtenstein":"Liechtenstein",
  "Madagascar":"Madagascar",
  "Guadeloupe":"Guadalupe",
  "Monaco":"Mônaco",
  "Bangladesh":"Bangladesh",
  "Reunion":"Reunião",
  "Guatemala":"Guatemala",
  "Barbados":"Barbados",
  "Jamaica":"Jamaica",
  "Uganda":"Uganda",
  "Martinique":"Martinica",
  "Togo":"Togo",
  "Zambia":"Zâmbia",
  "Djibouti":"Djibuti",
  "El Salvador":"El Salvador",
  "Mali":"Mali",
  "Guinea":"Guiné",
  "Ethiopia":"Etiópia",
  "Congo (Brazzaville)":"Congo (Brazzaville)",
  "Palestine":"Palestina",
  "Bahamas":"Bahamas",
  "Tanzania":"Tanzânia",
  "Guyana":"Guiana",
  "Maldives":"Maldivas",
  "French Guiana":"Guiana Francesa",
  "Gabon":"Gabão",
  "Burma":"Birmânia",
  "Haiti":"Haiti",
  "Equatorial Guinea":"Guiné Equatorial",
  "Eritrea":"Eritreia",
  "Mongolia":"Mongólia",
  "Namibia":"Namíbia",
  "Benin":"Benin",
  "Saint Lucia":"Santa Lúcia",
  "Dominica":"Dominica",
  "Mayotte":"Mayotte",
  "Grenada":"Granada",
  "Laos":"Laos",
  "Libya":"Líbia",
  "Macau":"Macau",
  "Mozambique":"Moçambique",
  "Seychelles":"Seychelles",
  "Suriname":"Suriname",
  "Syria":"Síria",
  "Eswatini":"Eswatini",
  "Guinea-Bissau":"Guiné-Bissau",
  "MS Zaandam":"MS Zaandam",
  "Angola":"Angola",
  "Saint Kitts and Nevis":"São Cristóvão e Nevis",
  "Zimbabwe":"Zimbábue",
  "Antigua and Barbuda":"Antígua e Barbuda",
  "Chad":"Chade",
  "Sudan":"Sudão",
  "Cabo Verde":"Cabo Verde",
  "Holy See":"Santa Sé",
  "Liberia":"Libéria",
  "Mauritania":"Mauritânia",
  "Fiji":"Fiji",
  "Nepal":"Nepal",
  "Nicaragua":"Nicarágua",
  "Somalia":"Somália",
  "Aruba":"Aruba",
  "Bahamas, The":"Bahamas",
  "Bhutan":"Butão",
  "Botswana":"Botsuana",
  "Gambia":"Gâmbia",
  "Belize":"Belize",
  "Central African Republic":"República Centro-Africana",
  "Faroe Islands":"Ilhas Faroe",
  "Saint Vincent and the Grenadines":"São Vicente e Granadinas",
  "Cayman Islands":"Ilhas Cayman",
  "Gambia, The":"Gâmbia",
  "Gibraltar":"Gibraltar",
  "Papua New Guinea":"Papua Nova Guiné",
  "Saint Barthelemy":"São Bartolomeu",
  "Timor-Leste":"Timor-Leste",
  "Cape Verde":"Cabo Verde",
  "Channel Islands":"Ilhas do Canal",
  "Vatican City":"Vaticano"
};

 // Open a new connection, using the GET request on the URL endpoint
 if (pais == 'united-states' || pais =='china' || pais == "netherlands" || pais == "canada" || pais == 'france' || pais='united kingdom'){
   request.open('GET', 'https://api.covid19api.com/total/country/'+pais+'/status/confirmed', true);
 }else{
 request.open('GET', 'https://api.covid19api.com/dayone/country/'+pais+'/status/confirmed/live', true);
}

 request.onload = function() { // =================== Quando os dados carregarem: ===============
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
if (Object.keys(mapaTraducoes).indexOf(response[0]["Country"]) > -1) {
   document.getElementById("titulo").innerHTML = mapaTraducoes[response[0]["Country"]];
}
else {
  document.getElementById("titulo").innerHTML = response[0]["Country"];
}

 for (i = 0; i < response.length; i++) {
   prefixo = ''
   datai = new Date(response[i]["Date"]);

   if (datai.getDate()<10) {
     prefixo = "0";
   }else {
     prefixo = '';
   }

   dia = prefixo + datai.getDate() + "/" + month[datai.getMonth()];
    // + "/" + datai.getFullYear()
  // document.getElementById("id").innerHTML += data[i]["Country"] + data[i]["Cases"] + "</br>";
  dates.push(dia);
  cases.push(response[i]["Cases"]);

 document.getElementById("total").innerHTML = response[i]["Cases"];

 }


 var ctx = document.getElementById('chartCasos').getContext('2d');
 var chart = new Chart(ctx, {
     // The type of chart we want to create
     type: 'bar',

     // The data for our dataset
     data: {
         labels: dates,
         datasets: [{
             label: 'Número de casos',
             backgroundColor: '#384661',
             borderColor: '#384661',
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




mortes(recup);
// recup(ativos);

 }
// ==============================

 request.send()




}
