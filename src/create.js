import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
    const hello = Observable.create(function(observer){
        observer.next('Hello');
        setTimeout(() => {
            observer.next('World');
            observer.complete();
        }, 2000);
    })

    const oberser = {
        next: evt => displayLog(evt),
        error: err => console.error('[ERROR] - ', err),
        complete: () => displayLog('[DONE]')
    }

    const subscribe = hello.subscribe(oberser);
    const subscribe2 = hello.subscribe(oberser);
    subscribe.unsubscribe();
}