<?php

use Illuminate\Support\Facades\Route;

Route::post('/newproduct', [App\Http\Controllers\ProductController::class, 'newproduct'])->name('newproduct');

Route::get('/list', [App\Http\Controllers\ProductController::class, 'list'])->name('list');

Route::delete('/delete/{id}', [App\Http\Controllers\ProductController::class, 'destroy'])->name('destroy');

Route::get('/product/{id}', [App\Http\Controllers\ProductController::class, 'getProduct'])->name('getProduct');

Route::get('/search/{key}', [App\Http\Controllers\ProductController::class, 'search'])->name('search');
// Route::post('/login', [App\Http\Controllers\UserController::class, 'login'])->name('login');