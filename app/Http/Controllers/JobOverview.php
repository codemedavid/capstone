<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class JobOverview extends Controller
{
    public function JobOverview () {
        return Inertia::render('Posts/JobOverview');
    }
}
