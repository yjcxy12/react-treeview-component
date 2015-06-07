# React tree component

Tree component for react

[Demo](http://yjcxy12.github.io/react-treeview-component/) (Also check out the `src/example/` folder for usage).

## Install

```sh
npm install react-treeview-component
```

Include js file at "react-treeview-component/build/react-tree.js" <br/>
Include css file at "react-treeview-component/build/react-tree.css"

## Usage

Added to your react component
```html
<Treeview dataSource={this.props.dataSource}
  onTreenodeClick={this.handleTreenodeClick}>
</Treeview>
```

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
