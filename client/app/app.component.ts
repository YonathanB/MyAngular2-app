/**
 * Created by yonathanbenitah on 1/25/16.
 */
import {Component, NgZone} from 'angular2/core';
import {Rating} from 'model/rating';
//import {HeaderAppComponent} from 'app/components/header/header';


@Component({
    selector: 'app',
    template: '<div style="margin-top: 100px"> <ul> <li *ngFor="#party of ratings"> {{party.name}} <p>{{party.description}}</p><p>{{party.location}}</p> </li> </ul> </div>'
    //directives: [HeaderAppComponent]
})

export class AppComponent{
    ratings: Array<Object>;

    constructor (zone: NgZone) {
        Tracker.autorun(() => zone.run(() => {
            this.ratings = Rating.find().fetch();
        }));
    }
}

