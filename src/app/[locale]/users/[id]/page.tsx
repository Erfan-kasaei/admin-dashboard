export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <div>{id}</div>;
}
