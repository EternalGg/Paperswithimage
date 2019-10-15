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
        for (var i = 1;i<length+1;i++){
            passdata = xmlDoc.getElementById(i).getElementsByTagName('password')[0].childNodes[0].nodeValue;
            undata = xmlDoc.getElementById(i).getElementsByTagName('username')[0].childNodes[0].nodeValue;

            if (account == undata && password ==undata){
                window.location.href='index.html'+'?0';
            }else {
                alert('密码错误或未注册！')
            }
        }
    }
}
function register(account,password){
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
        window.location.href='index.html'+'?0';
    }
}

