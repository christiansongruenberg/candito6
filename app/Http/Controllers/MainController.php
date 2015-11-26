<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\User;

class MainController extends BaseController
{


    /*public function __construct(){
        $this->middleware('auth');
    }*/

    public function index(Request $request){
        //dd($request->user()['attributes']);
        //dd(User::all());
        return view('index');
    }

    public function getUser(Request $request){
        $userVar = $request->user();
        return response()->json($request->user());
    }

    public function updateUserInfo(Request $request){
        $input = $request->all();
        $user = $request->user();
        $user->update($input);

        return response()->json($input);
    }

    public function showAbout(){
        return 'NEW ABOUT PAGE';
    }

    public function showSubject($theSubject){
        return $theSubject . ' content';
    }

    public function showDirections(){
                return "Hello Different Direction";
    }
}
