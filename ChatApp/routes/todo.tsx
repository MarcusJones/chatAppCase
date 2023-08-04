/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, HandlerContext, PageProps } from "$fresh/server.ts";

import { Todo } from "../core/data/models/todo.ts";
import listAllTodos from "../core/data/todo/list-todo.ts";

type TodosProps = {
  allTodos: Todo[];
};

export const handler: Handlers<TodosProps> = {
  async GET(_req, ctx) {
    const allTodos = await listAllTodos();

    return ctx.render({
      allTodos: allTodos ?? [],
    });
  },
}

export default function Todos(props: PageProps<TodosProps>) {
  const { data } = props;
  const { allTodos } = data;

  return (
    <div
      className={tw`h-100 w-full flex flex-col items-center justify-center bg-teal-lightest font-sans`}
    >
      <div
        className={tw`bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg`}
      >
        <h2>Todo Items - Items uses the API endpoints to update data.</h2>
        <hr className={tw`mb-1`} />
        {allTodos.map((todo) => (
          <span>TODO todo island component</span>
        ))}
      </div>
    </div>
  );
}