<?php

namespace App\Http\Controllers;


use  App\Models\UserProfile;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfilePage extends Controller

{
    public function ProfilePage(): Response
    {
        return Inertia::render('Profile/ProfilePage');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'jtitle' => 'nullable|string|max:255',
            'phonenumber' => 'nullable|string|max:255',
            'livesin' => 'nullable|string|max:255',
            'gender' => 'nullable|string|max:255',
            'skills1' => 'nullable|string|max:255',
            'skills2' => 'nullable|string|max:255',
            'skills3' => 'nullable|string|max:255',
            'skills4' => 'nullable|string|max:255',
            'skills5' => 'nullable|string|max:255',
            'skills6' => 'nullable|string|max:255',
            'resume' => 'nullable|string|max:255',
            'education' => 'nullable|string|max:255',
            'dateofwork' => 'nullable|string|max:255',
            'job' => 'nullable|string|max:255',
            'jobdescription' => 'nullable|string|max:255',
        ]);

        $request->user()->userProfile()->create($validatedData);
        return redirect(route('userprofile'));
    }

    /**
     * Display the specified resource.
     */
    public function show(UserProfile $userProfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserProfile $userProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserProfile $userProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserProfile $userProfile)
    {
        //
    }
}
