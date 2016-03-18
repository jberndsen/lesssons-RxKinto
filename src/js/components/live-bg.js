import Rx from 'rxjs/Rx';

const LiveBg = {
  init: function init() {
    Rx.Observable.interval(60000).subscribe(e => {
        document.getElementsByClassName('live-bg')[0].style.backgroundImage = `url('https://unsplash.it/1280/720/?random&gen=${e}')`;
      }
    );
  }
};

export default LiveBg;
