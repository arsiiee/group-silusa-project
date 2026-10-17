<?php

namespace Database\Seeders;

use App\Models\MediaRequest;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::updateOrCreate(
            ['email' => 'alex.rivera@liceo.edu.ph'],
            [
                'first_name' => 'Alex',
                'last_name'  => 'Rivera',
                'department' => 'College of Information Technology',
                'password'   => Hash::make('Password123!'),
            ]
        );

        if (MediaRequest::count() > 0) {
            return;
        }

        $samples = [
            [
                'event_title'          => 'CIT Days Opening Ceremony',
                'requested_services'   => ['photo', 'video', 'livestream'],
                'event_date'           => '2026-10-22',
                'call_time'            => '08:30 AM - 12:00 PM',
                'venue'                => 'Paseo del Rio Campus Grand Atrium',
                'target_delivery_date' => '2026-10-29',
                'coverage_directives'  => 'Deans entrance procession and ribbon cutting.',
                'status'               => 'Approved & Scheduled',
            ],
            [
                'event_title'          => 'Liceo Hackathon 2026: Pitch Night',
                'requested_services'   => ['video', 'livestream'],
                'event_date'           => '2026-11-05',
                'call_time'            => '05:00 PM - 09:00 PM',
                'venue'                => 'Engineering Complex Hall B',
                'target_delivery_date' => '2026-11-12',
                'coverage_directives'  => 'Multicam livestream and a highlight reel.',
                'status'               => 'Pending Approval',
            ],
            [
                'event_title'          => 'Research Colloquium 2026',
                'requested_services'   => ['photo'],
                'event_date'           => '2026-10-30',
                'call_time'            => '02:30 PM - 05:00 PM',
                'venue'                => 'Science Hall A',
                'target_delivery_date' => '2026-11-06',
                'coverage_directives'  => null,
                'status'               => 'Denied',
            ],
            [
                'event_title'          => 'General Assembly 2026',
                'requested_services'   => ['photo', 'video'],
                'event_date'           => '2026-09-28',
                'call_time'            => '09:00 AM - 04:00 PM',
                'venue'                => 'Liceo Civic Gym',
                'target_delivery_date' => '2026-10-05',
                'coverage_directives'  => 'Full event coverage.',
                'status'               => 'Delivered & Archived',
            ],
        ];

        foreach ($samples as $sample) {
            MediaRequest::create($sample + ['user_id' => $user->id]);
        }
    }
}
