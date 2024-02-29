<?php

namespace App\Http\Controllers;

use App\Models\Letter;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class LetterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Letters/Index');
    }

    public function generate(Request $request)
    {

        $key = getenv('OPENAI_KEY');
        if (!$key) {
            // Handle the case where the API key is not set
            return response()->json(['error' => 'API key not set'], 500);
        }

        $letter = new Letter();
        $firstName = $request->get('first_name');
        $lastName = $request->get('last_name');
        $job = $request->get('job_title');
        $degree = $request->get('degree');
        $company = $request->get('company');
        $advertisement = $request->get('advertisement');

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . $key,
        ])->post('https://api.openai.com/v1/chat/completions', [
            "model" => "gpt-4",
            "messages" => [
                [
                    "role" => "system",
                    "content" => "Vous êtes un assistant spécialisé dans la rédaction de lettre de motivation"
                ],
                [
                    "role" => "user",
                    "content" => "Mon nom est " . $firstName . ' ' . $lastName . ". Diplomes : " . $degree . '.
            Poste cible : ' . $job . '. Annonce cible : ' . $advertisement . "De la part de l'entreprise : " . $company . '.' .
                        "Ecris une lettre de motivation convaincante et personnalisée avec une bonne mise en forme professionnelle à l'aide des informations transmises."
                ]
            ]
        ]);
            $data = $response->json();
        dd($data);

        return redirect(route('dashboard'));

    }
}
