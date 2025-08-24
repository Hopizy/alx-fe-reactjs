import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import userEvent from "@testing-library/user-event";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("can add a new todo", async () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/enter new todo/i);
  const addButton = screen.getByText(/add/i);

  await userEvent.type(input, "New Task");
  fireEvent.click(addButton);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("can toggle a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  
  // Initially not completed
  expect(todo).not.toHaveStyle("text-decoration: line-through");
  
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("can delete a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Build a Todo App");
  const deleteButton = screen.getAllByText("Delete")[0];

  fireEvent.click(deleteButton);

  expect(todo).not.toBeInTheDocument();
});
