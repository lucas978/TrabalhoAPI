<?php
//
// if(empty($_GET['tipo'])){
//   $type = 'confirmed';
// }else{
//
// $type = $_GET['tipo'];
//
// }

if(empty($_GET['pais'])){
  $slug = 'italy';
}else{

$slug = $_GET['pais'];

}

// $slug = $_GET['pais'];
$paiscod = $_GET['code'];


?>

<html>
	<head>
		<title>ValleData - Coronavirus - Real Time - <?php echo $slug; ?></title>
		<!-- <script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script> -->
		<meta charset="utf-8">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="ValleData é um portal independente de curiosidades e novidades tecnológicas e científicas.">
    <meta property="og:image" content="valledata.com.br/img/vdlogo1.png">
    <link rel="icon" href="../img/vdlogo1.png">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../css/main.css">
		<link rel="stylesheet" href="../css/cor.css">
		<!-- <link rel="stylesheet" href="../css/covCountry.css"> -->
		<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

    <link rel="stylesheet" type="text/css" href="style.css">
		<title>ValleData</title>


  </head>
  <body>
		<p id='valorpais' style="display: none;"><?php echo $slug; ?></p>
		<p id='valorcode' style="display: none;"><?php echo $paiscod; ?></p>
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
              <a class="nav-link" href="#">Gráficos</a>
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
              <a class="nav-link" href="#" >Contato</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Digite..." aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
  	<!-- <div id="graph" class="aGraph" style="position:absolute;top:0px;left:0; float:left;"></div>-->
    <div class="sumup">
    	<h1 class="countryname" id="titulo"></h1>
      <i>COVID-19</i><br>
      <a href="./covTabela2.php" class="goback"> <-- Escolher outro país</a>
    </div>

	<hr>

	<div class="resumo">
	 <p><strong>Total de casos: </strong><span id="total"></span></p>
	 <p><strong>Casos Ativos: </strong><span id="active"></span></p>
	 <p><strong>Mortes: </strong><span id="dead"></span></p>
	 <p><strong>Recuperados: </strong><span id="recov"></span></p>

 </div>

   <div class="text-center graficos">



		<div class="grafico">
      <h2>Total de Casos</h2>
   		<canvas id="chartCasos"></canvas>
   	</div>

		<!-- <div class="grafico">
			<canvas id="chartAtivos"></canvas>
		</div> -->
		<div class="grafico">
      <h2>Casos Encerrados</h2>
			<canvas id="chartClosed"></canvas>
		</div>

		<div class="grafico">
      <h2>Mortes</h2>
			<canvas id="chartMortes"></canvas>
		</div>

		<div class="grafico">
      <h2>Recuperados</h2>
			<canvas id="chartRecov"></canvas>
		</div>

   </div>

		<div class="table" id='id'>

		</div>



		<footer>
			<div class="footer-copyright text-center py-">© 2020 Copyright
				<strong>ValleData</strong> | Todos os direitos reservados
			</div>
		</footer>
<!-- <script type="text/javascript" src="../js/corPais.js"></script> -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
<script src="ativos.js"></script>
<script src="recov.js" ></script>
<script src="dead.js" ></script>
<script src="conf.js" ></script>

	</body>
</html>
