<?php

$curl0 = curl_init();

curl_setopt_array($curl0, array(
  // CURLOPT_URL => "https://api.covid19api.com/summary",
  CURLOPT_URL => "https://api.thevirustracker.com/free-api?global=stats",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$world = curl_exec($curl0);
$world_decoded = json_decode($world, true);
curl_close($curl0);





$curl = curl_init();

curl_setopt_array($curl, array(
  // CURLOPT_URL => "https://api.covid19api.com/summary",
  CURLOPT_URL => "https://api.thevirustracker.com/free-api?countryTotals=ALL",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);

curl_close($curl);

$ordem = $_GET['ordem'];

$mundo = $world_decoded["results"][0];
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="ValleData é um portal independente de curiosidades e novidades tecnológicas e científicas.">
    <link rel="icon" href="../img/vdlogo1.png">
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/cor.css">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>ValleData</title>


  </head>
  <body>
    <!-- ==================  NAVBAR ====================== -->

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="index.html"> <img src="../img/vdlogo.png" id="logo_img" alt=""> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="../index.html" >Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../graficos.html">Gráficos</a>
            </li>
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Artigos</a>
                <a class="dropdown-item" href="#">Tutoriais</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Outros</a>
              </div>
            </li> -->
            <li class="nav-item">
              <a class="nav-link" href="../contato.php" >Contato</a>
            </li>
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Digite..." aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </form> -->
        </div>
      </nav>
    <!-- ==================  NAVBAR / ====================== -->

        <br>
        <div class="container text-center">
          <h1>Coronavírus: Escolha um país</h1>
          <p>Recarregue a página para atualizar</p>

          <div class="container resumo">
            <p><strong>Total de casos: </strong><?php echo number_format($mundo["total_cases"],0, ',', '.'); ?></p>
            <p><strong>Casos Ativos: </strong><?php echo number_format($mundo["total_active_cases"],0, ',', '.'); ?></p>
            <p><strong>Mortes: </strong><?php echo number_format($mundo["total_deaths"],0, ',', '.'); ?></p>
            <p><strong>Recuperados: </strong><?php echo number_format($mundo["total_recovered"],0, ',', '.'); ?></p>
          </div><hr>


        </div>

        <form class="container ordenar" action="./covTabela2.php" method="GET">
          <div class="form-row">
            <label class="col-form-label" for="inputState">Ordenar Por:</label>
                 <select id="ordem" name='ordem' class="form-control">
                   <option selected value="total_cases">Escolha</option>
                   <option value="total_cases">Total de Casos</option>
                   <option value="Country">País(A-Z)</option>
                   <option value="total_new_cases_today">Novos Casos</option>
                   <option value="total_deaths">Total de Mortes</option>
                   <option value="total_new_deaths_today">Novas Mortes</option>
                   <option value="total_recovered">Total de Recuperados</option>
                   <option value="NewRecovered">Novos Recuperados</option>
                 </select>

              </div>
              <!-- <div class="ordenarsub">
                <div class="custom-control custom-radio form-row">
                   <input type="radio" id="desc" name="customRadio" class="custom-control-input" value="desc">
                   <label class="custom-control-label" for="desc">Maior para o menor</label>
                </div>
                <div class="custom-control custom-radio form-row">
                   <input type="radio" id="asc" name="customRadio" class="custom-control-input" value="asc">
                   <label class="custom-control-label" for="asc">Menor para o Maior</label>
                </div>
              </div> -->

          <div class="text-center">
            <button class="btn btn-primary" type="submit">Aplicar</button>
          </div>

        </form><br>

        <div class="container text-center">

                    <p><strong>Ordenando por: </strong><?php
                          switch ($_GET['ordem']) {
                                  case "total_cases":
                                      echo "Número Total de Casos";
                                      break;
                                  case "total_new_cases_today":
                                      echo "Número de Novos Casos (Hoje)";
                                      break;
                                  case "total_deaths":
                                      echo "Número Total de Mortes";
                                      break;
                                  case "total_new_deaths_today":
                                      echo "Número de Mortes (Hoje)";
                                      break;
                                  case "total_recovered":
                                      echo "Número Total de Recuperados";
                                      break;
                                  case "NewRecovered":
                                      echo "Número de Recuperados (Hoje)";
                                      break;
                                  default:
                                      echo "Número Total de Casos";
                                      break;
                              } ?></p>
          <h3>Clique em um país abaixo para saber mais:</h3>
        </div>


        <table class="tabela" id="myTable">
          <tr class="thead">
            <th>País</th>
            <th>Total de casos</th>
            <th>Novos casos</th>
            <th>Total de Mortes</th>
            <th>Novas Mortes</th>
            <th>Casos Ativos</th>
            <th>Total de Recuperados</th>
          </tr>
         <?php

         echo "<tr name='rows' class='linha world'>";
         echo "<td  name='Country' id='name'><a class='country mtitle' href='./covTabela2.php'>Mundo</a></td>";
         echo "<td class='valor totais' name='total_cases'>".number_format($mundo["total_cases"],0, ',', '.')."</td>";
         echo "<td class='valornovo' name='total_new_cases_today'>".number_format($mundo["total_new_cases_today"],0, ',', '.')."</td>";
         echo "<td class='valor mortes' name='total_deaths'>".number_format($mundo["total_deaths"],0, ',', '.')."</td>";
         echo "<td class='valornovo' name='total_new_deaths_today'>".number_format($mundo["total_new_deaths_today"],0, ',', '.')."</td>";
        echo "<td class='active' name='active'>".number_format($mundo["total_active_cases"],0, ',', '.')."</td>";
         echo "<td class='valor recups novosrec' name='total_recovered'>".number_format($mundo["total_recovered"],0, ',', '.')."</td>";
         echo "</tr>";

         $decodif = json_decode($response, true);
         $data = $decodif["countryitems"]["0"];
         // var_dump($data[182]);
         switch ($ordem) {
           case "Country":
               $show_ordem = "Número Total de Casos";
               usort($data, function($a, $b) {
               return $a["title"] < $b["title"]? -1 : 1;
               });
               break;
             case "total_cases":
                 $show_ordem = "Número Total de Casos";
                 usort($data, function($a, $b) {
                 return $a["total_cases"] > $b["total_cases"]? -1 : 1;
                 });
                 break;
             case "total_new_cases_today":
                 $show_ordem = "Número de Novos Casos (Hoje)";
                 usort($data, function($a, $b) {
                 return $a["total_new_cases_today"] > $b["total_new_cases_today"]? -1 : 1;
                 });
                 break;
             case "total_deaths":
                 $show_ordem = "Número Total de Mortes";
                 usort($data, function($a, $b) {
                 return $a["total_deaths"] > $b["total_deaths"]? -1 : 1;
                 });
                 break;
             case "total_new_deaths_today":
                 $show_ordem = "Número de Mortes (Hoje)";
                 usort($data, function($a, $b) {
                 return $a["total_new_deaths_today"] > $b["NewDeaths"]? -1 : 1;
                 });
                 break;
             case "total_recovered":
                 $show_ordem = "Número Total de Recuperados";
                 usort($data, function($a, $b) {
                 return $a["total_recovered"] > $b["total_recovered"]? -1 : 1;
                 }
               );
                 break;

             default:
                 $show_ordem = "Número Total de Casos";
                 usort($data, function($a, $b) {
                 return $a["total_cases"] > $b["total_cases"]? -1 : 1;
                 });
                 break;

         }


         $duplicates = array("Korea, South","Republic of Korea","Cruise Ship","Diamond Princess");
         // echo $ascdesc;
         foreach ($data as $item) {
           if ($item["total_cases"]>0 && !(in_array($item["title"], $duplicates)) ) {
             // code...
           if ($item["title"] == "USA") {
             $paislink = 'united-states';
           }
           else {
             $paislink = $item["title"];
           }
           if ($item["title"] == "United Kingdom") {
             $recovefield = 'N/A';
           }
           else {
             $recovefield = number_format($item["total_recovered"],0, ',', '.');
           }
           echo "<tr name='rows' class='linha'>";
           echo "<td  name='Country'  id='name'><a class='country lpais' href='./covCountry.php?pais=".strtolower($paislink)."&code=".$item["code"]."'>".$item["title"]."</a></td>";
           echo "<td class='valor totais' name='total_cases'>".number_format($item["total_cases"],0, ',', '.')."</td>";
           echo "<td class='valornovo' name='total_new_cases_today'>".number_format($item["total_new_cases_today"],0, ',', '.')."</td>";
           echo "<td class='valor mortes' name='total_deaths'>".number_format($item["total_deaths"],0, ',', '.')."</td>";
           echo "<td class='valornovo' name='total_new_deaths_today'>".number_format($item["total_new_deaths_today"],0, ',', '.')."</td>";
          echo "<td class='active' name='active'>".number_format($item["total_active_cases"],0, ',', '.')."</td>";
           echo "<td class='valor recups novosrec' name='total_recovered' id='recovfield'>".$recovefield."</td>";
           echo "</tr>";
         }
         }
         ?>
        </table>


        <footer>
          <div class="footer-copyright text-center py-">© 2020 Copyright
            <strong>ValleData</strong> | Todos os direitos reservados
          </div>
        </footer>
    <script type="text/javascript" src="../js/covTabela.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="../bootstrap/js/bootstrap.min.js"></script>

  </body>
</html>
