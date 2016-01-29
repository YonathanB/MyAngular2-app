/**
 * Created by yonathanbenitah on 1/25/16.
 */
import {bootstrap}    from 'angular2-meteor';
import {AppComponent} from './app.component';
import {Rating} from './../model/rating';
import 'rxjs/add/operator/map'; // needed to include the .map function when http

bootstrap(AppComponent);