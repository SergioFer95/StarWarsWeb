import React from 'react';
import { useFormik } from 'formik';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }

  });

  return (
    <div className='loginBody'>

      <section className='loginFormContainer'>

        <h3 className='loginFormContainer__welcome'>It is time to identify yourself</h3>

        <form onSubmit={formik.handleSubmit} className='loginForm'>
          <label htmlFor="userName" className='loginForm__label'>User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            className='loginForm__input'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />

          <label htmlFor="email" className='loginForm__label'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className='loginForm__input'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label htmlFor="password" className='loginForm__label'>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className='loginForm__input'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Link to='Home'>
            <Button btnContain='Login' />
          </Link>
        </form>

      </section>

    </div>
  )
}


