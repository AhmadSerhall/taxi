<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RideController extends Controller
{
public function approve_ride(Request $req){
    if(Auth::check()){
        $user = Auth::user();
        return response()->json($user);
    }
}
}
