import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("http://localhost:5000/user/login", data)
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
            type="email"
            id="form2Example1"
            className="form-control"
            {...register("email", { required: true })}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          {errors?.email && <p>Email is required.</p>}
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            {...register("password", { required: true })}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          {errors?.password && <p>Password is required.</p>}
        </div>

        <button
          type="submit"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-block mb-4"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
