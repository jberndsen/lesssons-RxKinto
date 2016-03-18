let template = require('./templates/chatlog.html');
let ChatRoom = require('../services/ChatRoom');

import Rx from 'rxjs/Rx';

var Chat = {
    init(){
        document.getElementsByClassName('chatlog')[0].innerHTML = template;

        var container = document.getElementsByClassName('log-container')[0];

        ChatRoom.onMessage().filter(message => message).subscribe(message => {
            container.innerHTML = `<div class="log-item"><span class="user">${message.user}</span><span class="timestamp">${new Date(message.date).toLocaleTimeString()}</span><span class="message">${message.message}</span></div>` + container.innerHTML;
        });

        ChatRoom.onShake()
            .skip(1)
            .subscribe((shake) => {
                let originalClass = document.getElementsByClassName('chatroom')[0].className
                document.getElementsByClassName('chatroom')[0].className += " shake-opacity";
                setTimeout(function () {
                    document.getElementsByClassName('chatroom')[0].className = originalClass;
                }, 3000);
            });

        let $input = document.getElementById('sendMessage');
        let $shaker = document.getElementById('shaker');

        Rx.Observable.fromEvent($shaker, 'click')
            .subscribe(() => {
                ChatRoom.sendShake()
            });

        $input.focus();

        Rx.Observable.fromEvent($input, 'keyup')
            .filter(event => event.keyCode === 13 && event.target.value.length)
            .subscribe(event => {
                ChatRoom.sendMessage(event.target.value);
                event.target.value = '';
            });
    }
};

module.exports = Chat;