<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rides', function (Blueprint $table) {
            $table->bigIncrements('ride_id');
            $table->unsignedBigInteger('driver_id');
            $table->foreign('driver_id')->references('user_id')->on('users');
            $table->unsignedBigInteger('passenger_id');
            $table->foreign('passenger_id')->references('user_id')->on('users');
            $table->string('location_start');
            $table->string('location_end');
            $table->string('status');
            $table->integer('price');
            $table->integer('rate_user')->default(null);
            $table->integer('rate_driver')->default(null);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rides');
    }
};
