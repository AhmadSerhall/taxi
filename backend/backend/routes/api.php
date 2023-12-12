<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});

Route::controller(UserController::class)->group(function () {
    Route::get('get_users', 'get_users');
    Route::post('add_user', 'add_user');
    Route::post('update_user', 'update_user');

});


Route::delete('delete_user/{id}', [UserController::class, 'delete_user']);
