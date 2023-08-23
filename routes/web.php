<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\JobListingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Apply;
use App\Http\Controllers\ApplicantLists;
use App\Http\Controllers\NewPage;
use App\Http\Controllers\JeromePage;
use App\Http\Controllers\JobOverview;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/hello', function () {
    return 'Hello World';
});
Route::get('/royce', [NewPage::class, 'Page'])->name('post.page');
Route::get('/jerome', [JeromePage::class, 'JeromePage'])->name('jobs.page');

Route::get('/apply', [Apply::class, 'Apply'])->name('post.apply')->middleware(['auth', 'verified', 'can:isApplicant']);
Route::get('/applicants', [ApplicantLists::class, 'ApplicantLists'])->name('post.applicants');

Route::get('/job-overview/{id}', [JobOverview::class, 'JobOverview'])->name('joboverview.page');
Route::get('/joblists', [JobListingController::class, 'joblists'])->name('joblists');
Route::get('/joblists/create', [JobListingController::class, 'create'])->name('joblists.create');
Route::post('/joblists', [JobListingController::class, 'store'])->name('joblists.store');


Route::get('/', [PostController::class, 'index'])->name('post.index');
Route::get('/posts/new', [PostController::class, 'new'])->name('post.new');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('userProfile', ProfilePage::class)
    ->middleware(['auth', 'verified']);

Route::get('/profile', function () {
    return Inertia::render('Profile/ProfilePage');
})->middleware(['auth', 'verified', 'can:isApplicant'])->name('profile.page');



Route::middleware('auth')->group(function () {
    Route::get('/settings', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/settings', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/settings', [ProfileController::class, 'destroy'])->name('profile.destroy');
});





require __DIR__ . '/auth.php';
