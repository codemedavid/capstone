<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class Apply extends Controller
{
    public function Apply(){
        return Inertia::render('Posts/Apply');
    }
}
