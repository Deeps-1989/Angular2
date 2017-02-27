
import { Component } from '@angular/core';

@Component({
	selector: 'wg-page-footer',
	templateUrl: './wgpagefooter.html',
	styleUrls: ['./wgpagefooter.less']
})
export class WgPageFooter {

	public todaysDate:Date 
	constructor() {
		this.todaysDate = new Date();
	}
}


