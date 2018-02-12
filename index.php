<!DOCTYPE html>
<html lang="fr">
<head>
	<title>DouceDePo</title>
	<meta charset="utf-8"/>
	<meta description="DouceDePo"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700|Open+Sans:300,400,600,700" rel="stylesheet">	
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css?d=<?php echo rand(0,10000000000000000) ?>">
</head>
<body>
    <header>
        <div class="container between">
            <a href="./index.php" title="DouceDePo"><img src="assets/img/logo-white.png" alt="DouceDePo" class="logo" /></a>
            <nav>
                <ul>
                    <li><a href="/index.php">Accueil</a></li>
                    <li><a href="/collection.php">Nos collections</a></li>
                    <li><a href="/panier.php">Mon panier</a></li>
                    <li class="active"><a href="/compte.php">Mon compte</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="slider">
        <div class="one-slide active-slide" slide-number="0">
            <div class="container content-slider">
                <img src="assets/img/bavoir-1.png" alt="Slider 1" class="img-slider">
                <div class="text-content-slider">
                    <h2 class="title-slider">Linguerie pour bébé</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatem obcaecati accusantium aliquam unde eum vel aliquid sint quo autem.</p>
                    <a href="#" title="En savoir plus" class="button-slider">En savoir plus</a>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="one-slide" slide-number="1">
            <div class="container content-slider">
                <img src="assets/img/bavoir-1.png" alt="Slider 1" class="img-slider">
                <div class="text-content-slider">
                    <h2 class="title-slider">Linguerie pour bébé</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatem obcaecati accusantium aliquam unde eum vel aliquid sint quo autem.</p>
                    <a href="#" title="En savoir plus" class="button-slider">En savoir plus</a>
                </div>
                <div class="clear"></div>
            </div>       
        </div>
        <div class="one-slide" slide-number="2">
            <div class="container content-slider">
                <img src="assets/img/bavoir-1.png" alt="Slider 1" class="img-slider">
                <div class="text-content-slider">
                    <h2 class="title-slider">Linguerie pour bébé</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatem obcaecati accusantium aliquam unde eum vel aliquid sint quo autem.</p>
                    <a href="#" title="En savoir plus" class="button-slider">En savoir plus</a>
                </div>
                <div class="clear"></div>
            </div>  
        </div>
        <div class="cloud"></div>
        <ul class="selector-slider">
            <li class="slide-switch active" slide-number="0"></li>
            <li class="slide-switch" slide-number="1"></li>
            <li class="slide-switch" slide-number="2"></li>
        </ul>
    </div>
    <section class="white">

    </section>
    <script src="assets/js/app.js?d=<?php echo rand(0,10000000000000000) ?>"></script>
</body>
</html>