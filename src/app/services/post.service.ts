import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    constructor(private http: Http){
        console.log('TEST');
    }

    //Calling API from jsonplaceholder.typicode.com
    getPost(){
        //Mapping response data received to an observable
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }
}