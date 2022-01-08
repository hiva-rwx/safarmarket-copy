import { ACTIVE_SIDEBAR } from "../types";
const ActiveSidebar = (state = false, action) => {
  switch (action.type) {
    case ACTIVE_SIDEBAR:
      return (state = !state);

    default:
      return state;
  }
};
export default ActiveSidebar