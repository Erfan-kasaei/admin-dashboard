import { Loader } from "rizzui";

export default function loading() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <Loader size="xl" color="info" />
    </main>
  );
}
