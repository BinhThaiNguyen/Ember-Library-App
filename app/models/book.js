import { empty } from '@ember/object/computed';
import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({

  title: DS.attr('string'),
  releaseYear: DS.attr('date'),

  author: DS.belongsTo('author', { inverse: 'books', async: true }),
  library: DS.belongsTo('library', { inverse: 'books', async: true }),

  sNotValid: empty('title'),

  randomize(author, library) {
    this.set('title', this._bookTitle());
    this.set('author', author);
    this.set('releaseYear', this._randomYear());
    this.set('library', library);

    return this;
  },

  _bookTitle() {
    return `${Faker.commerce.productName()} For Dummy`;
  },

  _randomYear() {
    return new Date(this._getRandomArbitrary(1900, 2019).toPrecision(4));
  },

  _getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
});
