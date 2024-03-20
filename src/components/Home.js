import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from '../api/axios.js';

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    // const logout = async () => {
    //     try {
    //         // axios를 사용하여 서버의 /logout 엔드포인트에 POST 요청
    //         await axios.post('/logout');
    //         // console.error();
    //         // 로그아웃 성공 후, 사용자 인증 상태를 초기화
    //         setAuth({});
    //         // 로그아웃 처리가 완료되면, 사용자를 링크 페이지로 이동
    //         navigate('/linkpage');
    //     } catch (error) {
    //         // 오류 처리
    //         console.error('Logout failed', error);
    //     }
    // }

    const logout = async () => {
        // if used in more components, this should be in context
        // axios to /logout endpoint
        setAuth({});
        navigate('/linkpage');
    }


    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/lounge">Go to the Lounge</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home
