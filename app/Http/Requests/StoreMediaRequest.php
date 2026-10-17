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
            'event_title'            => ['required', 'string', 'max:255'],
            'requested_services'     => ['required', 'array', 'min:1'],
            'requested_services.*'   => ['string', 'in:photo,video,livestream', 'distinct'],
            'event_date'             => ['required', 'date_format:Y-m-d'],
            'call_time'              => ['required', 'string', 'max:100'],
            'venue'                  => ['required', 'string', 'max:255'],
            'target_delivery_date'   => ['required', 'date_format:Y-m-d', 'after_or_equal:event_date'],
            'coverage_directives'    => ['nullable', 'string', 'max:500'],
        ];
    }
}
