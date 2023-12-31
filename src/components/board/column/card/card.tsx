import { RiMoreFill, RiAttachment2, RiNodeTree, RiChat3Line, RiAlarmLine } from 'react-icons/ri';
import Label from '@/components/label';
import Avatar from '@/components/user/avatar';
import { TasksQuery } from '@/gql/graphql';
import pointEstimateToNumber from '@/utils/pointEstimateToNumber';
import dueDateText from '@/utils/dueDateText';
import dueDateStatus from '@/utils/dueDateStatus';
import tagColor from '@/utils/tagColor';
import placeholder from '@/assets/image/placeholder.webp';

import Reaction from './reaction';
import Settings from './settings';

interface CardProps {
  task: TasksQuery['tasks'][0];
  selectedCard: string | null;
  updateSelectedCard: (id: string) => void;
}

const Card = ({ task, selectedCard, updateSelectedCard }: CardProps) => {
  const { name, pointEstimate, dueDate, tags, assignee, id } = task;
  const imageUrl = assignee?.avatar;
  const formattedEstimateValue = pointEstimateToNumber(pointEstimate);
  const formattedDueDateText = dueDateText(dueDate);
  const formattedDueDateStatus = dueDateStatus(dueDate);
  return (
    <article className="space-y-4 rounded-lg bg-neutral-4 p-4 text-neutral-1">
      <div className="flex justify-between space-x-2">
        <h4 className="text-body-l font-semibold text-neutral-1">{name}</h4>
        <div className="relative">
          <RiMoreFill
            size="24px"
            className="cursor-pointer text-neutral-2 hover:text-neutral-1"
            onClick={() => updateSelectedCard(id)}
          />
          {selectedCard === id && <Settings id={id} />}
        </div>
      </div>
      <div className="flex justify-between space-x-2">
        <p className="text-body-m font-semibold text-neutral-1">{formattedEstimateValue} points</p>
        <Label
          className={formattedDueDateStatus}
          icon={<RiAlarmLine size="24px" />}
          text={formattedDueDateText}
        />
      </div>
      <ul className="m-[-1rem] flex flex-wrap justify-start space-x-2">
        {tags.map((tag) => {
          const color = tagColor(tag);
          const text = tag.replace('_', ' ');
          return <Label key={tag} className={`ml-2 mt-2 bg-opacity-10 ${color}`} text={text} />;
        })}
      </ul>
      <div className="flex justify-between space-x-2">
        <Avatar alt="User profile" className="h-8 w-8" src={imageUrl || placeholder} />
        <ul className="flex items-center space-x-4">
          <li className="py-1 text-body-m text-neutral-1">
            <RiAttachment2 size="16px" />
          </li>
          <Reaction count={5} icon={<RiNodeTree size="16px" />} />
          <Reaction count={5} icon={<RiChat3Line size="16px" />} />
        </ul>
      </div>
    </article>
  );
};

export default Card;
