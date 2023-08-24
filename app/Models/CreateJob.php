<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CreateJob extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_upload',
        'employer',
        'vacancy',
        'worksched',
        'jdescription',
        'typeofwork',
        'hrsperweek',
        'salary',
        'qualification1',
        'qualification2',
        'qualification3',
        'qualification4',
        'qualification5',
        'skills1',
        'skills2',
        'skills3',
        'skills4',
        'skills5',
        'skills6',

        
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
