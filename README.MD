# React tree component

Treeview component for react

[Demo](http://yjcxy12.github.io/react-treeview-component/) (Also check out the `src/example/` folder for usage).

## Install

```sh
npm install react-treeview-component
```

## Usage

The library assumes commonJS or ES6 modules implementation.
Require or import 'Treeview' component
```javascript
var Treeview = require('react-treeview-component').Treeview;
```
Or
```javascript
import { Treeview } from 'react-treeview-component';
```

### Usage with redux

This library is designed to fit in with redux structure. 

## API

## Properties

#### dataSouce

```javascript
{
  "id": "string"	// Unique identifier for the node
  "text": "string"  // Treenode display text
  "icon": "string"	// Custom icon, CSS class
  "opened": Bool,	// If the node is opened	
  "selected": Bool,	// If the node is selected
  "children": []	// Array of children nodes	
}
```

#### onTreenodeClick

######function (id, event)

- id: node id
- event: mouse clicked event

perform function on treenode clicked

## Methods (Use though 'ref' property)

#### dfs

######function (callback)

- callback: 1 parameter: node

perform depth first search on dataSource, applying callback  on each node

#### bfs

######function (callback)

- callback: 1 parameter: node

perform breadth first search on dataSource, applying callback  on each node

## License

MIT.
