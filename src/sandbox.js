import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { mapTo, map, filter } from 'rxjs/operators'

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const subscription = fromEvent(grid, 'click')
    .pipe(
        map((evt) => [Math.floor(evt.offsetX / 50), Math.floor(evt.offsetY / 50)]),
        filter((val) => (val[0] + val[1]) % 2 !== 0)
    ).subscribe((evt) => console.log(evt));

    /** end coding */
}