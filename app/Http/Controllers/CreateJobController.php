<?php

namespace App\Http\Controllers;

use App\Models\CreateJob;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class CreateJobController extends Controller
{
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
        $validated = $request->validate([
            'employer' => 'required|string|max:255',
            'vacancy' => 'required|string|max:255',
            'worksched' => 'required|string|max:255',
            'typeofwork' => 'required|string|max:255',
            'hrsperweek' => 'required|string|max:255',
            'salary' => 'required|string|max:255',
            'qualification1' => 'required|string|max:255',
            'qualification2' => 'required|string|max:255',
            'qualification3' => 'required|string|max:255',
            'qualification4' => 'required|string|max:255',
            'qualification5' => 'required|string|max:255',
            'skills1' => 'required|string|max:255',
            'skills2' => 'required|string|max:255',
            'skills3' => 'required|string|max:255',
            'skills4' => 'required|string|max:255',
            'skills5' => 'required|string|max:255',
        ]);

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
