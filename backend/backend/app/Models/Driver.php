<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    use HasFactory;
    protected $primaryKey = 'driver_id';
    protected $fillable = [
        'first_name',
        'last_name',
        'image',
        'email',
        'password',
        'role_id',
        'gender',
        'status',
        'car',
        'vin',
        'user_id'];

}
