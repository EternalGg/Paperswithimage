function rank() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        76444
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "data/data.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    sort('tip')
}

function sort(type) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "data/data.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    lenth = xmlDoc.getElementsByTagName('name').length;
    temp = 0;
    arr = new Array();
    r_arr = new Array();
    for (var i = 0; i <= lenth - 1; i++) {
        arr[i] = new Array();
        for (var j = 0; j < 1; j++) {
            arr[i][j] = xmlDoc.getElementsByTagName(type)[i].childNodes[0].nodeValue;
        }
    }

}

function maopao(arr) {
    console.log(arr);
    // for (var j = 0; j <lenth-1; j++) {
    //     r_arr[j] = new Array();
    //     for (var i = lenth-j-1; i > 0 ; i--) {
    //
    //         if (arr[j][0] >= arr[i][0]) {
    //             console.log('da');
    //             r_arr[j][0] = arr[j][0];
    //             console.log(arr[j][0],arr[i][0]);
    //         } else {
    //             console.log('xiao');
    //             temp = arr[j][0];
    //             r_arr[j][0] = arr[i][0];
    //             arr[i][0] = temp;
    //         }
    //     }
    //     console.log(r_arr)
    // }
}
