<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DriversController extends Controller
{
  public function add_driver(Request $req){

        // $driver = Driver::create([
        // 'first_name'=>$req->first_name,
        // 'last_name'=>$req->last_name,
        // 'image'=>$req->image,
        // 'email'=>$req->email,
        // 'password'=>$req->password,
        // 'role_id'=>$req->role_id,
        // 'gender'=>$req->gender,
        // 'status'=>$req->status,
        // 'car'=>$req->car,
        // 'vin'=>$req->vin,
            
        // ]);
$driver = Driver::create($req->all());

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



  public function approve_driver(Request $req){
    if(Auth::check()){
        $user = Auth::user();
        if($user && $user->role_id ==1){
            if($req->respond=="Approved"){
        $driver = Driver::where('driver_id',$req->driver_id)->update(['status'=>$req->status,]);
            }else{
                $driver = Driver::where('driver_id' , $req->driver_id)->get();
                $driver->delete();
            }

        }else{
            return response()->json(['Message : unauthorized']);
        }
    }else{
        return response()->json(['Message : unauthorized']);
    }

  }

}
