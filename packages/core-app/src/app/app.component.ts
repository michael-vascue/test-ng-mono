import { ExampleModel } from '@demo/shared/models/Example/ExampleModel';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    examples: Array<ExampleModel> = [{
        Id: 1,
        Name: "Name 1",
    },
    {
        Id: 2,
        Name: "Name 2"
    }
    ];

    constructor(){

    }


}
