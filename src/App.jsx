import DatabaseTable from "@/components/DatabaseTable";

export default function App() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Frontend Mentor Projects</h2>
        <DatabaseTable tableName="links" />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Odin Projects</h2>
        <DatabaseTable tableName="odin" />
      </section>
    </div>
  );
}
