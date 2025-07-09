import { useState } from 'react';

interface Client {
  id: number;
  inboundId: number;
  username: string;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [inboundId, setInboundId] = useState('');
  const [username, setUsername] = useState('');

  const addClient = () => {
    const newClient: Client = { id: Date.now(), inboundId: Number(inboundId), username };
    setClients([...clients, newClient]);
    setInboundId('');
    setUsername('');
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Clients</h1>
      <div className="space-y-4 mb-8">
        <input
          value={inboundId}
          onChange={(e) => setInboundId(e.target.value)}
          placeholder="Inbound ID"
          className="border rounded p-2 mr-2"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border rounded p-2 mr-2"
        />
        <button onClick={addClient} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Client
        </button>
      </div>
      <ul className="space-y-2">
        {clients.map((c) => (
          <li key={c.id} className="border rounded p-2">
            {c.username} on Inbound {c.inboundId}
          </li>
        ))}
      </ul>
    </div>
  );
}
