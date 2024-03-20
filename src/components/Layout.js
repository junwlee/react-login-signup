import { Outlet } from "react-router-dom"

// Layout 컴포넌트는 애플리케이션의 메인 레이아웃을 정의
// Outlet 컴포넌트는 자식 라우트의 컴포넌트가 렌더링될 위치를 지정
// 중첩 라우팅

const Layout = () => {
    return (
        <main className="App">
            <Outlet />
        </main>
    )
}

export default Layout