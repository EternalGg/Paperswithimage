function login(account,password){
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "data/account.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    length = xmlDoc.getElementsByTagName('password').length;
    if (account == "" && password ==""){
        console.log('账号或密码为空')
    }else {
        for (var i = 1;i<length+1;i++) {
            passdata = xmlDoc.getElementById(i).getElementsByTagName('password')[0].childNodes[0].nodeValue;
            undata = xmlDoc.getElementById(i).getElementsByTagName('username')[0].childNodes[0].nodeValue;
            if (account == undata && password == undata) {
                window.location.href = 'index.html' + '?0';
            }else {
                alert("账号密码错误");
            }
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
                window.location.href='index.html'+'?0';
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


