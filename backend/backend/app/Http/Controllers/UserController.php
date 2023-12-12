<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
   
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function get_users()
    {
        return response()->json([
            "status" => "success",
            "data" => User::all()
        ]);
    }

    public function add_user(Request $request)
    {
        $user_role = auth()->user()->role_id;

        // Check if the user is admin
        if ($user_role == 1) {
            // Create a new user
            $newUser = User::create($request->all());

            return response()->json([
                'message' => 'User added successfully',
                'user' => $newUser
            ], 201);
        } else {
            return response()->json([
                'error' => 'Unauthorized'
            ], 401);
        }
    }


    public function delete_user(Request $request,$id){
        $user_role = auth()->user()->role_id;

        if($user_role==1){
            $user=User::find($id);
            return response()->json([
                "status"=>"success",
                "message"=>"User deleted"
            ]);
            if(!$user){
                return response()->json([
                    "status"=>"error",
                     "message"=>"User not found"   
                ]);
            }
           
            $user->delete();
      
           
        }
    }
}
