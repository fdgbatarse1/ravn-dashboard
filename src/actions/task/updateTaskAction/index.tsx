'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import TaskSchema, { State } from '../taskSchema';

const UpdateTask = TaskSchema;

const updateTaskAction = async (_: State, formData: FormData) => {
  const validatedFields = UpdateTask.safeParse({
    id: formData.get('id'),
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

  revalidatePath('/');
  redirect('/');
};

export default updateTaskAction;
