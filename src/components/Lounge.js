import { Link } from "react-router-dom"

const Lounge = () => {
    return (
        <section>
            <h1>The Lounge</h1>
            <br />
            <p>Admins and Editors can hang out here.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Lounge

// App.js 파일에서 RequireAuth 컴포넌트를 사용하여 특정 역할을 가진 사용자만 Lounge 페이지에 접근할 수 있도록 설정
// 이는 RequireAuth 컴포넌트에 allowedRoles 배열을 통해 허용된 역할을 명시함으로써 구현
// 에디터와 어드민 역할이 allowedRoles 배열에 포함되어 있어야 Lounge 페이지에 접근