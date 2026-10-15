<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMediaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'event_title'          => 'required|string|max:255',
            'requested_services'   => 'required|array|min:1',
            'event_date'           => 'required|string',
            'call_time'            => 'required|string',
            'venue'                => 'required|string',
            'target_delivery_date' => 'required|string',
            'coverage_directives'  => 'nullable|string|max:500',
        ];
    }
}
