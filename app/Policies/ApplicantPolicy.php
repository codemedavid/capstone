<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ApplicantPolicy
{
    /**
     * Create a new policy instance.
     */
    use HandlesAuthorization;
    public function __construct()
    {
        //
    }
}
