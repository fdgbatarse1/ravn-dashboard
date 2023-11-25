import Card from './card';

interface ColumnProps {
  text: string;
}

const Column = ({ text }: ColumnProps) => (
  <section className="flex h-full w-96 flex-col space-y-4">
    <h3 className="text-semibold text-body-l">{text}</h3>
    <Card />
  </section>
);

export default Column;
