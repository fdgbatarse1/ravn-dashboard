'use client';

import { useFormState } from 'react-dom';

import { State } from '@/actions/task/taskSchema';
import ErrorType from '@/data/enums/error';
import { PointEstimate, TaskTag, UsersQuery } from '@/gql/graphql';
import useAsync from '@/hooks/useAsync';
import getUsers from '@/services/getUsers';
import pointEstimateToNumber from '@/utils/pointEstimateToNumber';

import Error from './error';
import Buttons from './buttons';
import TextInput from './textInput';
import SelectInput from './selectInput';
import CheckboxInput from './checkboxInput';
import StateHandler from './stateHandler';
import FormProps from './formProps';

const Form = ({ onClose, action }: FormProps) => {
  const initialState = {};
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

  return (
    <StateHandler loading={loading} externalError={externalError} error={error} onClose={onClose}>
      <form className="flex w-min flex-col space-y-4 rounded-lg bg-neutral-3 p-4" action={dispatch}>
        <TextInput name="title" placeholder="Task Title" />
        <Error error={state.errors?.title} />
        <SelectInput name="estimate" array={pointEstimateArray} />
        <Error error={state.errors?.estimate} />
        <SelectInput name="assignee" array={assigneeArray} />
        <Error error={state.errors?.assignee} />
        <CheckboxInput name="label" array={labelArray} />
        <Error error={state.errors?.label} />
        <input
          type="datetime-local"
          name="dueDate"
          className="rounded bg-neutral-1 text-body-m text-neutral-4"
        />
        <Error error={state.errors?.dueDate} />
        <Buttons onClose={onClose} />
      </form>
    </StateHandler>
  );
};

export default Form;
