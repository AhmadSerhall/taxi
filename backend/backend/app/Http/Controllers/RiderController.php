<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use App\Models\User;
use App\Models\Ride;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RiderController extends Controller
{
    public function approve_ride(Request $req){
        if(Auth::check()){
            $user = Auth::user();
            return response()->json($user);
        }
    }

    public function finish_ride(Request $req){
        if (Auth::Check()){
             
            $user = Auth::user();

            if($user && $user->role_id == 3){
                if($req->status == 'PassengerArrived'){
                    $ride = new ride;
                    $ride->driver_id = $req->driver_id;
                    $ride->user_id = $user->user_id;
                    $ride->location_start = $req->location_start;
                    $ride->location_end = $req->location_end;
                    $ride->status = 'Completed';
                    $ride->price = $req->price ?? 20;
                    $ride->rate_user = $req->rate_user;
                    $ride->rate_driver = $req->rate_driver;
                    $ride->save();


                }else if ($req->status == 'Abandoned') {
                    $ride = new ride;
                    $ride->driver_id = $req->driver_id;
                    $ride->user_id = $user->user_id;
                    $ride->location_start = $req->location_start;
                    $ride->location_end = $req->location_end;
                    $ride->status = 'Abandoned';
                    $ride->price = $req->price ?? 0;
                    $ride->rate_user = $req->rate_user;
                    $ride->rate_driver = $req->rate_driver;
                    $ride->save();

                }else{
                    return response()->json(["You didn't reach destination yet"]);
                }
            }else{
                return response()->json(['Only passengers are allowed to create a request']);
            }

        }else{
            return response()->json(['Error :  unauthorized' ]);
        }
    }
}
