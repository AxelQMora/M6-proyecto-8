import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h1 className="logo">𝕏</h1>
        </div>
        
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            <span className="nav-icon">🏠</span>
            Inicio
          </Link>
          <Link 
            to="/profile" 
            className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            <span className="nav-icon">👤</span>
            Perfil
          </Link>
        </div>
        
        <div className="user-info">
          <div className="user-avatar">
            {user?.username?.charAt(0).toUpperCase()}
          </div>
          <div className="user-details">
            <span className="username">@{user?.username}</span>
            <button onClick={logout} className="logout-btn">
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>
      
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;