import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

// AuthContext를 사용하여 인증 상태를 조회하는 커스텀 훅
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;