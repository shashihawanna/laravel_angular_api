@component('mail::message')
#Change password

Click on the button to reset password.

@component('mail::button', ['url' => $url ])
Reset password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
