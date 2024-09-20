import React from 'react';
import { Formik } from 'formik';
import { Input } from "antd";

function BasicForm() {
    return (
        <div className='m-10'>
            <h1>Anywhere in your app!</h1>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.firstName) {
                        errors.firstName = 'Required';
                    }
                    if (!values.lastName) {
                        errors.lastName = 'Required';
                    }
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Input type="text" name="firstName" onChange={handleChange} onBlur={handleBlur} value={values.firstName} placeholder="First Name" />
                        {errors.firstName && touched.firstName && errors.firstName}
                        <br />
                        <Input type="text" name="lastName" onChange={handleChange} onBlur={handleBlur} value={values.lastName} placeholder='Last Name' />
                        {errors.lastName && touched.lastName && errors.lastName}
                        <br />
                        <Input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="email" />
                        {errors.email && touched.email && errors.email}
                        <br />
                        <Input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder='password' />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
export default BasicForm;