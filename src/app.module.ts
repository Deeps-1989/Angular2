import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule   }  from '@angular/forms';
import { AppComponent  }  from './app/appComponent';
import { WgPageHeader  }  from './app/forms/components/common/wgpageheader/wgpageheader';
import { WgPageFooter  }  from './app/forms/components/common/wgpagefooter/wgpagefooter';
import { WgInputCheckbox }from './app/core/components/wginputcheckbox/wginputcheckbox';
import { NgModule } from '@angular/core';
@NgModule({
	imports:      [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, WgPageHeader, WgPageFooter, WgInputCheckbox ],
	bootstrap:    [ AppComponent  ]

})

export class AppModule { }