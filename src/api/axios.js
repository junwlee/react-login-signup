import axios from 'axios';

// Axios 인스턴스를 생성 : 이 인스턴스는 애플리케이션에서 HTTP 요청을 보낼 때 재사용
// baseURL은 모든 요청에서 사용될 기본 URL을 지정 : 이 주소는 백엔드 서버의 주소

export default axios.create({
    baseURL: 'http://localhost:3500'
});
