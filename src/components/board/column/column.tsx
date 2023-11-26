import Card from './card';

interface ColumnProps {
  text: string;
}

const Column = ({ text }: ColumnProps) => (
  <section className="flex h-full w-96 flex-col space-y-4 bg-neutral-5">
    <h3 className="text-body-l font-semibold capitalize text-neutral-1">{text}</h3>
    <Card />
  </section>
);

export default Column;
