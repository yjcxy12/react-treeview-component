function _convertModel(nodeModel, returnModel, structure) {
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
      _convertModel(childModel, returnModel, structure.children[structure.children.length - 1]);
    });
  }
}

export function convertTreeviewModel(initialModel) {
  const returnModel = {};
  const structure = {
    id: '#',
    children: []
  };
  returnModel['#'] = {
    text: '',
    icon: '',
    initialState: { opened: true }
  };
  initialModel.forEach((nodeModel) => {
    _convertModel(nodeModel, returnModel, structure);
  });

  return {
    model: returnModel,
    structure
  };
}
