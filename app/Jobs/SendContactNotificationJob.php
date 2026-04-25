<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SendContactNotificationJob implements ShouldQueue
{
    use Queueable;

    protected $contact;

    /**
     * Create a new job instance.
     */
    public function __construct($contact)
    {
        $this->contact = $contact;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $settings = \App\Models\GeneralSetting::whereIn('key', [
            'mail_host', 'mail_port', 'mail_username', 'mail_password', 'mail_encryption', 'mail_from_address', 'mail_to_address'
        ])->get()->pluck('value', 'key');

        $toEmail = $settings['mail_to_address'] ?? config('mail.from.address');

        if ($settings->has(['mail_host', 'mail_username', 'mail_password'])) {
            $config = [
                'transport' => 'smtp',
                'host' => $settings['mail_host'],
                'port' => $settings['mail_port'] ?? 587,
                'encryption' => $settings['mail_encryption'] ?? 'tls',
                'username' => $settings['mail_username'],
                'password' => $settings['mail_password'],
                'from' => [
                    'address' => $settings['mail_from_address'] ?? $settings['mail_username'],
                    'name' => config('app.name'),
                ],
            ];
            \Illuminate\Support\Facades\Config::set('mail.mailers.smtp', $config);
            \Illuminate\Support\Facades\Config::set('mail.default', 'smtp');
        }

        \Illuminate\Support\Facades\Mail::to($toEmail)->send(new \App\Mail\NewContactSubmission($this->contact));
    }
}
