import { Component } from '@angular/core';
import { WgPageHeader  }  from './forms/components/common/wgpageheader/wgpageheader';
import { WgPageFooter  }  from './forms/components/common/wgpagefooter/wgpagefooter';
import { WgInputCheckbox  }  from './core/components/wginputcheckbox/wginputcheckbox';
import './less/gui.less';


@Component({
	selector:'my-app',
	template:`
	<div class="wrapper">
		<div class="header-view-container" >
			<wg-page-header> </wg-page-header>
			<h1>hello</h1>
			<wg-input-checkbox> </wg-input-checkbox>
			<button type="button" class="btn btn-primary">Primary button</button>
		</div>
	<wg-page-footer> </wg-page-footer>

	</div>

	
	
	`
	
	
})
export class AppComponent {

}