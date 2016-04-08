import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { TabularTables } from 'meteor/aldeed:tabular';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  this.color = new ReactiveVar('');
  this.align = new ReactiveVar('');
});

Template.hello.helpers({
  getclass() {
    return `${Template.instance().color.get()} ${Template.instance().align.get()}`;
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
