import createTaskAction from '@/actions/task/createTaskAction';
import updateTaskAction from '@/actions/task/updateTaskAction';
import deleteTaskAction from '@/actions/task/deleteTaskAction';
import Form from '@/components/form';
import Confirmation from '@/components/confirmation/confirmation';
import getTasks from '@/services/query/getTasks';
import useAsync from '@/hooks/useAsync';
import { TasksQuery } from '@/gql/graphql';

interface TaskHandlerProps {
  onClose: () => void;
  type: string | null;
  id: string | null;
}

const TaskHandler = ({ onClose, type, id }: TaskHandlerProps) => {
  const [loading, error, selected] = useAsync<TasksQuery['tasks'][0]>(async () => {
    const { tasks } = await getTasks();
    const selectedTask = tasks.find((task) => task.id === id);
    return selectedTask;
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  if (type === 'create') {
    return <Form onClose={onClose} type="create" action={createTaskAction} />;
  }
  if (type === 'update' && id) {
    return (
      <Form
        type="update"
        onClose={onClose}
        action={updateTaskAction}
        title={selected?.name}
        estimate={selected?.pointEstimate}
        assignee={selected?.assignee?.id}
        tags={selected?.tags}
        dueDate={selected?.dueDate}
        id={selected?.id}
        position={selected?.position}
      />
    );
  }
  if (type === 'delete' && id) {
    return (
      <Confirmation
        text="Are you sure you want to delete this task?"
        onCancel={onClose}
        onConfirm={() => deleteTaskAction(id)}
      />
    );
  }

  return null;
};
export default TaskHandler;
