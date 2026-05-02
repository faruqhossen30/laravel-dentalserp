<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\GeneralSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GeneralSettingController extends Controller
{
    public function index()
    {
        $settings = GeneralSetting::all()->pluck('value', 'key');
        return Inertia::render('Backend/Setting/GeneralIndex', [
            'settings' => $settings
        ]);
    }

    public function update(Request $request)
    {
        $data = $request->all();
        
        foreach ($data as $key => $value) {
            GeneralSetting::updateOrCreate(
                ['key' => $key],
                ['value' => $value]
            );
        }

        return back()->with('success', 'General settings updated successfully.');
    }
}
