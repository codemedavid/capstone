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
        Schema::create('userprofile', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('jtitle');
            $table->string('phonenumber');
            $table->string('livesin');
            $table->string('gender');
            $table->string('skills1');
            $table->string('skills2');
            $table->string('skills3');
            $table->string('skills4');
            $table->string('skills5');
            $table->string('skills6');
            $table->string('resume');
            $table->string('education');
            $table->string('dateofwork');
            $table->string('job');
            $table->string('jobdescription');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};
