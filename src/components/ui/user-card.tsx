export default function UserCard({
  user,
}: {
  user: { image: string; name: string };
}) {
  return (
    <div className="flex items-center gap-2 h-8">
      <img src={user.image} className="w-6 h-6 rounded-full" />
      <p className="text-sm">{user.name}</p>
    </div>
  );
}
