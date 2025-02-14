import { run } from "@ember/runloop";
import { modifier } from "ember-modifier";
import UIkit from "uikit";

export default modifier(
  (element, positional, named) => {
    Object.entries(named).forEach(([name, fn]) => {
      UIkit.util.on(element, name, (...args) => run(() => fn(...args)));
    });
  },
  { eager: false }
);
