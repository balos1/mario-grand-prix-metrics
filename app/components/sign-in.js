import Ember from 'ember';

const {
    Component,
    get
} = Ember;

export default Component.extend({
    actions: {
        signIn(provider) {
            get(this, 'signIn')(provider);
        }
    }
});
