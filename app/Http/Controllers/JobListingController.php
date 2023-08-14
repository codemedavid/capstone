<?php

namespace App\Http\Controllers;

use App\Models\Joblisting;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class JobListingController extends Controller
{
    public function joblists(): Response
    {
        $jobs = Joblisting::all();
        return Inertia::render('Posts/JobListing',['jobs' => $jobs]);
    }

    public function create()
    {
        return Inertia::render('Posts/CreateJob');
    }

    public function store(Request $request)
{
    $validatedData = $request->validate([
        'jtitle' => 'required|string',
        'employer' => 'required|string',
        'salary' => 'required|string',
    ]);

    $job = new Joblisting();
   
    $job->jtitle = $validatedData['jtitle'];
    $job->employer = $validatedData['employer'];
    $job->salary = $validatedData['salary'];
    $job->save();
   

    return response()->json(['message' => 'Job listing created successfully']);
}

}
