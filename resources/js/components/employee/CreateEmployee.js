import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateEmployee() {
    const [employeeList, setEmployee] = useState([]);
    const [id, setId] = useState(0);
    const [firstName, setFirstn] = useState("");
    const [lastName, setLastn] = useState("");
    const [salary, setSalary] = useState(0.0);

    const addEmployee =()=>{
        axios.post("/create/employeeData",{
            First_Name:firstName,
            Last_Name:lastName,
            Salary:salary
        })
        .then(()=>{
            toast.success("Create Employee Successfully");
            setTimeout(()=>{
                location.reload()
            },3000)
        })
    }

    return (
        <div>
            <div
                className="btn-group me-2"
                role="group"
                aria-label="Second group"
                data-bs-toggle="modal"
                data-bs-target="#createModal"
            >
                <button type="button" className="btn btn-info">
                    Add Employee
                </button>
            </div>
            <div
                class="modal fade"
                id="createModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Create Employee
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
                                        placeholder="First name here"
                                        onChange={(e) =>
                                            setFirstn(e.target.value)
                                        }
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
                                        placeholder="Last name here"
                                        onChange={(e) =>
                                            setLastn(e.target.value)
                                        }
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
                                        placeholder="Salary here"
                                        onChange={(e) =>
                                            setSalary(e.target.value)
                                        }
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
                                onClick={addEmployee}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
