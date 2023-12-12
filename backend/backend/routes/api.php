<?php

use App\Http\Controllers\ChatController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DriversController;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\RideController;
use App\Http\Controllers\UserController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('register/driver', 'register_driver');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});

Route::controller(UserController::class)->group(function () {
    Route::get('get_users', 'get_users');
    Route::post('add_user', 'add_user');
    Route::post('update_user', 'update_user');

});

Route::controller(DriversController::class)->group(function(){

    Route::delete('delete/driver', 'delete_driver');
    Route::post('approve/driver', 'approve_driver');
    Route::post('login/driver', 'login');
    Route::post('register/driver', 'register');
    Route::post('logout/driver', 'logout');
});

Route::delete('delete_user/{id}', [UserController::class, 'delete_user']);

Route::controller(RideController::class)->group(function () {
    Route::post('approve/ride', 'approve_ride');
});

Route::controller(RequestsController::class)->group(function () {
    Route::post('create/request', 'create_request');
    Route::post('approve/request', 'approve_request');

});

Route::controller(ChatController::class)->group(function () {
    Route::post('chat', 'create');
    
});