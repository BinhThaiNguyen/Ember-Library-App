//app/controllers/index.js
import Controller from '@ember/controller';
import { match } from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/)
});

