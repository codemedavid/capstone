<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class ApplicantLists extends Controller
{
    //
    public function ApplicantLists(){
        return Inertia::render('Posts/ApplicantList');
    }
}
