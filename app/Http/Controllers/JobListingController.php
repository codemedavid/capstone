<?php

namespace App\Http\Controllers;

use App\Models\CreateJob;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class JobListingController extends Controller
{
    public function joblists(): Response
    {
        $jobs = CreateJob::all();
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
        'jdescription' => 'required|string',
        'employer' => 'required|string',
        'vacancy' => 'string',
        'worksched' => 'string',
        'typeofwork' => 'string',
        'hrsperweek' => 'string',
        'salary' => 'required|string',
        'qualification1' =>  'nullable|string',
        'qualification2' => 'nullable|string',
        'qualification3' => 'nullable|string',
        'qualification4' => 'nullable|string',
        'qualification5' => 'nullable|string',
        'qualification6' => 'nullable|string',
        'skills1' => 'nullable|string',
        'skills2' => 'nullable|string',
        'skills3' => 'nullable|string',
        'skills4' => 'nullable|string',
        'skills5' => 'nullable|string',
        'skills6' => 'nullable|string',
    ]);

    $job = new Joblisting();
   
    $job->jtitle = $validatedData['jtitle'];
    $job->jdescription = $validatedData['jdescription'];
    $job->employer = $validatedData['employer'];
    $job->vacancy = $validatedData['vacancy'];
    $job->worksched = $validatedData['worksched'];
    $job->typeofwork = $validatedData['typeofwork'];
    $job->hrsperweek = $validatedData['hrsperweek'];
    $job->salary = $validatedData['salary'];
    $job->qualification1= $validatedData['qualification1'];
    $job->qualification2= $validatedData['qualification2'];
    $job->qualification3= $validatedData['qualification3'];
    $job->qualification4= $validatedData['qualification4'];
    $job->qualification5= $validatedData['qualification5'];
    $job->qualification6= $validatedData['qualification6'];
    $job->skills1= $validatedData['skills1'];
    $job->skills2= $validatedData['skills2'];
    $job->skills3= $validatedData['skills3'];
    $job->skills4= $validatedData['skills4'];
    $job->skills5= $validatedData['skills5'];
    $job->skills6= $validatedData['skills6'];
    $job->save();
   

    return response()->json(['message' => 'Job listing created successfully']);
}

}
