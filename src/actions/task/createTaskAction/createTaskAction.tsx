'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import ErrorType from '@/data/enums/error';
import { Status } from '@/gql/graphql';
import postTask from '@/services/mutation/postTask';

import TaskSchema, { State } from '../taskSchema';

const CreateTask = TaskSchema.omit({ id: true });

const createTaskAction = async (_: State, formData: FormData) => {
  const validatedFields = CreateTask.safeParse({
    title: formData.get('title'),
    estimate: formData.get('estimate'),
    assignee: formData.get('assignee'),
    label: formData.getAll('label'),
    dueDate: formData.get('dueDate'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to create task.',
    };
  }

  try {
    await postTask({
      assigneeId: validatedFields.data.assignee,
      dueDate: validatedFields.data.dueDate,
      name: validatedFields.data.title,
      pointEstimate: validatedFields.data.estimate,
      status: Status.Backlog,
      tags: validatedFields.data.label,
    });
  } catch (e) {
    return {
      message: ErrorType.PostTask,
    };
  }

  revalidatePath('/');
  redirect('/');
};

export default createTaskAction;
