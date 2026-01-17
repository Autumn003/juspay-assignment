import Avatar from "./avatar";

export default function UserCard({
  user,
}: {
  user: { image: string; name: string };
}) {
  return (
    <div className="flex items-center gap-2 h-8">
      <Avatar src={user.image} />
      <p className="text-sm">{user.name}</p>
    </div>
  );
}
