export const startsession = (username, token) =>{
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("token", token);
}

export const endsession = () =>{
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
}

export const getusername = () =>{
    const usernamestr = sessionStorage.getItem("username");
    if(usernamestr){
        return usernamestr;
    }else{
        return null;
    }
}

export const geturl = () =>{
    //const url = "https://shopqapi.herokuapp.com";
    const url = "http://localhost:8000";
        return url;
}

export const gettoken = () =>{
    const tokenstr = sessionStorage.getItem("token");
    if(tokenstr){
        return tokenstr;
    }else{
        return null;
    }
}