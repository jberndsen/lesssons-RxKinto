var Rx = require('rxjs/Rx');

var background$ = Rx.Observable.interval(60000);

background$.subscribe(e => {
    document.body.style.backgroundImage = `url('https://unsplash.it/1280/720/?random&gen=${e}')`;
  }
);