<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use App\Models\User;
use App\Models\Ride;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RideController extends Controller
{



public function finish_ride(Request $req){
    if (auth('driver-api')->user() instanceof Driver && auth('driver-api')->user()){
        $user = auth('driver-api')->user();

        if($user && $user->role_id == 2){
            if($req->respond == 'Approved'){
                $ride= Ride::where('driver_id',$user->driver_id)->latest()->first();
                $ride = Ride::where('ride_id',$ride->ride_id)->update(["status"=>"Done","rate_user"=>$req->rate_user,"rate_driver"=>$req->rate_driver]);
  
            }else{
                return response()->json(["You didn't reach destination yet"]);
            }
          }  else{
            return response()->json(['Only passengers are allowed to create a request']);
        }

    }else{
        return response()->json(['Error :  unauthorized' ]);
    }
}
}
