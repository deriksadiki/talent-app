import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { FirebaseProvider} from '../providers/firebase/firebase';
platformBrowserDynamic().bootstrapModule(AppModule);
