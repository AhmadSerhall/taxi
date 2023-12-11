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
        Schema::create('requests', function (Blueprint $table) {
            $table->unsignedBigInteger('driver_id');
            $table->foreign('driver_id')->references('users_id')->on('users')->onDelete('cascade');;
            $table->unsignedBigInteger('passenger_id');
            $table->foreign('passenger_id')->references('users_id')->on('users')->onDelete('cascade');;
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('requests');
    }
};
