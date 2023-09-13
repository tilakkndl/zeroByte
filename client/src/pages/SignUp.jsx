import Copyright from '../components/footer/Copyright';
import Navbar from '../components/navbar/Navbar';

const SignUp = () => {
  return (
    <div>
      <Navbar secondary signUp />
      <div className="fixed bottom-0 w-full">
        <Copyright />
      </div>
    </div>
  );
};

export default SignUp;
