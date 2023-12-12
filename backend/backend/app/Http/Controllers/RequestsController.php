<?php

namespace App\Http\Controllers;

use App\Models\Crequest;
use App\Models\Driver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RequestsController extends Controller
{
   
    public function create_request(Request $req){
     
        if (Auth::Check()){
             
            $user = Auth::user();
         
            if($user && $user->role_id == 3){
 
                $request = Crequest::create(['user_id' => $user->user_id, 'driver_id'=>$req->driver_id]);
                return response()->json([
                    'status' => 'success',]);
            }else{
                return response()->json(['Only passengers are allowed to create a request']);
            }
        }else{
            return response()->json(['Error :  unauthorized' ]);
        }

    }

    public function approve_request(Request $req){
            if (auth('driver-api')->user() instanceof Driver && auth('driver-api')->user()){
            $user = auth('driver-api')->user();
            if($user && $user->role_id == 2){
                if($req->respond == 'Approved'){
                
                $request = Crequest::where('driver_id', $req->driver_id)->update(['status' => $req->status]);
                return response()->json([
                    'status' => 'success',]);
               
                }else{
            $request = Crequest::where('driver_id' , $req->driver_id)->get();
                $request->delete();
                }


            }else{
                return response()->json(['Only passengers are allowed to create a request']);
            }
        }else{
            return response()->json(['Error :  unauthorized' ]);
        }
    }
}