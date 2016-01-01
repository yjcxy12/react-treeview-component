import TreenodeStore from '../stores/TreenodeStore';
import assign from 'object-assign';

export function defaultHandleArrowClick(id, nodeModel) {
  TreenodeStore.emit('node_changed_' + id, assign({}, nodeModel, {
    initialState: { opened: !nodeModel.initialState.opened }
  }));
}

export function defaultHandleIconClick() {

}

export function defaultHandleTextClick(id, nodeModel) {
  TreenodeStore.emit('node_changed_' + id, assign({}, nodeModel, {
    text: nodeModel.text + ' changed'
  }));
}
