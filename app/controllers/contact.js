import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { match, not, gte } from '@ember/object/computed';

export default Controller.extend({
  emailAddress: computed('model', function() {
    return this.get('model').email;
  }),
  message: computed('model', function() {
    return this.get('model').message;
  }),
  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: gte('message.length', 5),
  isDisabled: not('isValidEmail') && not('isValidMessage'),

  actions: {

    sendMessage() {
      this.set('responseMessage', 'We got your message and we’ll get in touch soon');
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
