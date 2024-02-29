<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Letter extends Model
{
    use HasFactory;

    protected $fillable = [
        "first_name",
        "last_name",
        "job_title",
        "degree",
        "company",
        "advertisement",
        "response",
    ];
}
