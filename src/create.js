import { displayLog } from './utils';
import { interval, timer } from 'rxjs';

export default () => {
    const source = interval(500);
    const subscription = source.subscribe((data) => displayLog(data));
    timer(3000).subscribe(() => subscription.unsubscribe());

    const source2 = timer(4000, 100);
    const subscription2 = source2.subscription((data) => displayLog(`2 - ${data}`));
    timer(2000).subscribe(() => subscription2.unsubscribe());
}