import { PointEstimate, TaskTag } from '@/gql/graphql';

interface CreateProps {
  type: 'create';
}

interface UpdateProps {
  type: 'update';
  title: string;
  pointEstimate: PointEstimate;
  tags: TaskTag[];
  dueDate: string;
}

type FormProps = CreateProps | UpdateProps;

export default FormProps;
