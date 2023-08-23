<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    use HasFactory;
    protected $fillable =[
        'name',
        'jtitle',
        'phonenumber',
        'livesin',
        'gender',
        'skills1',
        'skills2',
        'skills3',
        'skills4',
        'skills5',
        'skills6',
        'resume',
        'education',
        'dateofwork',
        'job',
        'jobdescription',
    ];
}
