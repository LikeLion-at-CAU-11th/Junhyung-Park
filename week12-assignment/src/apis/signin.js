import axios from "axios";


export const Signin=async (id,pw) =>{

    

    try{
        
        const result = await axios.post('http://front.cau-likelion.org/',{
            id,
            pw,
        });
        return result.data.data
    }
    catch(err){
        if (err.response.status === 401) {
            alert("비밀번호가 맞지 않습니다.");

        } else if (err.response.status === 500) {
            alert("아이디 혹은 비밀번호가 맞지 않습니다.");
        }
        
        return null;


    }



}



//            controller.abort();
// 예외처리를 위해 사용하고자 함
// API 보면 강제 종료라는데 이럴때 쓰는게 아니라 시간이 너무 오래 걸릴때 강제 종료하는 그런 느낌인듯 ?