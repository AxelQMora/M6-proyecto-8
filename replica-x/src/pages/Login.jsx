import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!username.trim()) {
        throw new Error("El nombre de usuario es requerido");
      }
      
      if (username.trim().length < 3) {
        throw new Error("El nombre de usuario debe tener al menos 3 caracteres");
      }

      login(username);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-logo">𝕏</h1>
          <h2 className="login-title">Inicia sesión en X</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`form-input ${error ? 'error' : ''}`}
              disabled={loading}
              autoComplete="username"
            />
          </div>
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <button 
            type="submit" 
            className="login-button"
            disabled={loading || !username.trim()}
          >
            {loading ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </form>
        
        <div className="login-footer">
          <p className="login-hint">
            Ingresa cualquier nombre de usuario para continuar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;