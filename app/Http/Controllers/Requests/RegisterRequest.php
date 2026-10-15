<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'firstName'  => 'required|string|max:100',
            'lastName'   => 'required|string|max:100',
            'department' => 'required|string|max:255',
            'email'      => 'required|email|unique:users,email|max:255',
            'password'   => 'required|string|min:8',
        ];
    }
}
