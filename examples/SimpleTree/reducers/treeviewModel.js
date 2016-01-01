import assign from 'object-assign';
import treeModel from '../model/hugeTree';
import { convertTreeviewModel } from '../../../lib';
import { CHANGE_NODE_NAME } from '../constants/actionTypes';

const initialState = convertTreeviewModel(treeModel);

export default function treeviewModel(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NODE_NAME:
      return {
        model: assign({}, state.model, {
          [action.id]: assign({}, state.model[action.id], { text: action.text })
        }),
        structure: state.structure
      };
    default:
      return state;
  }
}
