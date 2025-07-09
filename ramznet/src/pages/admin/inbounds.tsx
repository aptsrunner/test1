import { useState } from 'react';

interface Inbound {
  id: number;
  nodeId: number;
  name: string;
}

export default function InboundsPage() {
  const [inbounds, setInbounds] = useState<Inbound[]>([]);
  const [nodeId, setNodeId] = useState('');
  const [name, setName] = useState('');

  const addInbound = () => {
    const newInbound: Inbound = { id: Date.now(), nodeId: Number(nodeId), name };
    setInbounds([...inbounds, newInbound]);
    setNodeId('');
    setName('');
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Inbounds</h1>
      <div className="space-y-4 mb-8">
        <input
          value={nodeId}
          onChange={(e) => setNodeId(e.target.value)}
          placeholder="Node ID"
          className="border rounded p-2 mr-2"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Inbound name"
          className="border rounded p-2 mr-2"
        />
        <button onClick={addInbound} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Inbound
        </button>
      </div>
      <ul className="space-y-2">
        {inbounds.map((ib) => (
          <li key={ib.id} className="border rounded p-2">
            {ib.name} on Node {ib.nodeId}
          </li>
        ))}
      </ul>
    </div>
  );
}
