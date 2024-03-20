import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// AuthProvider를 사용하여 전역 인증 상태를 제공
import { AuthProvider } from './context/AuthProvider';
// BrowserRouter를 통해 라우팅을 설정
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// BrowserRouter를 사용함으로써, 애플리케이션의 최상위에 위치한 App 컴포넌트를 감싸주어,
// 애플리케이션 내의 모든 라우팅이 BrowserRouter를 통해 관리

// path="/*"는 주로 애플리케이션의 최상위에서 사용되며, 모든 경로를 해당 라우트와 그 하위 라우트로 매핑
// path="/*" 패턴을 사용하는 것은, 애플리케이션의 루트 레벨에서 정의된 라우트가 모든 하위 경로를 포함하여 처리할 수 있음을 의미
// 모든 요청을 App 컴포넌트로 라우팅하고, 그 안에서 더 세부적인 라우팅 로직(하위 라우트)을 처리하겠다는 것