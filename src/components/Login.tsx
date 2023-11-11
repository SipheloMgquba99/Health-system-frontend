
import { Link } from 'react-router-dom';
import { BsHeartHalf } from 'react-icons/bs';
import '../style.css';

function Login() {
  return (
    <div className='login template d-flex flex-column align-items-start justify-content-start vh-100 form'>
      <div className="logo-container mb-4 ml-4 text-white">
        <BsHeartHalf className='icon_header' style={{ fontSize: '3rem', marginLeft:'20px', marginTop: '20px' }} />
        <span style={{ fontSize: '1.5rem', marginLeft: '10px', marginTop: '10px' }}>Health Center</span>
      </div>
      <div className="form_container p-5 rounded bg-white mx-auto">
        <form>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="email" required className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" required className="form-control" />
          </div>
          <div className="mb-2">
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label ms-2">Remember me</label>
          </div>
          <div className="d-grid">
            <button className="form text-white p-1 rounded">
              Sign In
            </button>
          </div>
          <p className="text-end mt-2">Forgot <a href="">Password?</a><Link to="./Register.tsx" className='ms-2'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;


