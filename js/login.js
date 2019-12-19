function login(account,password){
    if (account == "" && password ==""){
		alert('账号密码为空')
    }else {
            if (account == "xiyasi" && password == "xiyasi") {
                window.location.href = 'index.html';
            }else {
                alert("账号密码错误");
            }
    }
}

function register(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var second_password = document.getElementById("second_password").value;
    var emailReg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var passwordReg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/;

    if(username != "" && emailReg.test(username)){
        if(password !="" && passwordReg.test(password)){
            if(second_password==password){
                window.location.href='index.html';
            }else{
                alert("密码不一致，提交失败，请重新填写！");
                return false;
            }
        }else{
            alert("密码格式错误，提交失败，请重新填写！");
            return false;
        }
    }else{
        alert("注册的账号不符合要求，提交失败，请重新填写！");
        return false;
    }
}


