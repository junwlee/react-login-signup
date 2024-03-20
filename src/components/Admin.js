import { Link } from "react-router-dom"

// Admin 역할을 가진 사용자만 접근
// Link 컴포넌트를 사용하여 홈 페이지로의 링크를 제공

const Admin = () => {
    return (
        <section>
            <h1>Admins Page</h1>
            <br />
            <p>You must have been assigned an Admin role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Admin