import { Link } from "react-router-dom"

// 사용자가 요청한 페이지가 존재하지 않을 때 보여주는 404 에러 페이지
const Missing = () => {
    return (
        <article style={{ padding: "100px" }}>
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <div className="flexGrow">
                <Link to="/">Visit Our Homepage</Link>
            </div>
        </article>
    )
}

export default Missing