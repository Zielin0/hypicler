export default function Page({ params }: { params: { name: string } }) {
  return <div>guild name: {params.name}</div>;
}
