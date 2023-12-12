<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DriversController extends Controller
{
  public function add_driver(Request $req){
    if(Auth::check()){
        $user = Auth::user();
        if($user && $user->role_id ==1){
            $driver = Driver::create([
            'status'=>$req->status,
            'car'=>$req->car,
            'vin'=>$req->vin,
            
        ]);
        }else{
            return response()->json(['Message : unauthorized']);
        }
    }else{
        return response()->json(['Message : unauthorized']);
    }

  }

    public function delete_driver(Request $req){
    if(Auth::check()){
        $user = Auth::user();
        if($user && $user->role_id ==1){
            $driver = Driver::find($req->driver_id);
            $driver->delete();
        }else{
            return response()->json(['Message : unauthorized']);
        }
    }else{
        return response()->json(['Message : unauthorized']);
    }

  }
    public function get_drivers(){
    if(Auth::check()){
        $user = Auth::user();
        if($user && $user->role_1 ==1){
            $drivers = Driver::All();
            return response()->json(['Drivers : ' => $drivers]);
        }else{
            return response()->json(['Message : unauthorized']);
        }
    }else{
        return response()->json(['Message : unauthorized']);
    }

  }
}
