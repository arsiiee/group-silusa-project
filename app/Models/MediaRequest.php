<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MediaRequest extends Model
{
    protected $fillable = [
        'user_id',
        'event_title',
        'requested_services',
        'event_date',
        'call_time',
        'venue',
        'target_delivery_date',
        'coverage_directives',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'requested_services'   => 'array',
            'event_date'           => 'date:Y-m-d',
            'target_delivery_date' => 'date:Y-m-d',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
