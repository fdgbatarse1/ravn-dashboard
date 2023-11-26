import { RiMoreFill, RiAttachment2, RiNodeTree, RiChat3Line, RiAlarmLine } from 'react-icons/ri';

import Label from '@/components/label';
import Avatar from '@/components/user/avatar';

import Reaction from './reaction';

const Card = () => (
  <article className="space-y-4 rounded-lg bg-neutral-4 p-4 text-neutral-1">
    <div className="flex justify-between space-x-2">
      <h4 className="text-body-l font-semibold text-neutral-1">Slack</h4>
      <RiMoreFill size="24px" className="text-neutral-2" />
    </div>
    <div className="flex justify-between space-x-2">
      <p className="text-body-m font-semibold text-neutral-1">4 points</p>
      <Label
        className="bg-neutral-2 bg-opacity-10 text-neutral-1"
        icon={<RiAlarmLine size="24px" />}
        text="Today"
      />
    </div>
    <ul className="m-[-1rem] flex flex-wrap justify-start space-x-2">
      <Label className="ml-2 mt-2 bg-secondary-4 bg-opacity-10 text-secondary-4" text="ios app" />
      <Label className="ml-2 mt-2 bg-tertiary-4 bg-opacity-10 text-tertiary-4" text="android" />
    </ul>
    <div className="flex justify-between space-x-2">
      <Avatar
        alt="User profile"
        className="h-8 w-8"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
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

export default Card;