import { expect } from 'chai';
import { convertTreeviewModel } from '../../src/utils';

describe('utils/index', () => {
  describe('#convertTreeviewModel()', () => {
    it('should generate correct model and structure with one level tree model', () => {
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
          initialState: { opened: false }
        },
        {
          id: 3,
          text: 'node3',
          icon: 'icon',
          initialState: { opened: true }
        }
      ];
      expect(convertTreeviewModel(model)).to.eql({
        model: {
          1: {
            text: 'node1',
            icon: 'icon',
            initialState: { opened: false }
          },
          2: {
            text: 'node2',
            icon: 'icon',
            initialState: { opened: false }
          },
          3: {
            text: 'node3',
            icon: 'icon',
            initialState: { opened: true }
          },
          '#': {
            text: '',
            icon: '',
            initialState: { opened: true }
          }
        },
        structure: {
          id: '#',
          children: [
            { id: 1, children: [] },
            { id: 2, children: [] },
            { id: 3, children: [] }
          ]
        }
      });
    });

    it('should generate correct model and structure with two level tree model', () => {
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
              icon: 'icon',
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
      expect(convertTreeviewModel(model)).to.eql({
        model: {
          1: {
            text: 'node1',
            icon: 'icon',
            initialState: { opened: false }
          },
          2: {
            text: 'node2',
            icon: 'icon',
            initialState: { opened: false }
          },
          4: {
            text: 'node4',
            icon: 'icon',
            initialState: { opened: false }
          },
          3: {
            text: 'node3',
            icon: 'icon',
            initialState: { opened: true }
          },
          '#': {
            text: '',
            icon: '',
            initialState: { opened: true }
          }
        },
        structure: {
          id: '#',
          children: [
            { id: 1, children: [] },
            { id: 2, children: [{ id: 4, children: [] }] },
            { id: 3, children: [] }
          ]
        }
      });
    });

    it('should handle complex tree model', () => {
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
              icon: 'icon',
              initialState: { opened: false },
              children: [
                {
                  id: 5,
                  text: 'node5',
                  icon: 'icon',
                  initialState: { opened: false }
                },
                {
                  id: 6,
                  text: 'node6',
                  icon: 'icon',
                  initialState: { opened: true },
                  children: [
                    {
                      id: 7,
                      text: 'node7',
                      icon: 'icon',
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
          icon: 'icon',
          initialState: { opened: true },
          children: [
            {
              id: 8,
              text: 'node8',
              icon: 'icon',
              initialState: { opened: false },
              children: [
                {
                  id: 9,
                  text: 'node9',
                  icon: 'icon',
                  initialState: { opened: false },
                  children: [
                    {
                      id: 11,
                      text: 'node11',
                      icon: 'icon',
                      initialState: { opened: true }
                    }
                  ]
                },
                {
                  id: 10,
                  text: 'node10',
                  icon: 'icon',
                  initialState: { opened: true }
                }
              ]
            }
          ]
        }
      ];
      expect(convertTreeviewModel(model)).to.eql({
        model: {
          1: {
            text: 'node1',
            icon: 'icon',
            initialState: { opened: false }
          },
          2: {
            text: 'node2',
            icon: 'icon',
            initialState: { opened: false }
          },
          4: {
            text: 'node4',
            icon: 'icon',
            initialState: { opened: false }
          },
          5: {
            text: 'node5',
            icon: 'icon',
            initialState: { opened: false }
          },
          6: {
            text: 'node6',
            icon: 'icon',
            initialState: { opened: true }
          },
          7: {
            text: 'node7',
            icon: 'icon',
            initialState: { opened: true }
          },
          3: {
            text: 'node3',
            icon: 'icon',
            initialState: { opened: true }
          },
          8: {
            text: 'node8',
            icon: 'icon',
            initialState: { opened: false }
          },
          9: {
            text: 'node9',
            icon: 'icon',
            initialState: { opened: false }
          },
          11: {
            text: 'node11',
            icon: 'icon',
            initialState: { opened: true }
          },
          10: {
            text: 'node10',
            icon: 'icon',
            initialState: { opened: true }
          },
          '#': {
            text: '',
            icon: '',
            initialState: { opened: true }
          }
        },
        structure: {
          id: '#',
          children: [
            { id: 1, children: [] },
            { id: 2,
              children: [{
                id: 4, children: [
                  { id: 5, children: [] },
                  { id: 6, children: [{ id: 7, children: [] }] }
                ]
              }]
            },
            { id: 3,
              children: [{
                id: 8, children: [
                  { id: 9, children: [{ id: 11, children: [] }] },
                  { id: 10, children: [] }
                ]
              }]
            }
          ]
        }
      });
    });
  });
});
