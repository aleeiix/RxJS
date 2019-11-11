import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, first, take, takeWhile, last, takeLast, skip, reduce, scan } from 'rxjs/operators'

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const subscription = fromEvent(grid, 'click')
    .pipe(
        map((evt) => [Math.floor(evt.offsetX / 50), Math.floor(evt.offsetY / 50)]),
        takeWhile(([col, row]) => col !== 0),
        scan((accumulated, current) => {
            return {
                clicks: accumulated.clicks + 1,
                cells: [...accumulated.cells, current]
            }
        }, {clicks: 0, cells: []})
    ).subscribe((evt) => displayLog(`clicks: ${evt.clicks}, cells: ${JSON.stringify(evt.cells)}`));

    /** end coding */
}