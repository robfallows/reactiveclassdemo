import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.color = new ReactiveVar('');
  this.align = new ReactiveVar('');
});

Template.hello.helpers({
  getcolor() {
    return Template.instance().color.get();
  },
  getalign() {
    return Template.instance().align.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    if (event.currentTarget.className === 'color') {
      instance.color.set(event.currentTarget.dataset.value);
    } else {
      instance.align.set(event.currentTarget.dataset.value);
    }
  },
});
