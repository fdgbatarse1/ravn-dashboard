'use server';

import { z } from 'zod';
import { PointEstimate, Status, TaskTag } from '@/gql/graphql';
import postTask from '@/services/postTask';
import deleteTask from '@/services/deleteTask';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import ErrorType from '@/data/enums/error';

export type State = {
  errors?: {
    title?: string[];
    estimate?: string[];
    assignee?: string[];
    label?: string[];
    dueDate?: string[];
  };
  message?: string | null;
};

const TaskSchema = z.object({
  id: z.string({
    required_error: 'Task id is required.',
    invalid_type_error: 'Invalid task id.',
  }),
  title: z
    .string({
      required_error: 'Title is required.',
      invalid_type_error: 'Title must be a string.',
    })
    .min(1, 'Title must not be empty.'),
  estimate: z.nativeEnum(PointEstimate, {
    invalid_type_error: 'Invalid estimate type. Please select a valid estimate.',
  }),
  assignee: z.string({
    invalid_type_error: 'Assignee must be a string.',
  }),
  label: z
    .array(
      z.nativeEnum(TaskTag, {
        invalid_type_error: 'Invalid task tag. Please select valid task tags.',
      }),
    )
    .min(1, 'At least one task tag is required.'),
  dueDate: z.coerce.date({
    invalid_type_error: 'Invalid date format. Please provide a valid date.',
  }),
});

const CreateTask = TaskSchema.omit({ id: true });
const DeleteTask = TaskSchema.pick({ id: true });

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

  return {};
};

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

  return {};
};

export { createTaskAction, deleteTaskAction };
