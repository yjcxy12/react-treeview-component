$(function () {
  var model = [{
    id: -1,
    text: 'parent',
    icon: 'fa fa-folder',
    state: { opened: true },
    children: Array.apply(null, Array(7000)).map((ele, index) => {
      return {
        id: index,
        text: `child_${index}`,
        icon: 'fa fa-leaf'
      };
    })
  }];

  $('#tree').jstree({
    core: {
      check_callback: true,
      data: model
    }
  });

});