require('./styles/app.scss');
require('./components/live-bg');
require('./data/db.js');
import  {listBuckets} from './data/db.js';

const main = () => {
    listBuckets();
}

window.addEventListener("DOMContentLoaded", main);