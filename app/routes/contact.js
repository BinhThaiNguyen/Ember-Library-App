import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    saveContact(newContact) {
      newContact.save().then(() => this.transitionTo('admin.contacts'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }

});
