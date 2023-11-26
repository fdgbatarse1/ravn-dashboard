interface ReactionProps {
  count: number;
  icon: React.ReactNode;
}

const Reaction = ({ count, icon }: ReactionProps) => (
  <li className="flex items-center space-x-1 py-1 text-body-m text-neutral-1">
    <p>{count}</p>
    {icon}
  </li>
);

export default Reaction;
