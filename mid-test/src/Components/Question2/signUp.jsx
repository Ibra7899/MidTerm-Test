import { useForm } from "react-hook-form";
import "./signUp.css";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.cfpassword) {
        alert("Passwords do not march");
      } else {
        alert(`First Name: ${data.firstname},
             \nLast Name: ${data.lastname},
            \nUser Name: ${data.username},
            \nEmail: ${data.email},
            \nPassword: ${data.password},
            \nConfirm Password: ${data.cfpassword}`);
        console.log(data); 
      }
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hook">
      <label className="hook__text">First Name: </label>
      <input
        type="text"
        className="hook__input"
        {...register("firstname", { required: true})}
      />
      {errors.firstname && (
        <p className="hook__error">First name is required.</p>
      )}

      <label className="hook__text">Last Name: </label>
      <input
        type="text"
        className="hook__input"
        {...register("lastname", { required: true})}
      />
      {errors.lastname && (
        <p className="hook__error">Last name is required.</p>
      )}

     <label className="hook__text">User Name: </label>
      <input
        type="text"
        className="hook__input"
        {...register("username", { required: true})}
      />
      {errors.username && (
        <p className="hook__error">User name is required.</p>
      )}

      <label className="hook__text">Email: </label>
      <input
        type="email"
        className="hook__input"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && (
        <p className="hook__error">Email is required and must be valid</p>
      )}


      <label className="hook__text">Password</label>
      <input
        type="password"
        className="hook__input"
        {...register("password", { required: true })}
      />
      {errors.password && <p className="hook__error">Password is required</p>}

      <label className="hook__text">Confirm Password</label>
      <input
        type="password"
        className="hook__input"
        {...register("cfpassword", { required: true })}
      />
      {errors.cfpassword && <p className="hook__error">Confirm Password is required</p>}


      <button className="hook__button" type="submit">
        Submit
      </button>
    </form>
  );
}
export default SignUpForm;