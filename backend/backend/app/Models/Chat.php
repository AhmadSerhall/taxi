<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Crequest extends Model
{
    use HasFactory;
    protected $fillable = ['ride_id','sender_id','receiver_id','message_content'];
}