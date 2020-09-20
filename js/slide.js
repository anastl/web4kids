function clickJumbor() {

    var current = document.getElementById('shown');
    var pics = document.getElementsByClassName('pic');
    var next = 0;

    for (var i=0; i<pics.length; i++){
        if (current.src == pics[i].src){
            next = i;
            break;
        }
    }

    if ( next+1 == pics.length ){
        document.getElementById('shown').src = pics[0].src;
    }
    else {
        document.getElementById('shown').src = pics[i+1].src;
    }
    
}

function clickJumbol() {

    var current = document.getElementById('shown');
    var pics = document.getElementsByClassName('pic');
    var next = 0;

    for (var i=0; i<pics.length; i++){
        if (current.src == pics[i].src){
            next = i;
            break;
        }
    }

    if ( next-1 == -1 ){
        document.getElementById('shown').src = pics[pics.length-1].src;
    }
    else {
        document.getElementById('shown').src = pics[next-1].src;
    }
    
}
