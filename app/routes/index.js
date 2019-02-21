import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('invitation');
  },

  actions: {

    saveInvitation(newInvitation) {
      newInvitation.save().then(response => {
        this.controller.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.controller.model.set('email', '');
      });
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
