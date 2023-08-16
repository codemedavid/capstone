<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class NewPage extends Controller
{
    public function Page(){
        return Inertia::render('Posts/RoycePage');
    }
}
