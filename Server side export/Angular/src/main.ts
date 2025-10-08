import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLicense } from '@syncfusion/ej2-base';
 
// Register the Syncfusion license
registerLicense("Ngo9BigBOggjHTQxAR8/V1JFaF5cXGRCf1NpR2ZGfV5ycUVEallUTnJcUiweQnxTdEBiWX9WcHZQTmFdUkJ/XEleYg==");
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
