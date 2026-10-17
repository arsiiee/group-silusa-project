<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MediaRequestController;
use Illuminate\Support\Facades\Route;

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:10,1');

// Protected routes (need a Sanctum token)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'me']);
    Route::put('/user', [AuthController::class, 'updateProfile']);
    Route::put('/user/password', [AuthController::class, 'changePassword']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/requests', [MediaRequestController::class, 'index']);
    Route::post('/requests', [MediaRequestController::class, 'store']);
    Route::get('/requests/{mediaRequest}', [MediaRequestController::class, 'show']);
    Route::put('/requests/{mediaRequest}', [MediaRequestController::class, 'update']);
    Route::delete('/requests/{mediaRequest}', [MediaRequestController::class, 'destroy']);
});
