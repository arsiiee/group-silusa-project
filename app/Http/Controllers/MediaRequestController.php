<?php

namespace App\Http\Controllers;

use App\Models\MediaRequest;
use App\Http\Requests\StoreMediaRequest;
use Illuminate\Http\Request;

class MediaRequestController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->user()->id;

        $requests = MediaRequest::where('user_id', $userId)->latest()->get();

        return response()->json([
            'stats' => [
                'total_bookings'    => $requests->count(),
                'approved_coverage' => $requests->where('status', 'Approved & Scheduled')->count(),
                'completed_shoots'  => $requests->where('status', 'Delivered & Archived')->count(),
                'pending_requests'  => $requests->where('status', 'Pending Approval')->count(),
            ],
            'requests' => $requests,
        ]);
    }

    public function store(StoreMediaRequest $request)
    {
        $validated = $request->validated();

        $mediaRequest = MediaRequest::create([
            'user_id'              => $request->user()->id,
            'event_title'          => $validated['event_title'],
            'requested_services'   => $validated['requested_services'],
            'event_date'           => $validated['event_date'],
            'call_time'            => $validated['call_time'],
            'venue'                => $validated['venue'],
            'target_delivery_date' => $validated['target_delivery_date'],
            'coverage_directives'  => $validated['coverage_directives'] ?? null,
            'status'               => 'Pending Approval',
        ]);

        return response()->json([
            'message' => 'Media request submitted successfully!',
            'data'    => $mediaRequest,
        ], 201);
    }
}
