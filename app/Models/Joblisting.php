<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Joblisting extends Model
{
    use HasFactory;
    protected $fillable = [
        'jtitle',
        'employer',
        'salary',
    ];
}
