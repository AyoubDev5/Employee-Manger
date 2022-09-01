<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Exception;
use Log;


class EmployeeController extends Controller
{
    //
    public function getEmployeeList(){

        try {
            $emp = Employee::orderBy("id","DESC")->get();

            return response()->json($emp);

        } catch (Exception $er) {
            Log::error($er);
        }
    }

      //
      public function getEmployeeDetail(Request $request){

        try {
            $empDetail = Employee::findOrFail($request->get("employee"));

            return response()->json($empDetail);

        } catch (Exception $er) {
            Log::error($er);
        }
    }

    public function employeeUpdate(Request $req){

        try {

            $firstName = $req->get("First_Name");
            $lastName = $req->get("Last_Name");
            $salary = $req->get("Salary");
            $id = $req->get("id");

            Employee::where("id",$id)->update(
                [
                    'First_Name' => $firstName,
                    'Last_Name' => $lastName,
                    'Salary' => $salary
                ]
            );

            return response()->json( [
                'First_Name'=>$firstName,
                'Last_Name'=>$lastName,
                'Salary'=>$salary
            ]);

        } catch (Exception $er) {
            Log::error($er);
        }
    }

    public function employeeDelete(Employee $employee){

        try {

           $employee->delete();

        } catch (Exception $er) {
            Log::error($er);
        }
    }

    public function employeeCreate(Request $req){

        try {

            $firstName = $req->get("First_Name");
            $lastName = $req->get("Last_Name");
            $salary = $req->get("Salary");

            Employee::create(
                [
                    'First_Name' => $firstName,
                    'Last_Name' => $lastName,
                    'Salary' => $salary
                ]
            );

            return response()->json( [
                'First_Name'=>$firstName,
                'Last_Name'=>$lastName,
                'Salary'=>$salary
            ]);

        } catch (Exception $er) {
            Log::error($er);
        }
    }
}
