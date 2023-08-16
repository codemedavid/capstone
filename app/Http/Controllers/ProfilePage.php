<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfilePage extends Controller

{
    public function ProfilePage(){
        return Inertia::render('Profile/ProfilePage');
    }
}
