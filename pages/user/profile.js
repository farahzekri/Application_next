import { useSession } from "next-auth/react";
import { useRouter } from "next/router"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const UserProfile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Chargement...</p>;
  }

  if (!session) {
    return <p>Vous n etes pas connecte.</p>;
  }

  const { name, email } = session.user;
  const firstname = name?.split(' ')[0] || '';
  const lastname = name?.split(' ')[1] || '';

  const handleEditClick = () => {
    router.push('/user/edit-profile');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: 'linear-gradient(135deg, #6e8efb, #a777e3)' }}>
      <div className="card shadow-lg p-5" style={{ width: '500px', borderRadius: '15px', backgroundColor: '#fff' }}>
        <div className="card-body text-center">
          <h1 className="mb-4" style={{ color: '#6e8efb' }}>Profil utilisateur</h1>
          
          <div className="mb-3">
            <p><strong>Nom :</strong> {lastname}</p>
            <p><strong>Prénom :</strong> {firstname}</p>
            <p><strong>Email :</strong> {email}</p>
          </div>

          <button className="btn btn-outline-primary w-100 mt-4" onClick={handleEditClick} style={{ borderRadius: '25px' }}>
            <i className="bi bi-pencil me-2"></i> {/* Edit Icon */}
            Modifier le profil
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
