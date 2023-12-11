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
        Schema::create('chats', function (Blueprint $table) {
            $table->bigIncrements('message_id');
            $table->unsignedBigInteger('ride_id');
            $table->foreign('ride_id')->references('ride_id')->on('rides')->onDelete('cascade');;
            $table->unsignedBigInteger('sender_id');
            $table->foreign('sender_id')->references('user_id')->on('users')->onDelete('cascade');;
            $table->unsignedBigInteger('receiver_id');
            $table->foreign('receiver_id')->references('user_id')->on('users')->onDelete('cascade');;
            $table->string('message_content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chats');
    }
};
