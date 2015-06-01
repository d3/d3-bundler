import {
  event,
  select,
  selectAll,
  selection
} from "d3-selection";

import {
  transition
} from "d3-transition";

import "d3-transition";

export default {
  get event() { return event; },
  select: select,
  selectAll: selectAll,
  selection: selection,
  transition: transition
};
