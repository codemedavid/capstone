<?php

namespace App\Http\Controllers;

use App\Models\CreateJob;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Log;

class CreateJobController extends Controller
{

    public function createJob(): Response
    {
        $createJob = createJob::all(); 
    }
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('CreateJob', [
            'createJob' => CreateJob::with('user:id,name')->latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        Log::info($request);
        $imgUpload = $request->file('image_upload')->store('public/images');
        Log::info($imgUpload);

        $validated = $request->validate([
            'image_upload' => 'required|image|max:2048',
            'employer' => 'required|string|max:255',
            'vacancy' => 'required|string|max:255',
            'worksched' => 'required|string|max:255',
            'jdescription' => 'required|string|max:255',
            'typeofwork' => 'required|string|max:255',
            'hrsperweek' => 'required|string|max:255',
            'salary' => 'required|string|max:255',
            'qualification1' => 'nullable|string|max:255',
            'qualification2' => 'nullable|string|max:255',
            'qualification3' => 'nullable|string|max:255',
            'qualification4' => 'nullable|string|max:255',
            'qualification5' => 'nullable|string|max:255',
            'skills1' => 'nullable|string|max:255',
            'skills2' => 'nullable|string|max:255',
            'skills3' => 'nullable|string|max:255',
            'skills4' => 'nullable|string|max:255',
            'skills5' => 'nullable|string|max:255',
            'skills6' => 'nullable|string|max:255',
        ]);

        $validated['image_upload'] = str_replace('public/', 'storage/', $imgUpload);
        $request->user()->createJob()->create($validated);

        return redirect(route('createJob.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(CreateJob $createJob)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CreateJob $createJob)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CreateJob $createJob)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CreateJob $createJob)
    {
        //
    }
}
