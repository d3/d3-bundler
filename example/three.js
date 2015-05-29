import {event, select, selectAll} from "d3-selection";
import {ease} from "d3-transition";

export default {
  get event() { return event; },
  ease: ease,
  select: select,
  selectAll: selectAll
};
