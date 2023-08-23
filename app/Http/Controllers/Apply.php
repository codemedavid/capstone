<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use App\Models\Joblisting;
use Illuminate\Http\Request;
use Inertia\Inertia;
class Apply extends Controller
{
    public function Apply(string $id){
        Log::debug($id);
        $jo = Joblisting::where('id',$id)->get();
        Log::debug($jo);
        return Inertia::render('Posts/Apply', [
            'joverview' =>$jo 
        ]);
    }
}
