<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DriversController extends Controller
{



// public function delete_driver(Request $req){
//     if(Auth::check()){
//         $user = Auth::user();
//         if($user && $user->role_id == 1){
//             $driver = Driver::where('driver_id', $req->driver_id)->delete();
//             return response()->json(['Message' => 'Driver deleted', 'DriverID' => $req->driver_id]);
//         } else {
//             return response()->json(['Message' => 'Unauthorized']);
//         }
//     } else {
//         return response()->json(['Message' => 'Unauthorized']);
//     }
// }



  public function approve_driver(Request $req){
    if(Auth::check()){
        $user = Auth::user();
        if($user && $user->role_id ==1){
            $driver_id=Driver::find($req->driver_id);
            if($driver_id){
            if($req->respond=="Approved"){
        $driver = Driver::where('driver_id',$req->driver_id)->update(['status'=>$req->status,]);
         return response()->json(['User apporved successfully']);
            }else{
                $driver = Driver::where('driver_id' , $req->driver_id)->delete();
                return response()->json(['User deleted successfully']);
            }
        }else{
                    return response()->json(['User not found']);
            }

        }else{
            return response()->json(['Message : unauthorized']);
        }
    }else{
        return response()->json(['Message : unauthorized']);
    }
  
  }


      public function delete_driver(Request $request,$id){
        $user_role = auth()->user()->role_id;

        if($user_role==1){
            $user=Driver::find($id)->where('driver_id',$id);
            $user->delete();
            return response()->json([
                "status"=>"success",
                "message"=>"User deleted",
                $user  
            ]);
            if(!$user){
                return response()->json([
                    "status"=>"error",
                     "message"=>"User not found"   
                ]);
            }
                           return response()->json([
                    "status"=>"error",
                     "message"=>"User not found"   
                ]);
          
      
           
        }
    }

}
