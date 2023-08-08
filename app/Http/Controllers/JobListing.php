<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class JobListing extends Controller
{
    public function lists(){
        return Inertia::render('Posts/JobListing');
    }
}
