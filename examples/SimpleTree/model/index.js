export default [
  {
    id: 1,
    text: 'node1',
    icon: 'fa fa-leaf',
    initialState: { opened: false }
  },
  {
    id: 2,
    text: 'node2',
    icon: 'fa fa-folder',
    initialState: { opened: false },
    children: [
      {
        id: 4,
        text: 'node4',
        icon: 'fa fa-folder',
        initialState: { opened: false },
        children: [
          {
            id: 5,
            text: 'node5',
            icon: 'fa fa-leaf',
            initialState: { opened: false }
          },
          {
            id: 6,
            text: 'node6',
            icon: 'fa fa-folder',
            initialState: { opened: true },
            children: [
              {
                id: 7,
                text: 'node7',
                icon: 'fa fa-leaf',
                initialState: { opened: true }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    text: 'node3',
    icon: 'fa fa-folder',
    initialState: { opened: true },
    children: [
      {
        id: 8,
        text: 'node8',
        icon: 'fa fa-folder',
        initialState: { opened: false },
        children: [
          {
            id: 9,
            text: 'node9',
            icon: 'fa fa-folder',
            initialState: { opened: false },
            children: [
              {
                id: 11,
                text: 'node11',
                icon: 'fa fa-leaf',
                initialState: { opened: true }
              }
            ]
          },
          {
            id: 10,
            text: 'node10',
            icon: 'fa fa-leaf',
            initialState: { opened: true }
          }
        ]
      }
    ]
  }
];
