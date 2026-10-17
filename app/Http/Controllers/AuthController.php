<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request): JsonResponse
    {
        $data = $request->validated();

        $user = User::create([
            'first_name' => $data['firstName'],
            'last_name'  => $data['lastName'],
            'department' => $data['department'],
            'email'      => $data['email'],
            'password'   => $data['password'],
        ]);

        return response()->json([
            'message' => 'Account created successfully!',
            'token'   => $user->createToken('auth_token')->plainTextToken,
            'user'    => $user,
        ], 201);
    }

    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $user = User::where('email', strtolower($credentials['email']))->first();

        if (! $user || ! Hash::check($credentials['password'], $user->password)) {
            return response()->json(['message' => 'Invalid email or password.'], 401);
        }

        return response()->json([
            'message' => 'Authenticated successfully',
            'token'   => $user->createToken('auth_token')->plainTextToken,
            'user'    => $user,
        ]);
    }

    public function me(Request $request): JsonResponse
    {
        return response()->json(['user' => $request->user()]);
    }

    public function updateProfile(Request $request): JsonResponse
    {
        $data = $request->validate([
            'full_name'  => ['required', 'string', 'max:100'],
            'phone'      => ['nullable', 'string', 'max:50'],
            'department' => ['required', 'string', 'max:255'],
        ]);

        $parts = preg_split('/\s+/', trim($data['full_name']), 2);

        $user = $request->user();
        $user->update([
            'first_name' => $parts[0],
            'last_name'  => $parts[1] ?? '',
            'phone'      => $data['phone'] ?? null,
            'department' => $data['department'],
        ]);

        return response()->json([
            'message' => 'Profile updated successfully!',
            'user'    => $user->fresh(),
        ]);
    }

    public function changePassword(Request $request): JsonResponse
    {
        $data = $request->validate([
            'current_password' => ['required', 'string'],
            'password'         => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $user = $request->user();

        if (! Hash::check($data['current_password'], $user->password)) {
            return response()->json([
                'message' => 'Current password is incorrect.',
                'errors'  => ['current_password' => ['Current password is incorrect.']],
            ], 422);
        }

        $user->update(['password' => $data['password']]);

        $user->tokens()
            ->where('id', '!=', $user->currentAccessToken()->id)
            ->delete();

        return response()->json(['message' => 'Password updated successfully!']);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully.']);
    }
}
