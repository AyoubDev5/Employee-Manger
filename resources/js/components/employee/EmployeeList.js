import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateEmployee from "./CreateEmployee";

export default function EmployeeList() {
    const [employeeList, setEmployee] = useState([]);
    const [id, setId] = useState(0);
    const [firstName, setFirstn] = useState("");
    const [lastName, setLastn] = useState("");
    const [salary, setSalary] = useState(0.0);

    useEffect(() => {
        getEmployeeList();
    }, []);

    const getEmployeeList = () => {
        axios
            .get("/get/employeeList")
            .then((res) => res.data)
            .then((data) => {
                setEmployee(data);
            });
    };

    const getEmployeeDetail = (id) => {
        axios.post("/get/employeeDetail", { employee: id }).then((res) => {
            setId(res.data.id)
            setFirstn(res.data.First_Name);
            setLastn(res.data.Last_Name);
            setSalary(res.data.Salary);
            //console.log("data", res.data);
        });
    };

    const updateEmployee = () =>{
        axios.post("/update/employee",{
            id:id,
            First_Name:firstName,
            Last_Name:lastName,
            Salary:salary,
        }).then(()=>{
            //console.log(res);
            toast.success("Employee Update successfully!");
            setTimeout(()=>{
              location.reload()
            },3000)
        })
    }

    const confirmDelete = (employee) =>{
        axios.delete("/delete/employeeData/"+employee)
        .then(()=>{
            toast.error("Employee Deleted Successfully");
            setTimeout(()=>{
                location.reload()
            },3000)
        })
    }

    return (
        <div className="container">
            <ToastContainer/>
            <CreateEmployee/>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col">#id</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeeList?.length &&
                                    employeeList.map((emp) => (
                                        <tr>
                                            <th scope="row" key={emp.id}>
                                                {emp.id}
                                            </th>
                                            <td>{emp.First_Name}</td>
                                            <td>{emp.Last_Name}</td>
                                            <td>{emp.Salary}</td>
                                            <td>
                                                <div
                                                    className="btn-toolbar"
                                                    role="toolbar"
                                                    aria-label="Toolbar with button groups"
                                                >
                                                    <div
                                                        className="btn-group me-2"
                                                        role="group"
                                                        aria-label="First group"
                                                    >
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                            onClick={() => {
                                                                getEmployeeDetail(
                                                                    emp.id
                                                                );
                                                            }}
                                                        >
                                                            View
                                                        </button>
                                                        <div
                                                            className="modal fade"
                                                            id="exampleModal"
                                                            tabindex="-1"
                                                            aria-labelledby="exampleModalLabel"
                                                            aria-hidden="true"
                                                        >
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5
                                                                            className="modal-title"
                                                                            id="exampleModalLabel"
                                                                        >
                                                                            Information
                                                                            about
                                                                            Employee{" "}
                                                                            {
                                                                               id
                                                                            }
                                                                        </h5>
                                                                        <button
                                                                            type="button"
                                                                            className="btn-close"
                                                                            data-bs-dismiss="modal"
                                                                            aria-label="Close"
                                                                        ></button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        Full
                                                                        Name :{" "}
                                                                        {
                                                                            firstName
                                                                        }{" "}
                                                                        {
                                                                            lastName
                                                                        }
                                                                        <br />
                                                                        Salary :{" "}
                                                                        {salary}
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-secondary"
                                                                            data-bs-dismiss="modal"
                                                                        >
                                                                            Close
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-primary"
                                                                        >
                                                                            Save
                                                                            changes
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="btn-group me-2"
                                                        role="group"
                                                        aria-label="Second group"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#updateModal"
                                                        onClick={() => {
                                                            getEmployeeDetail(
                                                                emp.id
                                                            );
                                                        }}
                                                    >
                                                        <button
                                                            type="button"
                                                            className="btn btn-info"
                                                        >
                                                            Edit
                                                        </button>
                                                    </div>
                                                    <div
                                                        class="modal fade"
                                                        id="updateModal"
                                                        data-bs-backdrop="static"
                                                        data-bs-keyboard="false"
                                                        tabindex="-1"
                                                        aria-labelledby="staticBackdropLabel"
                                                        aria-hidden="true"
                                                    >
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5
                                                                        class="modal-title"
                                                                        id="staticBackdropLabel"
                                                                    >
                                                                        Update Employee {id}
                                                                    </h5>
                                                                    <button
                                                                        type="button"
                                                                        class="btn-close"
                                                                        data-bs-dismiss="modal"
                                                                        aria-label="Close"
                                                                    ></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <form>
                                                                        <div class="mb-3">
                                                                            <label
                                                                                for="exampleInputEmail1"
                                                                                class="form-label"
                                                                            >
                                                                                First Name
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                name="First_Name"
                                                                                id="exampleInputEmail1"
                                                                                aria-describedby="emailHelp"
                                                                                value={firstName ?? ""}
                                                                                onChange={(e) => setFirstn(e.target.value)}
                                                                            />
                                                                        </div>
                                                                        <div class="mb-3">
                                                                            <label
                                                                                for="exampleInputEmail1"
                                                                                class="form-label"
                                                                            >
                                                                               Last Name
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                name="Last_Name"
                                                                                id="exampleInputEmail1"
                                                                                aria-describedby="emailHelp"
                                                                                value={lastName ?? ""}
                                                                                onChange={(e) => setLastn(e.target.value)}
                                                                            />
                                                                        </div>
                                                                        <div class="mb-3">
                                                                            <label
                                                                                for="exampleInputPassword1"
                                                                                class="form-label"
                                                                            >
                                                                                Salary
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="Salary"
                                                                                class="form-control"
                                                                                id="exampleInputPassword1"
                                                                                value={salary ?? ""}
                                                                                onChange={(e) => setSalary(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="button"
                                                                        class="btn btn-secondary"
                                                                        data-bs-dismiss="modal"
                                                                    >
                                                                        Close
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        class="btn btn-primary"
                                                                        onClick={updateEmployee}
                                                                    >
                                                                        Update
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="btn-group"
                                                        role="group"
                                                        aria-label="Third group"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteModal"
                                                    >
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                            onClick={() => {
                                                                getEmployeeDetail(
                                                                    emp.id
                                                                );
                                                            }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                    <div
                                                        class="modal fade"
                                                        id="deleteModal"
                                                        data-bs-backdrop="static"
                                                        data-bs-keyboard="false"
                                                        tabindex="-1"
                                                        aria-labelledby="staticBackdropLabel"
                                                        aria-hidden="true"
                                                    >
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5
                                                                        class="modal-title"
                                                                        id="staticBackdropLabel"
                                                                    >
                                                                        Delete Employee {id}
                                                                    </h5>
                                                                    <button
                                                                        type="button"
                                                                        class="btn-close"
                                                                        data-bs-dismiss="modal"
                                                                        aria-label="Close"
                                                                    ></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    Are you sure you want to delete this Employee?
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button
                                                                        type="button"
                                                                        class="btn btn-secondary"
                                                                        data-bs-dismiss="modal"
                                                                    >
                                                                        Close
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        class="btn btn-danger"
                                                                        onClick={()=>{
                                                                            confirmDelete(emp.id)
                                                                        }}
                                                                    >
                                                                        Confirm
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
