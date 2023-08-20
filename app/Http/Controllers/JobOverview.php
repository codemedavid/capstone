<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use App\Models\Joblisting;

class JobOverview extends Controller
{
    public function JobOverview (string $id) 
    {
        Log::debug($id);
        $jo = Joblisting::where('id',$id)->get();
        Log::debug($jo);
        return Inertia::render('Posts/JobOverview', [
            'joverview' =>$jo 
        ]);
    }
}
