<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
        /**
     * @OA\Info(
     *      version="1.0.0",
     *      title="Integration Swagger in Laravel",
     *      description="Implementation of Swagger with in Laravel",
     *      @OA\Contact(
     *          email="test123@admin.com"
     *      ),
     *      @OA\License(
     *          name="Apache 2.0",
     *          url="http://www.apache.org/licenses/LICENSE-2.0.html"
     *      )
     * )
     *
     * @OA\Server(
     *   description="Angular Laravel API Server",
     *    url=L5_SWAGGER_CONST_HOST
     * )

     *
     *
     */
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
