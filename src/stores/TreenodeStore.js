import { EventEmitter } from 'events';
import assign from 'object-assign';

export default assign({}, EventEmitter.prototype, {});
