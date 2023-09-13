import { Formik, Form } from 'formik';

import Container from '../Container';
import Input from './Input';
import Button from '../Button';
import { useState } from 'react';
import { registerValidation } from './schemas';

const SignUpModal = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignUp = () => {};

  return (
    <Container>
      <div className="flex gap-6 my-8">
        <div>
          <h3
            className="
              text-dark-color
              font-semibold text-2xl
              pb-3 mb-3 mt-1 border-b-2 border-[#ccc]
            "
          >
            New User ? Register Now!
          </h3>
          <Formik
            enableReinitialize
            initialValues={user}
            validationSchema={registerValidation}
            onSubmit={() => {
              handleSignUp();
            }}
          >
            {({ errors, handleBlur, touched }) => (
              <Form>
                <Input
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Input
                  label="Email"
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Input
                  label="Confirm Password"
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm your password"
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
      <div
        className="
            flex flex-col md:flex-row 
            items-center justify-center gap-4 
            mt-4 text-base font-semibold
        "
      >
        <span className="cursor-pointer">Already Registered ?</span>
        <span className="cursor-pointer text-primary-color">Sign In</span>
      </div>
    </Container>
  );
};

export default SignUpModal;
