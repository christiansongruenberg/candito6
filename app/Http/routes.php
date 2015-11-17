<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
use Illuminate\Contracts\Logging\Log;

Route::get('/','MainController@index');

//returns the user information to populate the Input Page
/*Route::get('getUser', 'MainController@getUser');

//
Route::post('updateUserInfo', 'MainController@updateUserInfo');

//Authentication routes
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

//Rgistration routes
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');*/

Route::controllers([
    'password' => 'Auth\PasswordController',
]);



