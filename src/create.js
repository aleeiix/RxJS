import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
    const hello = Observable.create(function(observer){
        observer.next('Hello');
        setTimeout(() => {
            observer.next('World');
        }, 2000);  
    })

    const subscribe = hello.subscribe(evt => displayLog(evt));
}