/**
 * Created by yonathanbenitah on 1/25/16.
 */
import {Component, NgZone} from 'angular2/core';
import {Rating} from 'model/rating';

import {RatingForm} from './components/ratingForm/ratingForm';
//import {HeaderAppComponent} from 'app/components/header/header';


@Component({
    selector: 'app',
    template: '<rating-form ></rating-form><div> <ul> <li *ngFor="#party of ratings"> {{party.name}} <p>{{party.description}}</p><p>{{party.location}}</p> </li> </ul> </div>',
    directives: [RatingForm]
    //directives: [HeaderAppComponent]
})

export class AppComponent{
    ratings: Mongo.Cursor<Object>;

    constructor () {
        this.ratings = Rating.find();
    }

}