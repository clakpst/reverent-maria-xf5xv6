import "./styles.css";
import Tree , { DataNode , EventDataNode }  from "rc-tree"
import React, { useState } from 'react';
import 'rc-tree/assets/index.css';




  const treeData: DataNode[] = [
    {
      title: 'Padre 1',
      key: '0-0',
      children: [
        { title: 'Hijo 1', key: '0-0-0' },
        { title: 'Hijo 2', key: '0-0-1' },
      ],
    },
    {
      title: 'Padre 2',
      key: '0-1',
      children: [
        { title: 'Hijo 3', key: '0-1-0' },
      ],
    },
  ];

  const App = () => {
    const [selectedKeys, setSelectedKeys] = useState([]);
  
    const onSelect = (keys: info) => {
      setSelectedKeys(keys);
    };
  
    return (
      <div style={{ margin: 20 }}>
        <h1>Ejemplo simple rc-tree con negrita</h1>
        <Tree
          treeData={treeData}
          selectedKeys={selectedKeys}
          onSelect={onSelect}
          defaultExpandAll
        />
        <style>{`
          .rc-tree-node-selected .rc-tree-node-content-wrapper {
            font-weight: bold;
          }
        `}</style>
      </div>
    );
  };
  
  export default App;
  