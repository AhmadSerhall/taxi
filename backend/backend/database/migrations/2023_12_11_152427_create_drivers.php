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
        Schema::create('drivers', function (Blueprint $table) {
            $table->bigIncrements('driver_id');
            $table->string('status');
            $table->string('car');
            $table->string('vin');
            $table->unsignedBigInteger('driver_id');
            $table->foreign('driver_id')->references('users_id')->on('users')->onDelete('cascade');;
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drivers');
    }
};
