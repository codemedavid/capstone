<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class JobListing extends Controller
{
    public function joblists(){
        return Inertia::render('Posts/JobListing');
    }
}
