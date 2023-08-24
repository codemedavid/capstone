<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Joblisting extends Model
{
    use HasFactory;
    protected $fillable = [
        'jtitle',
        'jdescription',
        'employer',
        'vacancy',
        'worksched',
        'typeofwork',
        'hrsperweek',
        'salary',
        'qualification1',
        'qualification2',
        'qualification3',
        'qualification4',
        'qualification5',
        'qualification6',
        'skills1',
        'skills2',
        'skills3',
        'skills4',
        'skills5',
        'skills6',
        

    ];
}
