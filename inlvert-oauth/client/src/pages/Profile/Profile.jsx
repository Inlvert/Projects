import { useEffect, useState } from "react";
import * as API from "../../api";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const token = localStorage.getItem("token");
  if (!token) navigate("/login");

  const { id } = jwtDecode(token);

  useEffect(() => {
    const load = async () => {
      const { data } = await API.getUser(id, token);
      setUser(data);
    };

    load();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ padding: 40 }}>
      <h2>Welcome, {user.name}</h2>
      <img src={user.avatar} width="120" style={{ borderRadius: "50%" }} />
      <p>{user.email}</p>
    </div>
  );
}
