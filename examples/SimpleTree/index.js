import React from 'react';
import { render } from 'react-dom';
import { Treeview } from '../../lib';

const model = [
  {
    id: 1,
    text: 'node1',
    icon: 'icon',
    initialState: { opened: false }
  },
  {
    id: 2,
    text: 'node2',
    icon: 'icon',
    initialState: { opened: false },
    children: [
      {
        id: 4,
        text: 'node4',
        initialState: { opened: false }
      }
    ]
  },
  {
    id: 3,
    text: 'node3',
    icon: 'icon',
    initialState: { opened: true }
  }
];

render(<Treeview initialModel={ model }/>, document.getElementById('tree'));
