/**
 * Created by yonathanbenitah on 1/29/16.
 */
import {Component, View} from 'angular2/core';
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Rating} from 'model/rating';

@Component({
    selector: 'rating-form'
})
@View({
    templateUrl: '/client/app/components/ratingForm/ratingForm.html'
})
export class RatingForm {
    ratingForm: ControlGroup;

    constructor() {
        var fb = new FormBuilder();
        this.ratingForm = fb.group({
            name: [''],
            description: [''],
            location: ['']
        });
    };


    addRating(rating) {
        if (this.ratingForm.valid) {
            Rating.insert({
                name: rating.name,
                description: rating.description,
                location: rating.location
            });

            (<Control>this.ratingForm.controls['name']).updateValue('');
            (<Control>this.ratingForm.controls['description']).updateValue('');
            (<Control>this.ratingForm.controls['location']).updateValue('');
        }
    }
}