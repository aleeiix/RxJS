import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, first, take, takeWhile, last, takeLast, skip, reduce, scan, tap, startWith, endWith } from 'rxjs/operators'

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const subscription = fromEvent(grid, 'click')
    .pipe(
        map((evt) => [Math.floor(evt.offsetX / 50), Math.floor(evt.offsetY / 50)]),
        takeWhile(([col, row]) => col !== 0),
        tap((val) => console.log(val)),
        startWith('Hola', 'Adios'),
        endWith('Adios', 'A tu casa')
    ).subscribe((data) => displayLog(data));

    /** end coding */
}