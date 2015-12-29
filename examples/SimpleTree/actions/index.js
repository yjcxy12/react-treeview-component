import { CHANGE_NODE_NAME } from '../constants/actionTypes';

export function changeNodeName(id, text) {
  return {
    type: CHANGE_NODE_NAME,
    id,
    text
  };
}
