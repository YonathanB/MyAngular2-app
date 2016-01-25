/**
 * Created by yonathanbenitah on 1/25/16.
 */
import {bootstrap}    from 'angular2/platform/browser';

//import {bootstrap} from 'angular2/bootstrap';
//import {HTTP_PROVIDERS} from 'angular2/http';
//import {DROPDOWN_DIRECTIVES} from 'angular2/bootstrap';
import {AppComponent} from './app.component';
import 'rxjs/add/operator/map'; // needed to include the .map function when http


//, [HTTP_PROVIDERS, WorkspaceService]
bootstrap(AppComponent);