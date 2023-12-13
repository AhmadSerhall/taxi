<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function create(Request $req)
    {
        if (auth('driver-api')->user() instanceof Driver && auth('driver-api')->user()) {
            echo"hello";
            $driver = auth('driver-api')->user();
            if ($driver && $driver->role_id == 2) {
                $request = Chat::create([
                    'ride_id' => $req->ride_id,
                    'sender_id' => $driver->driver_id,
                    'receiver_id' => $req->user_id,
                    'message_content' => $req->message,
                ]);

                return response()->json([
                    'status' => 'Driver Message Sent',
                    $request
                ]);
            }
        } elseif (Auth::Check()) {
            echo"hello2";
            $user = Auth::user();
            if ($user && $user->role_id == 3) {
                $request = Chat::create([
                    'ride_id' => $req->ride_id,
                    'sender_id' => $user->user_id,
                    'receiver_id' => $req->driver_id,
                    'message_content' => $req->message,
                ]);
                return response()->json([
                    'status' => 'User Message Sent',
                    $request
                ]);
            }
        } else {
            return response()->json(['error' => 'Unauthorized']);
        }
        
    }

    public function getchat(Request $req)
    {
        if (auth('driver-api')->user() instanceof Driver && auth('driver-api')->user()) {
            echo"hello";
            $driver = auth('driver-api')->user();
            if ($driver && $driver->role_id == 2) {
                $request = Chat::all();
                return response()->json([
                    'status' => 'Driver Message Sent',
                    $request
                ]);
            }
        } elseif (Auth::Check()) {
            echo"hello2";
            $user = Auth::user();
            if ($user && $user->role_id == 3) {
                $request = Chat::all();
                return response()->json([
                    'status' => 'User Message Sent',
                    $request
                ]);
            }
        } else {
            return response()->json(['error' => 'Unauthorized']);
        }
    }
}