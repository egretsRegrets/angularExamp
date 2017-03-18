
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//uncomment to enable production mode
/*import { enableProdMode } from '@angular/core'; 
enableProdMode(); */

platformBrowserDynamic()
	.bootstrapModule(AppModule);