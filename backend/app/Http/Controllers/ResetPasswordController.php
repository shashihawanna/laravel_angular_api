<?php

namespace App\Http\Controllers;

use App\Mail\ResetPasswordMail;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ResetPasswordController extends Controller
{
    public function sendResetPasswordLink(Request $request)
    {
        if (!$this->validateEmail($request->email)) {
            return $this->failedResonse();
        }
        $this->send($request->email);
        return $this->successResonse();
    }

    public function send($email)
    {
        $token = $this->createToken($email);
        Mail::to($email)->send(new ResetPasswordMail($token));
    }

    public function createToken($email)
    {
        $oldToken = DB::table('password_resets')->select('token')->where('email', $email)->first();
       
        if ($oldToken) {
            return $oldToken->token;
        }
        $token = Str::random(60);
        $this->saveToken($token, $email);
        return $token;
    }
    public function saveToken($token, $email)
    {
        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => date("Y-m-d H:i:s"),
        ]);
    }

    public function validateEmail($email)
    {
        return (bool)User::where('email', $email)->first();
    }

    public function failedResonse()
    {
        return response()->json([
            'eroor' => 'Email not Found'
        ], Response::HTTP_NOT_FOUND);
    }

    public function successResonse()
    {
        return response()->json([
            'data' => 'Reset Email is send seccessfully,Plesae check your index'
        ], Response::HTTP_OK);
    }
}
