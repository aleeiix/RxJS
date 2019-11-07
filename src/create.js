import { displayLog } from './utils';
import { fromEvent} from 'rxjs';

export default () => {
    const actionBtn = document.getElementById('action-btn');
    const source = fromEvent(actionBtn, 'click');
    source.subscribe((evt) => {
        displayLog(`Click event at pos (${evt.x}, ${evt.y})`)
    })

    fromEvent(document, 'mousemove').subscribe((evt) => console.log(evt))
}