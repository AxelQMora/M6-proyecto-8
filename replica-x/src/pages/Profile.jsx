import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="page-title">Perfil</h1>
      </div>
      
      <div className="profile-content">
        <div className="profile-banner">
          <div className="profile-avatar-large">
            {user?.username?.charAt(0).toUpperCase()}
          </div>
        </div>
        
        <div className="profile-info">
          <div className="profile-names">
            <h2 className="display-name">{user?.username}</h2>
            <span className="username">@{user?.username}</span>
          </div>
          
          <div className="profile-bio">
            <p>¡Hola! Soy nuevo en X. 👋</p>
          </div>
          
          <div className="profile-meta">
            <span className="join-date">
              📅 Se unió en {user?.joinedAt ? formatDate(user.joinedAt) : 'Fecha desconocida'}
            </span>
          </div>
          
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-number">0</span>
              <span className="stat-label">Siguiendo</span>
            </div>
            <div className="stat">
              <span className="stat-number">0</span>
              <span className="stat-label">Seguidores</span>
            </div>
            <div className="stat">
              <span className="stat-number">0</span>
              <span className="stat-label">Tweets</span>
            </div>
          </div>
        </div>
        
        <div className="profile-tabs">
          <div className="tab active">
            Tweets
          </div>
          <div className="tab">
            Respuestas
          </div>
          <div className="tab">
            Me gusta
          </div>
        </div>
        
        <div className="profile-tweets">
          <div className="empty-state">
            <h3>Aún no hay tweets</h3>
            <p>Cuando publiques tweets, aparecerán aquí.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;