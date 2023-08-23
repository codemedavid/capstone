<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class AdminDashboard extends Controller
{
    public function Admin(){
        return Inertia::render('Admin/AdminDashboard');
    }
}
