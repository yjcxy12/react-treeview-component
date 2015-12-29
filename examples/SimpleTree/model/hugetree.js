const model = [{
  id: -1,
  text: 'parent',
  icon: 'fa fa-folder',
  initialState: { opened: true },
  children: Array.apply(null, Array(700)).map((ele, index) => {
    return {
      id: index,
      text: `child_${index}`,
      icon: 'fa fa-leaf',
      initialState: { opened: false }
    };
  })
}];

export default model;
