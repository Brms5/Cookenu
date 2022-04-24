import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useProtectedPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
}

export default useProtectedPage;
