export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users.map((user: any) => ({ id: user.id.toString() }));
}
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <div>{id}</div>;
}
