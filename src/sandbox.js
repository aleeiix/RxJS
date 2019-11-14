import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, first, take, takeWhile, last, takeLast, skip, reduce, scan, tap, startWith, endWith, distinct, distinctUntilChanged } from 'rxjs/operators'

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const subscription = fromEvent(grid, 'click')
    .pipe(
        map((evt) => [Math.floor(evt.offsetX / 50), Math.floor(evt.offsetY / 50)]),
        takeWhile(([col, row]) => col !== 0),
        tap((val) => console.log(val)),
        distinctUntilChanged((cel1, cel2) => (cel1[0] === cel2[0]) && (cel1[1] === cel2[1]))
    ).subscribe((data) => displayLog(data));

    /** end coding */
}