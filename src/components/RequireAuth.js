import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// 자식 컴포넌트에 대한 접근을 제한하는 라우팅 가드
// 허용된 역할을 가진 사용자만 자식 라우트에 접근
const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;

// RequireAuth는 부모 컴포넌트
// RequireAuth 컴포넌트는 자식 라우트(예: Home, Editor, Admin, Lounge 등 페이지 컴포넌트)에 대한 접근을 제어하는 wrapper 역할
// RequireAuth 컴포넌트 내에서, 사용자의 역할이 allowedRoles 배열에 정의된 역할 중 하나와 일치하는지를 검사하여,
// 조건을 만족하는 사용자에게만 자식 라우트로의 접근을 허용