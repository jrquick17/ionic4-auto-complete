import {Injectable} from '@angular/core';

import {AutoCompleteService} from 'ionic4-auto-complete';

import {SegmentModel} from '../models/segment.model';

@Injectable()
export class SegmentService implements AutoCompleteService {
    labelAttribute = 'label';

    public segments:SegmentModel[] = [
        {
            key:   'simple-service',
            label: 'Basic'
        },
        {
            key:   'ingredients',
            label: 'Ingredients'
        },
        {
            key:   'team-picker',
            label: 'Pick Teams'
        },
        {
            key:   'country-picker',
            label: 'Pick Countries'
        }
    ];

    constructor() {

    }

    getAll():SegmentModel[] {
        return this.segments;
    }

    getResults(keyword?:string):SegmentModel[] {
        if (typeof keyword !== 'undefined') {
            keyword = '';
        }

        keyword = keyword.toLowerCase();

        return this.segments.filter(
            (object) => {
                const value = object[this.labelAttribute].toLowerCase();

                return value.includes(keyword);
            }
        );
    }
}
