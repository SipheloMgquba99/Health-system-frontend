import { Link } from 'react-router-dom';
import { BsHeartHalf } from 'react-icons/bs';
import '../style.css';

function Register() {
    return (
        <div className='register template d-flex flex-column align-items-start justify-content-start vh-100 form'>
            <div className="logo-container mb-4 ml-4 text-white">
                <BsHeartHalf className='icon_header' style={{ fontSize: '3rem', marginLeft: '20px', marginTop: '20px' }} />
                <span style={{ fontSize: '1.5rem', marginTop: '10px', marginLeft: '10px' }} className='m-2'>Health Center</span>
            </div>
            <div className="form_container p-5 rounded bg-white mx-auto">
                <form>
                    <h3 className="text-center">Sign Up</h3>
                    <div className="mb-2">
                        <label htmlFor="firstName">First Name</label>
                        <input type="firstname"  className="form-control" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="lastname" className="form-control" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="confirmPassword" className="form-control" required />
                    </div>
                    <div className="d-grid">
                        <button className="form p-1 rounded text-white">Sign Up</button>
                    </div>
                    <p className="text-end mt-2">Already Registered<Link to="./Login.tsx" className='ms-2'>Sign In</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Register;

