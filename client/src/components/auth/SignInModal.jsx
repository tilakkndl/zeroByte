import { useState } from 'react';
import { Formik, Form } from 'formik';

import { Link } from 'react-router-dom';

import { loginValidation } from './schemas';
import Container from '../Container';
import Button from '../Button';
import Input from './Input';

const SignInModal = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignIn = () => {};

  return (
    <Container>
      <div className="flex flex-col items-center justify-center my-4">
        <div className="flex gap-6 my-8">
          <div>
            <h3
              className="
              text-dark-color
              font-semibold text-2xl
              pb-3 mb-3 mt-1 border-b-2 border-[#ccc]
            "
            >
              Registered Customers
            </h3>
            <Formik
              enableReinitialize
              initialValues={user}
              validationSchema={loginValidation}
              onSubmit={() => {
                handleSignIn();
              }}
            >
              {({ errors, handleBlur, touched }) => (
                <Form>
                  <Input
                    label="Email"
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                  <Button buttonText="Login" full />
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 mt-4 text-base text-accent-color font-semibold">
          <div className="cursor-pointer flex gap-2">
            <span>Create New Account ?</span>
            <Link to={'/signup'} className="text-primary-color">
              SignUp
            </Link>
          </div>
          <span className="cursor-pointer text-secondary-color">
            Forgot Your Password ?
          </span>
        </div>
      </div>
    </Container>
  );
};

export default SignInModal;
