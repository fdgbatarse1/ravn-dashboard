import { PointEstimate, TaskTag } from '@/gql/graphql';
import type { State } from '@/actions/task/taskSchema';

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

type FormProps = (CreateProps | UpdateProps) & {
  action: (state: State, payload: FormData) => Promise<State>;
  onClose: () => void;
};

export default FormProps;
