<x-mail::message>
# New Contact Submission

You have received a new contact submission from your website.

**Name:** {{ $contact->name }}
**Email:** {{ $contact->email }}
**Contact:** {{ $contact->contact }}
**Organization:** {{ $contact->organization ?? 'N/A' }}

**Message:**
{{ $contact->message }}

<x-mail::button :url="route('admin.contacts.show', $contact->id)">
View Submission
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
