import { Link } from "react-router-dom"

// Editor 역할을 가진 사용자만 접근
// Link 컴포넌트를 사용하여 홈 페이지로의 링크를 제공
const Editor = () => {
    return (
        <section>
            <h1>Editors Page</h1>
            <br />
            <p>You must have been assigned an Editor role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Editor