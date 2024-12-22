import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notificações</div>
      <Link href="/complex-dashboard/archived">Arquivadas</Link>
    </Card>
  );
}
