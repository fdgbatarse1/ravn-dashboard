'use client';

import { useFormState } from 'react-dom';

import { State } from '@/actions/task/taskSchema';
import ErrorType from '@/data/enums/error';
import { PointEstimate, TaskTag, UsersQuery } from '@/gql/graphql';
import useAsync from '@/hooks/useAsync';
import getUsers from '@/services/query/getUsers';
import pointEstimateToNumber from '@/utils/pointEstimateToNumber';
import { format } from 'date-fns';

import Error from './error';
import Buttons from './buttons';
import TextInput from './textInput';
import SelectInput from './selectInput';
import CheckboxInput from './checkboxInput';
import StateHandler from './stateHandler';

interface FormProps {
  onClose: () => void;
  action: (state: State, payload: FormData) => Promise<State>;
  title?: string;
  estimate?: PointEstimate;
  assignee?: string;
  tags?: TaskTag[];
  dueDate?: string;
  id?: string;
  position?: number;
  type?: string;
}

const Form = ({
  onClose,
  action,
  title,
  estimate,
  assignee,
  tags,
  dueDate,
  id,
  position,
  type,
}: FormProps) => {
  const initialState = {
    data: {
      id,
      position,
    },
  };

  const [state, dispatch] = useFormState<State, FormData>(action, initialState);

  const [loading, error, users] = useAsync<UsersQuery['users']>(async () => {
    const data = await getUsers();
    return data.users;
  }, []);

  const pointEstimateArray = Object.values(PointEstimate).map((value) => ({
    id: value,
    text: pointEstimateToNumber(value).toString(),
  }));

  const assigneeArray = users?.map((user) => ({
    id: user.id,
    text: user.fullName,
  }));

  const labelArray = Object.values(TaskTag).map((value) => ({
    id: value,
    text: value.replace('_', ' '),
  }));

  const postTaskError = state.message === ErrorType.PostTask;
  const updateTaskError = state.message === ErrorType.UpdateTask;
  const errorType = postTaskError || updateTaskError;
  const externalError = errorType ? state.message : undefined;
  const dateDefaultValue = dueDate ? format(new Date(dueDate), "yyyy-MM-dd'T'HH:mm") : undefined;

  return (
    <StateHandler loading={loading} externalError={externalError} error={error} onClose={onClose}>
      <form className="flex w-min flex-col space-y-4 rounded-lg bg-neutral-3 p-4" action={dispatch}>
        <TextInput name="title" placeholder="Task Title" defaultValue={title} />
        <Error error={state.errors?.title} />
        <SelectInput name="estimate" array={pointEstimateArray} defaultValue={estimate} />
        <Error error={state.errors?.estimate} />
        <SelectInput name="assignee" array={assigneeArray} defaultValue={assignee} />
        <Error error={state.errors?.assignee} />
        <CheckboxInput name="label" array={labelArray} defaultValue={tags} />
        <Error error={state.errors?.label} />
        <input
          type="datetime-local"
          name="dueDate"
          defaultValue={dateDefaultValue}
          className="rounded bg-neutral-1 text-body-m text-neutral-4"
        />
        <Error error={state.errors?.dueDate} />
        <Buttons onClose={onClose} type={type} />
      </form>
    </StateHandler>
  );
};

export default Form;
