function creat_row() {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "data/data.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    lenth = xmlDoc.getElementsByTagName('name').length;
    for (var i = 1; i < lenth; i++) {
        var newDiv = document.createElement("div");
        newDiv.className="row";
        newDiv.innerHTML = '<ul class="row_img">'+
            '<div class="p_div">'+
            '<img class="picture" src="data/'+xmlDoc.getElementById(i).getElementsByTagName('image')[0].childNodes[0].nodeValue+'">'+
            '</div>'+
            '</ul>' +
            '<ul class="row_detail">'+
            '<ul>'+
            '<a class="title">'+xmlDoc.getElementById(i).getElementsByTagName('name')[0].childNodes[0].nodeValue+'</a>'+
            '<div class="complexity">'+xmlDoc.getElementById(i).getElementsByTagName('time')[0].childNodes[0].nodeValue+'</div>'+
            '<div class="detail">' +xmlDoc.getElementById(i).getElementsByTagName('detail')[0].childNodes[0].nodeValue+
            '</div>' +
            '<div class="target">'+
            '<a class="task">'+xmlDoc.getElementById(i).getElementsByTagName('task1')[0].childNodes[0].nodeValue+'</a>'+
            '<a class="task">'+xmlDoc.getElementById(i).getElementsByTagName('task2')[0].childNodes[0].nodeValue+'</a>'+
            '</div>'+
            '</ul>'+
            '</ul>'+
        '<ul class="row_performance">' +
            '<div class="gdiv" ><a class="github" href="'+ xmlDoc.getElementById(i).getElementsByTagName('git_hub')[0].childNodes[0].nodeValue+'">code</a></div>' +
            '<div class="pdiv" ><a class="paper" href="'+ xmlDoc.getElementById(i).getElementsByTagName('pdf')[0].childNodes[0].nodeValue+'">paper</a></div>' +
            '</ul>';
        document.getElementById("mid_center").appendChild(newDiv);
    }
}

function changetype(type,clas) {
    document.getElementById('state').innerHTML = type;
    if (clas=='new'){
        document.getElementById('new').style.cssText = "color:Green;";
        document.getElementById('trend').style.cssText = "color:Black;";
        document.getElementById('porp').style.cssText = "color:Black;";
    }
    if (clas=='trend'){
        document.getElementById('new').style.cssText = "color:Black;";
        document.getElementById('trend').style.cssText = "color:Green;";
        document.getElementById('porp').style.cssText = "color:Black;";
    }
    if (clas=='porp'){
        document.getElementById('new').style.cssText = "color:Black;";
        document.getElementById('trend').style.cssText = "color:Black;";
        document.getElementById('porp').style.cssText = "color:Green;";
    }
}

function showkid(fid,kid) {
    if (fid=='fcv'){
        document.getElementById('fcv').style.cssText = "color:Green;";
        document.getElementById('fnlp').style.cssText = "color:Black;";
        document.getElementById('frl').style.cssText = "color:Black;";
        document.getElementById('fMedical').style.cssText = "color:Black;";
        document.getElementById('frobot').style.cssText = "color:Black;";
        document.getElementById('CV').style.display = 'inline';
        document.getElementById('NLP').style.display = 'none';
        document.getElementById('RL').style.display = 'none';
        document.getElementById('Medical').style.display = 'none';
        document.getElementById('robot').style.display = 'none';

    }
    if (fid=='fnlp'){
        document.getElementById('fcv').style.cssText = "color:Black;";
        document.getElementById('fnlp').style.cssText = "color:Green;";
        document.getElementById('frl').style.cssText = "color:Black;";
        document.getElementById('fMedical').style.cssText = "color:Black;";
        document.getElementById('frobot').style.cssText = "color:Black;";
        document.getElementById('CV').style.display = 'none';
        document.getElementById('NLP').style.display = 'inline';
        document.getElementById('RL').style.display = 'none';
        document.getElementById('Medical').style.display = 'none';
        document.getElementById('robot').style.display = 'none';
    }
    if (fid=='frl'){
        document.getElementById('fcv').style.cssText = "color:Black;";
        document.getElementById('fnlp').style.cssText = "color:Black;";
        document.getElementById('frl').style.cssText = "color:Green;";
        document.getElementById('fMedical').style.cssText = "color:Black;";
        document.getElementById('frobot').style.cssText = "color:Black;";
        document.getElementById('CV').style.display = 'none';
        document.getElementById('NLP').style.display = 'none';
        document.getElementById('RL').style.display = 'inline';
        document.getElementById('Medical').style.display = 'none';
        document.getElementById('robot').style.display = 'none';
    }
    if (fid=='fMedical'){
        document.getElementById('fcv').style.cssText = "color:Black;";
        document.getElementById('fnlp').style.cssText = "color:Black;";
        document.getElementById('frl').style.cssText = "color:Black;";
        document.getElementById('fMedical').style.cssText = "color:Green;";
        document.getElementById('frobot').style.cssText = "color:Black;";
        document.getElementById('CV').style.display = 'none';
        document.getElementById('NLP').style.display = 'none';
        document.getElementById('RL').style.display = 'none';
        document.getElementById('Medical').style.display = 'inline';
        document.getElementById('robot').style.display = 'none';
    }
    if (fid=='frobot'){
        document.getElementById('fcv').style.cssText = "color:Black;";
        document.getElementById('fnlp').style.cssText = "color:Black;";
        document.getElementById('frl').style.cssText = "color:Black;";
        document.getElementById('fMedical').style.cssText = "color:Black;";
        document.getElementById('frobot').style.cssText = "color:Green;";
        document.getElementById('CV').style.display = 'none';
        document.getElementById('NLP').style.display = 'none';
        document.getElementById('RL').style.display = 'none';
        document.getElementById('Medical').style.display = 'none';
        document.getElementById('robot').style.display = 'inline';
    }
}

function log() {
    var value = prompt('输入你的名字：', '');
    var massage = prompt('密码：','');
    if (value == null) {
        alert('你取消了输入！');
    } else if (value == '' || massage=='') {
        alert('姓名或密码输入为空，请重新输入！');
        show_prompt();
    } else {
        alert('你好，' + value);
        document.getElementById('login').style.display = 'none';
        document.getElementById('report').style.display = 'inline';
    }
}

function report() {
    var value = prompt('哪里出了问题？：', '');
    if (value!==null){
        alert('tank u')
    }
}