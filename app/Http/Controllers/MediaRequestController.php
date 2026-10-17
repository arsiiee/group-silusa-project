<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMediaRequest;
use App\Models\MediaRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MediaRequestController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $requests = $request->user()
            ->mediaRequests()
            ->latest()
            ->orderByDesc('id')
            ->get();

        return response()->json([
            'stats' => [
                'total'     => $requests->count(),
                'pending'   => $requests->where('status', 'pending')->count(),
                'approved'  => $requests->where('status', 'approved')->count(),
                'denied'    => $requests->where('status', 'denied')->count(),
                'completed' => $requests->where('status', 'completed')->count(),
            ],
            'requests' => $requests,
        ]);
    }

    public function store(StoreMediaRequest $request): JsonResponse
    {
        $mediaRequest = $request->user()->mediaRequests()->create([
            ...$request->validated(),
            'status' => 'pending',
        ]);

        return response()->json([
            'message' => 'Media request submitted successfully!',
            'data'    => $mediaRequest,
        ], 201);
    }

    public function show(Request $request, MediaRequest $mediaRequest): JsonResponse
    {
        $this->ownerOnly($request, $mediaRequest);

        return response()->json(['data' => $mediaRequest]);
    }

    public function update(StoreMediaRequest $request, MediaRequest $mediaRequest): JsonResponse
    {
        $this->ownerOnly($request, $mediaRequest);

        if ($mediaRequest->status !== 'pending') {
            return response()->json(['message' => 'Only pending requests can be edited.'], 422);
        }

        $mediaRequest->update($request->validated());

        return response()->json([
            'message' => 'Request updated successfully!',
            'data'    => $mediaRequest->fresh(),
        ]);
    }

    public function destroy(Request $request, MediaRequest $mediaRequest): JsonResponse
    {
        $this->ownerOnly($request, $mediaRequest);

        if ($mediaRequest->status !== 'pending') {
            return response()->json(['message' => 'Only pending requests can be deleted.'], 422);
        }

        $mediaRequest->delete();

        return response()->json(['message' => 'Request deleted.']);
    }

    private function ownerOnly(Request $request, MediaRequest $mediaRequest): void
    {
        abort_unless((int) $mediaRequest->user_id === (int) $request->user()->id, 404);
    }
}
