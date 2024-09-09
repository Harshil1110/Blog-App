import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const CreateModel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/blog/create", data)
      .then((res) => {
        console.log(res.data);
        const { success } = res.data;
        if (success) {
          alert("login successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form style={{ margin: "0 100px" }} onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            {...register("title", { required: true })}
          />
          <label className="form-label" htmlFor="form2Example1">
            Title
          </label>
          {errors?.title && <p>Title is required.</p>}
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="form2Example2"
            className="form-control"
            {...register("description", { required: true })}
          />
          <label className="form-label" htmlFor="form2Example2">
            Description
          </label>
          {errors?.description && <p>description is required.</p>}
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <select class="form-select" aria-label="Default select example" {...register("category", { required: true })}>
            <option selected>Select Category</option>
            <option value="travelling">Travelling</option>
            <option value="food">Food</option>
            <option value="fashion">Fashion</option>
          </select>
          <label className="form-label" htmlFor="form2Example4">
            Category
          </label>
          {errors?.category && <p>category is required.</p>}
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <select class="form-select" aria-label="Default select example" {...register("status", { required: true })}>
            <option selected>Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
          <label className="form-label" htmlFor="form2Example5">
            Status
          </label>
          {errors?.status && <p>status is required.</p>}
        </div>
        <button
          type="submit"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-block mb-4"
        >
          create
        </button>
      </form>
    </div>
  );
};

export default CreateModel;
