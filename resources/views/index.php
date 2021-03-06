<?php
/**
 * Created by PhpStorm.
 * User: Christianson
 * Date: 26/10/2015
 * Time: 5:15 PM
 */
?>

<!doctype html>
<html lang="en" ng-app="canditoApp">
<head>
    <meta charset="UTF-8">
    <title>Candito 6 Week Strength Program</title>

    <!-- CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"> <!-- load bootstrap via cdn -->
    <link href='http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css' rel='stylesheet' type='text/css'> <!-- load fontawesome -->
    <link href='https://fonts.googleapis.com/css?family=Nixie+One' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lato:400' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/main.css">


</head>

<body ng-controller="parentController">
<overlay-menu></overlay-menu>
<login-menu></login-menu>
<header-bar></header-bar>
<div class="container main-container">
    <workout-buttons></workout-buttons>
    <div ng-view></div>
</div>

<!-- JS -->

<script src="bower/moment/moment.js"></script>
<script src="bower/jquery/dist/jquery.js"></script>
<script src="/bower/bootstrap/dist/js/bootstrap.js"></script>
<script src="bower/angular/angular.js"></script>
<script src="bower/angular-route/angular-route.js"></script><!-- load angular -->
<script src="/bower/angular-animate/angular-animate.js"></script>
<!--<script type="text/javascript" src="https://rawgit.com/betsol/angular-input-date/master/src/angular-input-date.js"></script>-->

<script src="bower/responsive-bootstrap-toolkit/dist/bootstrap-toolkit.js"></script>
<script src="js/controllers/mainCtrl.js"></script>
<script src="js/services/canditoService.js"></script>
<script src="js/directives/directives.js"></script>
<script src="js/app.js"></script>
<script src="js/main.js"></script>
</body>
</html>
