<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@yield('title')</title>
    @section('head')
        <link rel="stylesheet" href="{{URL::asset('css/main.css')}}">
    @show
</head>
<body>
    @yield('body')
</body>
</html>