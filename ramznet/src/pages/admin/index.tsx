import Link from 'next/link';

export default function AdminHome() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li><Link href="/admin/nodes" className="underline">Manage Nodes</Link></li>
        <li><Link href="/admin/inbounds" className="underline">Manage Inbounds</Link></li>
        <li><Link href="/admin/clients" className="underline">Manage Clients</Link></li>
        <li><Link href="/admin/status" className="underline">Activity & System Status</Link></li>
        <li><Link href="/admin/finance" className="underline">Financial</Link></li>
      </ul>
    </main>
  );
}
