<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
           'First_Name'=> $this->faker->name(),
           'Last_Name'=> $this->faker->name(),
           'Salary'=> $this->faker->numberBetween("2000","10000"),
        ];
    }
}
