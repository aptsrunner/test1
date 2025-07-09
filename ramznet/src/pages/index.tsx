import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">RamzNet Admin</h1>
      <p className="mb-8 text-center max-w-md">
        Manage VPN nodes, inbounds and clients with a lightweight modern interface.
      </p>
      <nav className="space-x-4">
        <Link href="/admin/nodes" className="underline">Nodes</Link>
        <Link href="/admin/inbounds" className="underline">Inbounds</Link>
        <Link href="/admin/clients" className="underline">Clients</Link>
        <Link href="/admin/status" className="underline">Status</Link>
        <Link href="/admin/finance" className="underline">Finance</Link>
      </nav>
    </main>
  );
}
