import { FormsModule } from '@angular/forms';
import { Component} from '@angular/core';



@Component({
	selector: 'wg-input-checkbox',
	templateUrl: './wginputcheckbox.html'

})
export class WgInputCheckbox {

public selected:[];
public wgElementSchema:any
            constructor () {
            	this.wgElementSchema =  {
                "id": "exampleCheckbox",
                "type": "select",
                "label": "Label",
                "helpText": "",
                "value": "fuji",
                "required": true,
                "errorMap": {
                   "required": "Required error message",
                },
                "options": [
							 {
						        "label": "Granny Smith",
						        "value": "grannysmith","checked":false
						      },
						      {
						        "label": "Royal Gala",
						        "value": "royalgala",
						        "checked":false
						      },
						      {
						        "label": "Fuji",
						        "value": "fuji",
						        "checked" : false
						      }
                		]
             	};
            }
        onChange() {
        	let select = this.wgElementSchema.options.filter((x) =>  x.checked).map((x) => x.value);


        	console.log(select);
        }

}
