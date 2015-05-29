import {event, select, selectAll} from "d3-selection";
import "d3-selection-multi";

export default {
  get event() { return event; },
  select: select,
  selectAll: selectAll
};
