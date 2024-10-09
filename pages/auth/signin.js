import { signIn } from "next-auth/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const SignIn = () => {


 

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: 'linear-gradient(135deg, #6e8efb, #a777e3)' }}>
      <div className="card shadow-lg p-4" style={{ width: '400px', borderRadius: '12px' }}>
        <div className="card-body text-center">
          <h1 className="mb-4" style={{ color: '#6e8efb' }}>Connexion</h1>
          <button style={{ borderRadius: '25px' }} className="btn btn-outline-primary btn-lg w-100 d-flex align-items-center justify-content-center" onClick={() => signIn("google")}>
            <i className="bi bi-google me-2"></i> 
            Se connecter avec Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;