function clickJumbor() {

    var current = document.getElementById('content-see');
    var pics = document.getElementsByClassName('content-hid');
    var next = 0;

    for (var i=0; i<pics.length; i++){
        if (current.src == pics[i].src){
            next = i;
            break;
        }
    }

    if ( next+1 == pics.length ){
        document.getElementById('content-see').src = pics[0].src;
    }
    else {
        document.getElementById('content-see').src = pics[i+1].src;
    }
    
}

function clickJumbol() {

    var current = document.getElementById('content-see');
    var pics = document.getElementsByClassName('content-hid');
    var next = 0;

    for (var i=0; i<pics.length; i++){
        if (current.src == pics[i].src){
            next = i;
            break;
        }
    }

    if ( next-1 == -1 ){
        document.getElementById('content-see').src = pics[pics.length-1].src;
    }
    else {
        document.getElementById('content-see').src = pics[next-1].src;
    }
    
}
