
class AuthService{

    setTokensLocal(token){
       window.localStorage.setItem("token", JSON.stringify(token));
    }
    
    getTokensLocal(){
       return JSON.parse(window.localStorage.getItem("token"));
    }

    setLog(islog){
        window.localStorage.setItem("isLog", islog);
    }

    getLog(){
        return JSON.parse(window.localStorage.getItem("isLog"));
    }
    
}
export default new AuthService();