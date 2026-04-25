<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::latest()->paginate(10);
        return Inertia::render('Backend/Contact/Index', [
            'contacts' => $contacts
        ]);
    }

    public function show(Contact $contact)
    {
        return Inertia::render('Backend/Contact/Show', [
            'contact' => $contact
        ]);
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return back()->with('success', 'Contact message deleted successfully.');
    }
}
