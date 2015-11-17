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
    <title>Candito Program</title>

    <!-- CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"> <!-- load bootstrap via cdn -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> <!-- load fontawesome -->
    <link href='https://fonts.googleapis.com/css?family=Nixie+One' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lato:400' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/navbar.css">

    <!-- JS -->
    <script src="/bower/moment/moment.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="bower/angular/angular.js"></script>
    <script src="bower/angular-route/angular-route.js"></script><!-- load angular -->

    <script src="js/controllers/mainCtrl.js"></script>
    <script src="js/services/canditoService.js"></script>
    <script src="js/directives/directives.js"></script>
    <script src="js/app.js"></script>
</head>

<body ng-controller="parentController">
<overlay-menu></overlay-menu>
<header-bar></header-bar>
<div class="container main-container">
    <workout-buttons></workout-buttons>
    <div ng-view></div>
</div>
</body>
</html>
