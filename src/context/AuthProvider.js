import { createContext, useState } from "react";

// 인증 상태를 관리하는 컨텍스트 프로바이더입니다.
// 이를 통해 애플리케이션 전역에서 사용자 인증 상태를 관리하고 접근할 수 있습니다.

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;