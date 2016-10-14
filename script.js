document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('red').onclick=function() {
        start('red');
    }
    document.getElementById('black').onclick=function() {
        start('black');
    }

    function start(type) {
        document.getElementById('buttons').style.display = 'none';
        var $main = document.getElementById('main');

        switch(type) {
            case 'red':
                document.getElementById('main').className = "red";
                break;
            case 'black':
                document.getElementById('main').className = "black";
                break;
        }
    }
}, false);
