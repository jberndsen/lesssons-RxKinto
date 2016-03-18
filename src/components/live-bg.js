const Rx = require('rxjs/Rx');

const background$ = Rx.Observable.interval(5000);

background$
    .startWith(0)
    .subscribe(e => {
    let mainElement = document.getElementById('main');
    mainElement.innerText = e;
  }
);