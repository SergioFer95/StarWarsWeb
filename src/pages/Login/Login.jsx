import React from 'react';
import { useFormik } from 'formik';
import Button from '../../components/Button/Button';
import anakin from './assets/images/anakinLightSaber.png';
import obiWan from './assets/images/obiWanLightSaber.png';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    }

  })



  return (
    <div className="loginBody">
      <h1>Welcome, young padawan.
        It is time to identify yourself:</h1>

      <img src={anakin} alt='imageLightSaberOff' />

      <form>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Button btnContain='Log In' />
      </form>

      <img src={obiWan} alt='imageLightSaberOff' />

    </div>
  )
}


