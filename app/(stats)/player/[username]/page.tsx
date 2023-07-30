export default function Page({ params }: { params: { username: string } }) {
  return <div>player username: {params.username}</div>;
}
