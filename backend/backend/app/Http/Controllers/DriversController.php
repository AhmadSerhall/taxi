<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;



class DriversController extends Controller  
{
        public function __construct()
    {
        $this->middleware('auth:driver-api', ['except' => ['login','register']]);
    }

public function login(Request $request)
{
    $request->validate([
        'email' => 'required|string|email',
        'password' => 'required|string',
    ]);

    $credentials = $request->only('email', 'password');

    $token = auth('driver-api')->attempt($credentials);

    if (!$token) {
        return response()->json([
            'status' => 'error',
            'message' => 'Unauthorized',
        ], 401);
    }

    $user = auth('driver-api')->user();

    return response()->json([
        'status' => 'success',
        'user' => $user,
        'authorization' => [
            'token' => $token,
            'type' => 'bearer',
        ]
    ]);
}
    public function register(Request $request){
     
            $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'gender' => 'required|string|max:1',
            'role_id' => 'required|integer',
            'image' => 'required|string',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'car' => 'required|string',
            'vin' => 'required|integer',
        ]);

        $driver = Driver::create([
            'first_name'=> $request->first_name,
            'last_name'=> $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'gender'=> $request->gender,
            'image'=> $request->image,
            'role_id'=> $request->role_id,
            'car'=> $request->car,
            'vin'=> $request->vin,
        ]);

        $token = Auth::login($driver);
        return response()->json([
            'status' => 'success',
            'message' => 'Driver created successfully',
            'driver' => $driver,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);

    }
    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }


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
