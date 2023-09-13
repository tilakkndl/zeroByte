import Navbar from '../components/navbar/Navbar';

import Copyright from '../components/footer/Copyright';

const SignIn = () => {
  return (
    <div>
      <Navbar secondary signIn />
      <div className="fixed bottom-0 w-full">
        <Copyright />
      </div>
    </div>
  );
};

export default SignIn;
