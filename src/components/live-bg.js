var Rx = require('rxjs/Rx');

var background$ = Rx.Observable.interval(5000);

background$.subscribe(e => {
    let mainElement = document.getElementById('main');
    mainElement.innerText = e;
  }
);