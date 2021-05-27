import { ExampleModel } from '@demo/shared/models/Example/ExampleModel';
import { ExampleEnum } from '@demo/shared/models/Example/ExampleEnum';
import { UserTest } from '@demo/shared/models/Example/UserTest';
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
        num: ExampleEnum.Enum1.toString()
    },
    {
        Id: 2,
        Name: "Name 2",
        num: ExampleEnum.Enum2.toString()
    }
    ];


}
