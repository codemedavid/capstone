<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\JobListing;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Apply;
use App\Http\Controllers\ApplicantLists;
use App\Http\Controllers\NewPage;
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

Route::get('/hello', function(){
    return 'Hello World';
});
Route::get('/royce', [NewPage::class, 'Page'])->name('post.page');
Route::get('/apply', [Apply::class, 'Apply'])->name('post.apply')->middleware(['auth', 'verified']);
Route::get('/applicants', [ApplicantLists::class, 'ApplicantLists'])->name('post.applicants');
Route::get('/jobs', [JobListing::class, 'joblists'])->name('post.listings');
Route::get('/', [PostController::class, 'index'])->name('post.index');
Route::get('/posts/new', [PostController::class, 'new'])->name('post.new');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
