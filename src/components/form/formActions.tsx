'use server';

import { z } from 'zod';
import { PointEstimate, TaskTag } from '@/gql/graphql';

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

const createTask = async (prevState: State, formData: FormData) => {
  console.log(prevState);
  console.log(formData);

  const validatedFields = TaskSchema.safeParse({
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

  return {};
};

export { createTask };
