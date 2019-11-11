import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, first, take, takeWhile } from 'rxjs/operators'

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const subscription = fromEvent(grid, 'click')
    .pipe(
        map((evt) => [Math.floor(evt.offsetX / 50), Math.floor(evt.offsetY / 50)]),
        takeWhile(([col, row]) => col > 3)
    ).subscribe((evt) => displayLog(evt));

    /** end coding */
}