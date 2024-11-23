import { Button } from "@/shared/components/ui/button";
import { TechnologiesTable } from "@/widgets/technologies-table";

export function MainPage() {
  return (
    <div className="">
      <section className="container mt-10">
        <h1 className="">Голосуй, предлагай или уё##вай</h1>
      </section>
      <section className="container mt-10">
        <TechnologiesTable />
      </section>
    </div>
  );
}     
