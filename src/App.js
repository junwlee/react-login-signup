import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';

// ROLES 객체는 사용자의 역할에 따른 접근 권한을 정의
const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
}

// Routes와 Route 컴포넌트를 사용하여 애플리케이션의 라우팅을 관리
function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* 여기에 정의된 Route 컴포넌트들이 Layout 컴포넌트의 자식 라우트 */}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="linkpage" element={<LinkPage />} />
                <Route path="unauthorized" element={<Unauthorized />} />

                {/* 모든 사용자가 아닌 특정 조건을 만족하는 사용자(예: 로그인한 사용자, 특정 역할을 가진 사용자 등)만이 해당 라우트로 접근할 수 있도록 제한
                이를 위해 RequireAuth 컴포넌트 같은 접근 제어 컴포넌트를 사용하여, 인증된 사용자만이 특정 페이지를 볼 수 있도록 설정 */}
                <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                    <Route path="/" element={<Home />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
                    <Route path="editor" element={<Editor />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                    <Route path="admin" element={<Admin />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
                    <Route path="lounge" element={<Lounge />} />
                </Route>

                <Route path="*" element={<Missing />} />
                {/*path="*"는 모든 경로에 대한 와일드카드 패턴을 의미*/
                /*앞서 정의된 다른 경로들과 일치하지 않는 모든 요청에 대해 적용*/
                /*즉, 사용자가 애플리케이션에 존재하지 않는 페이지에 접근하려고 할 때 Missing 컴포넌트를 렌더링하도록 지정*/}
            </Route>
        </Routes>
    );
}

export default App;