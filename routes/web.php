<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get("/get/employeeList",[EmployeeController::class,'getEmployeeList'])->name('employee.list');
Route::post("/get/employeeDetail",[EmployeeController::class,'getEmployeeDetail'])->name('employee.detail');
Route::post("/update/employee",[EmployeeController::class,'employeeUpdate']);
Route::delete("/delete/employeeData/{employee}",[EmployeeController::class,'employeeDelete']);
Route::post("/create/employeeData",[EmployeeController::class,'employeeCreate']);


