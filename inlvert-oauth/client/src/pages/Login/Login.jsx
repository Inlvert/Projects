import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // після повернення з Google у URL приходить ?token=...
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/profile");
    }
  }, []);

  const googleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      <button onClick={googleLogin}>
        Login with Google
      </button>
    </div>
  );
}
