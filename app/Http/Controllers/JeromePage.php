<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class JeromePage extends Controller
{
    public function JeromePage () {
        return Inertia::render('Posts/JeromePage');
    }
}
