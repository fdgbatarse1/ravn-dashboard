import { PointEstimate, Status, TaskTag, TasksQuery } from '@/gql/graphql';

const data: TasksQuery = {
  tasks: [
    {
      assignee: {
        id: '1',
        avatar: 'https://avatars.dicebear.com/api/initials/gs.svg',
      },
      dueDate: '2023-11-27T07:30:42.413Z',
      id: '335884e3-b043-4b3a-9412-281dbe9faeaf',
      name: 'Ticket1',
      pointEstimate: PointEstimate.Eight,
      position: 5,
      status: Status.Backlog,
      tags: [TaskTag.Android, TaskTag.React],
    },
    {
      assignee: {
        id: '2',
        avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
      },
      dueDate: '2023-11-24T07:30:42.413Z',
      id: '1d5afd96-5fc8-4c12-9244-5620416c51af',
      name: 'Ticket3',
      pointEstimate: PointEstimate.One,
      position: 2,
      status: Status.Backlog,
      tags: [TaskTag.Android],
    },
    {
      assignee: {
        id: '1',
        avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
      },
      dueDate: '2023-12-04T07:30:42.413Z',
      id: 'c02bf44b-88cc-4887-815b-58a3f6b1d01e',
      name: 'Ticket5',
      pointEstimate: PointEstimate.Eight,
      position: 3,
      status: Status.Backlog,
      tags: [TaskTag.Rails, TaskTag.NodeJs],
    },
    {
      assignee: {
        id: '1',
        avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
      },
      dueDate: '2023-11-24T07:30:42.413Z',
      id: '77747015-5376-4d0b-8d90-2aff103118e2',
      name: 'Ticket8',
      pointEstimate: PointEstimate.Eight,
      position: 4,
      status: Status.Backlog,
      tags: [TaskTag.Rails],
    },
    {
      assignee: {
        id: '1',
        avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
      },
      dueDate: '2023-11-25T07:30:42.413Z',
      id: 'c2413db4-44f5-4e97-9062-1ff28c9747ff',
      name: 'Ticket7',
      pointEstimate: PointEstimate.Two,
      position: 1,
      status: Status.Todo,
      tags: [TaskTag.React, TaskTag.NodeJs],
    },
    {
      assignee: {
        id: '1',
        avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
      },
      dueDate: '2023-11-30T07:30:42.413Z',
      id: 'ea99070e-d7f2-467a-8fa1-2046a2355b89',
      name: 'Ticket4',
      pointEstimate: PointEstimate.Zero,
      position: 1,
      status: Status.InProgress,
      tags: [TaskTag.React],
    },
    {
      assignee: {
        id: '1',
        avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
      },
      dueDate: '2023-11-26T07:30:42.413Z',
      id: '4770f022-a23c-4981-8a1a-53a02cae205c',
      name: 'Ticket6',
      pointEstimate: PointEstimate.Two,
      position: 2,
      status: Status.InProgress,
      tags: [TaskTag.Android, TaskTag.Ios],
    },
    {
      assignee: {
        id: '1',
        avatar: 'https://avatars.dicebear.com/api/initials/gs.svg',
      },
      dueDate: '2023-11-28T07:30:42.413Z',
      id: '1a9b48ac-b7ac-4e7b-80b1-7fd4c4018416',
      name: 'Ticket2',
      pointEstimate: PointEstimate.Four,
      position: 1,
      status: Status.Cancelled,
      tags: [TaskTag.Android, TaskTag.Rails],
    },
  ],
};

export default data;
