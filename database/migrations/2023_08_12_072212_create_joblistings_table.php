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
        Schema::create('joblistings', function (Blueprint $table) {
            $table->id();
            $table->string('jtitle');
            $table->longText('jdescription');
            $table->string('employer');
            $table->string('vacancy');
            $table->string('worksched');
            $table->string('typeofwork');
            $table->string('hrsperweek');
            $table->string('salary');
            $table->text('qualification1')->nullable();
            $table->text('qualification2')->nullable();
            $table->text('qualification3')->nullable();
            $table->text('qualification4')->nullable();
            $table->text('qualification5')->nullable();
            $table->text('qualification6')->nullable();
            $table->string('skills1')->nullable();
            $table->string('skills2')->nullable();
            $table->string('skills3')->nullable();
            $table->string('skills4')->nullable();
            $table->string('skills5')->nullable();
            $table->string('skills6')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('joblistings');
    }
};
