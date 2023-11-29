/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation deleteTask($id: String!) {\n    deleteTask(input: { id: $id }) {\n      assignee {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      createdAt\n      creator {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      dueDate\n      id\n      name\n      pointEstimate\n      position\n      status\n      tags\n    }\n  }\n": types.DeleteTaskDocument,
    "\n  mutation createTask(\n    $assigneeId: String\n    $dueDate: DateTime!\n    $name: String!\n    $pointEstimate: PointEstimate!\n    $status: Status!\n    $tags: [TaskTag!]!\n  ) {\n    createTask(\n      input: {\n        assigneeId: $assigneeId\n        dueDate: $dueDate\n        name: $name\n        pointEstimate: $pointEstimate\n        status: $status\n        tags: $tags\n      }\n    ) {\n      assignee {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      createdAt\n      creator {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      dueDate\n      id\n      name\n      pointEstimate\n      position\n      status\n      tags\n    }\n  }\n": types.CreateTaskDocument,
    "\n  query tasks {\n    tasks(input: {}) {\n      assignee {\n        id\n        avatar\n      }\n      dueDate\n      id\n      name\n      pointEstimate\n      position\n      status\n      tags\n    }\n  }\n": types.TasksDocument,
    "\n  mutation updateTask(\n    $assigneeId: String\n    $id: String!\n    $position: Float\n    $dueDate: DateTime!\n    $name: String!\n    $pointEstimate: PointEstimate!\n    $status: Status!\n    $tags: [TaskTag!]!\n  ) {\n    createTask(\n      input: {\n        assigneeId: $assigneeId\n        dueDate: $dueDate\n        name: $name\n        pointEstimate: $pointEstimate\n        status: $status\n        tags: $tags\n      }\n    ) {\n      assignee {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      createdAt\n      creator {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      dueDate\n      id\n      name\n      pointEstimate\n      position\n      status\n      tags\n    }\n  }\n": types.UpdateTaskDocument,
    "\n  query users {\n    users {\n      id\n      avatar\n      fullName\n    }\n  }\n": types.UsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteTask($id: String!) {\n    deleteTask(input: { id: $id }) {\n      assignee {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      createdAt\n      creator {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      dueDate\n      id\n      name\n      pointEstimate\n      position\n      status\n      tags\n    }\n  }\n"): (typeof documents)["\n  mutation deleteTask($id: String!) {\n    deleteTask(input: { id: $id }) {\n      assignee {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      createdAt\n      creator {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      dueDate\n      id\n      name\n      pointEstimate\n      position\n      status\n      tags\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createTask(\n    $assigneeId: String\n    $dueDate: DateTime!\n    $name: String!\n    $pointEstimate: PointEstimate!\n    $status: Status!\n    $tags: [TaskTag!]!\n  ) {\n    createTask(\n      input: {\n        assigneeId: $assigneeId\n        dueDate: $dueDate\n        name: $name\n        pointEstimate: $pointEstimate\n        status: $status\n        tags: $tags\n      }\n    ) {\n      assignee {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      createdAt\n      creator {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      dueDate\n      id\n      name\n      pointEstimate\n      position\n      status\n      tags\n    }\n  }\n"): (typeof documents)["\n  mutation createTask(\n    $assigneeId: String\n    $dueDate: DateTime!\n    $name: String!\n    $pointEstimate: PointEstimate!\n    $status: Status!\n    $tags: [TaskTag!]!\n  ) {\n    createTask(\n      input: {\n        assigneeId: $assigneeId\n        dueDate: $dueDate\n        name: $name\n        pointEstimate: $pointEstimate\n        status: $status\n        tags: $tags\n      }\n    ) {\n      assignee {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      createdAt\n      creator {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      dueDate\n      id\n      name\n      pointEstimate\n      position\n      status\n      tags\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query tasks {\n    tasks(input: {}) {\n      assignee {\n        id\n        avatar\n      }\n      dueDate\n      id\n      name\n      pointEstimate\n      position\n      status\n      tags\n    }\n  }\n"): (typeof documents)["\n  query tasks {\n    tasks(input: {}) {\n      assignee {\n        id\n        avatar\n      }\n      dueDate\n      id\n      name\n      pointEstimate\n      position\n      status\n      tags\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateTask(\n    $assigneeId: String\n    $id: String!\n    $position: Float\n    $dueDate: DateTime!\n    $name: String!\n    $pointEstimate: PointEstimate!\n    $status: Status!\n    $tags: [TaskTag!]!\n  ) {\n    createTask(\n      input: {\n        assigneeId: $assigneeId\n        dueDate: $dueDate\n        name: $name\n        pointEstimate: $pointEstimate\n        status: $status\n        tags: $tags\n      }\n    ) {\n      assignee {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      createdAt\n      creator {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      dueDate\n      id\n      name\n      pointEstimate\n      position\n      status\n      tags\n    }\n  }\n"): (typeof documents)["\n  mutation updateTask(\n    $assigneeId: String\n    $id: String!\n    $position: Float\n    $dueDate: DateTime!\n    $name: String!\n    $pointEstimate: PointEstimate!\n    $status: Status!\n    $tags: [TaskTag!]!\n  ) {\n    createTask(\n      input: {\n        assigneeId: $assigneeId\n        dueDate: $dueDate\n        name: $name\n        pointEstimate: $pointEstimate\n        status: $status\n        tags: $tags\n      }\n    ) {\n      assignee {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      createdAt\n      creator {\n        avatar\n        createdAt\n        email\n        fullName\n        id\n        type\n        updatedAt\n      }\n      dueDate\n      id\n      name\n      pointEstimate\n      position\n      status\n      tags\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query users {\n    users {\n      id\n      avatar\n      fullName\n    }\n  }\n"): (typeof documents)["\n  query users {\n    users {\n      id\n      avatar\n      fullName\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;