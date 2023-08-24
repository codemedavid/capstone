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
        Schema::create('create_jobs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('image_upload');
            $table->string('employer');
            $table->string('vacancy');
            $table->string('jdescription');
            $table->string('worksched');
            $table->string('typeofwork');
            $table->string('hrsperweek');
            $table->string('salary');
            $table->string('qualification1');
            $table->string('qualification2');
            $table->string('qualification3');
            $table->string('qualification4');
            $table->string('qualification5');
            $table->string('skills1');
            $table->string('skills2');
            $table->string('skills3');
            $table->string('skills4');
            $table->string('skills5');
            $table->string('skills6');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('create_jobs');
    }
};
