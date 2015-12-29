function _generateState(nodeModel, returnModel, structure) {
  returnModel[nodeModel.id] = {
    text: nodeModel.text,
    icon: nodeModel.icon,
    initialState: nodeModel.initialState
  };

  structure.children.push({
    id: nodeModel.id,
    children: []
  });

  if (nodeModel.children && nodeModel.children.length > 0) {
    nodeModel.children.forEach((childModel) => {
      _generateState(childModel, returnModel, structure.children[structure.children.length - 1]);
    });
  }
}

export function generateState(initialModel) {
  let returnModel = {};
  let structure = {
    id: '#',
    children: []
  };
  returnModel['#'] = {
    text: '',
    icon: '',
    initialState: { opened: true }
  };
  initialModel.forEach((nodeModel) => {
    _generateState(nodeModel, returnModel, structure);
  });

  return {
    model: returnModel,
    structure
  };
}
