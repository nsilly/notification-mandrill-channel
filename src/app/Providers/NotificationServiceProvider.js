import { App } from '@nsilly/container';
import { ServiceProvider } from '@nsilly/support';
import MandrillService from '../Services/MandrillService';

export class NotificationServiceProvider extends ServiceProvider {
  register() {
    App.singleton('NotificationMandrillService', MandrillService);
  }
}
