'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import ErrorType from '@/data/enums/error';
import { Status } from '@/gql/graphql';
import updateTask from '@/services/mutation/updateTask';
import TaskSchema, { State } from '../taskSchema';

const UpdateTask = TaskSchema;

const updateTaskAction = async (state: State, formData: FormData) => {
  const validatedFields = UpdateTask.safeParse({
    id: state?.data?.id,
    position: Number(formData.get('position')),
    title: formData.get('title'),
    estimate: formData.get('estimate'),
    assignee: formData.get('assignee'),
    label: formData.getAll('label'),
    dueDate: formData.get('dueDate'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to update task.',
    };
  }

  console.log('validatedFields', validatedFields);

  try {
    await updateTask({
      position: validatedFields.data.position,
      id: validatedFields.data.id,
      assigneeId: validatedFields.data.assignee,
      dueDate: validatedFields.data.dueDate,
      name: validatedFields.data.title,
      pointEstimate: validatedFields.data.estimate,
      status: Status.Backlog,
      tags: validatedFields.data.label,
    });
  } catch (e) {
    return {
      message: ErrorType.UpdateTask,
    };
  }

  revalidatePath('/');
  redirect('/');
};

export default updateTaskAction;
