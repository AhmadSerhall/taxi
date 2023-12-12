<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Ride;
class RideController extends Controller
{
    public function add_ride(Request $request)
{
    $userRole = auth()->user()->role_id;
    if ($userRole == 2) {
        $request->validate([
            'driver_id' => 'required|int',
            'location_start' => 'required|string',
            'location_end' => 'required|string',
        ]);

        $newRide = Ride::create([
            'driver_id' => $request->driver_id,
            'user_id' => auth()->user()->user_id,
            'location_start' => $request->location_start,
            'location_end' => $request->location_end,
            'status' => 'Pending',
            'price' => 20, 
        ]);

        return response()->json([
            'message' => 'Ride added successfully',
            'ride' => $newRide,
        ], 201);
    } else {
        return response()->json([
            'error' => 'Unauthorized',
        ], 401);
    }}


    public function get_rides()
    {
        $userRole = auth()->user()->role_id;

        if ($userRole == 2) {
            $rides = Ride::with('driver')->where('user_id', auth()->user()->user_id)->get();

            return response()->json([
                'rides' => $rides,
            ]);
        } else {
            return response()->json([
                'error' => 'Unauthorized',
            ], 401);
        }
    }

}