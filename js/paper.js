function showdetail() {
    second = window.location.search.split("?");
    type = window.location.search;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "../data/data.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    lenth = xmlDoc.getElementsByTagName('name').length;
    console.log(xmlDoc.getElementById(second[2]).getElementsByTagName('image')[0].childNodes[0].nodeValue);
    document.getElementById("ptitle").innerText=xmlDoc.getElementById(second[2]).getElementsByTagName('name')[0].childNodes[0].nodeValue;
    document.getElementById("panother").innerText="author:"+xmlDoc.getElementById(second[2]).getElementsByTagName('anthor')[0].childNodes[0].nodeValue;
    document.getElementById("ptime").innerText=xmlDoc.getElementById(second[2]).getElementsByTagName('time')[0].childNodes[0].nodeValue;



}