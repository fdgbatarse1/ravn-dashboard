'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import ErrorType from '@/data/enums/error';
import deleteTask from '@/services/deleteTask';

import TaskSchema from '../taskSchema';

const DeleteTask = TaskSchema.pick({ id: true });

const deleteTaskAction = async (id: string) => {
  const validatedFields = DeleteTask.safeParse({
    id,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to delete task.',
    };
  }

  try {
    await deleteTask({
      id: validatedFields.data.id,
    });
  } catch (e) {
    return {
      message: ErrorType.DeleteTask,
    };
  }

  revalidatePath('/');
  redirect('/');
};

export default deleteTaskAction;
