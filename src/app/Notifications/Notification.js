import * as _ from 'lodash';
export const MANRILL = 'manrill';

export class Notification {
  setNotifiable(notifiable) {
    this.notifiable = notifiable;
  }

  async executeManrillTask() {
    this.toMandrill(this.notifiable).sendTemplate();
  }

  messageTransform(message) {
    const data = {
      default: JSON.stringify({
        data: {
          message: {
            title: message.title,
            body: message.body
          },
          meta: message.meta
        }
      }),
      APNS_SANDBOX: JSON.stringify({
        aps: {
          alert: {
            title: message.title,
            body: message.body
          },
          sound: 'default',
          badge: 1
        },
        meta: message.meta
      }),
      APNS: JSON.stringify({
        aps: {
          alert: {
            title: message.title,
            body: message.body
          },
          sound: 'default',
          badge: 1
        },
        meta: message.meta
      }),
      GCM: JSON.stringify({
        data: {
          meta: message.meta
        },
        notification: {
          title: message.title,
          body: message.body
        },
        priority: 'high',
        sound: 'default',
        badge: 1
      })
    };

    return JSON.stringify(data);
  }

  execute() {
    this.executeManrillTask();
  }
}
