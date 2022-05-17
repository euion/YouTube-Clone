const { User } = require("../models/User");

let auth = (req, res, next) => {
    
    //인증 처리 수행
    // 클라이언트 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth;
    //토큰을 복호화 한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true })
        
        req.token = token; // request에 token을 넣어줌으로서 유저와 토큰 정보를 가질 수 있음
        req.user = user;
        next();
    })
    //유저가 있으면 인증 Okay

    // 유저가 없으면 인증 No

}

module.exports = { auth };