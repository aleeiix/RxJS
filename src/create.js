import { displayLog } from './utils';
import { of } from 'rxjs';

export default () => {
    const source = of(1, 2, 3, 4, 5, 6);
    const source2 = of(
        [1, 2, 3],
        'Hello World',
        {foo: 'bar'},
        function sayHello() {
            return 'Hi';
        }
    );
    const subscription = source2.subscribe(res => displayLog(res));
}