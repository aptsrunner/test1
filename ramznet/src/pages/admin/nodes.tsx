import { useState } from 'react';

interface Node {
  id: number;
  name: string;
  location: string;
}

export default function NodesPage() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const addNode = () => {
    const newNode: Node = { id: Date.now(), name, location };
    setNodes([...nodes, newNode]);
    setName('');
    setLocation('');
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Nodes</h1>
      <div className="space-y-4 mb-8">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Node name"
          className="border rounded p-2 mr-2"
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border rounded p-2 mr-2"
        />
        <button onClick={addNode} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Node
        </button>
      </div>
      <ul className="space-y-2">
        {nodes.map((node) => (
          <li key={node.id} className="border rounded p-2">
            {node.name} - {node.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
