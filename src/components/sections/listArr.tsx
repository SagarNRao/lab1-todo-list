/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";
import localFont from "next/font/local";

const drukCondSuperTrial = localFont({
  src: "../../fonts/DrukCond-Super-Trial.otf",
  display: "swap",
});

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const initialTodoList: Todo[] = [
  // { id: 1, task: "Buy groceries", completed: false },
  // { id: 2, task: "Walk the dog", completed: false },
  // { id: 3, task: "Finish homework", completed: false },
  // { id: 4, task: "Clean the house", completed: false },
  // { id: 5, task: "Read a book", completed: false },
];

export default function ListArr() {
  const [todoList, setTodoList] = useState<Todo[]>(initialTodoList);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [showNewInput, setShowNewInput] = useState<boolean>(false);

  const handleEditClick = (id: number, task: string) => {
    setEditingId(id);
    setInputValue(task);
  };

  const handleConfirmClick = () => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === editingId ? { ...todo, task: inputValue } : todo
      )
    );
    setEditingId(null);
  };

  const handleRemoveClick = (taskID: number) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== taskID)
    );
    setEditingId(null);

    console.log(todoList);
  };

  const handleAddClick = () => {
    setShowNewInput(true);
  };

  const handleNewTaskConfirm = () => {
    const newTodo: Todo = {
      id: todoList.length + 1,
      task: inputValue,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setInputValue("");
    setShowNewInput(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Button onClick={handleAddClick}>Add task</Button>

      <div className="mt-4">
        {todoList.map((todo) => (
          <Card key={todo.id} className="w-[350px] mb-4">
            <CardHeader style={{ padding: "11px" }}></CardHeader>
            <CardContent>
              <CardDescription>
                <div className="grid w-full items-center gap-4">
                  <div className="flex items-center space-between justify-between space-x-2">
                    <div className="flex">
                      <Checkbox id="terms" />
                      <div className="p-1"></div>
                      {editingId === todo.id ? (
                        <Input
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                        />
                      ) : (
                        <Label htmlFor="terms" className="break-words">
                          {todo.task}
                        </Label>
                      )}
                    </div>
                    <div className="flex space-x-2 ml-auto items-center">
                      {editingId === todo.id ? (
                        <Button onClick={handleConfirmClick}>Confirm</Button>
                      ) : (
                        <>
                          <Button
                            onClick={() => handleEditClick(todo.id, todo.task)}
                          >
                            Edit
                          </Button>
                          <Button onClick={() => handleRemoveClick(todo.id)}>
                            Remove
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        ))}

        {showNewInput && (
          <div className="flex items-center space-x-2 w-[350px]">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button onClick={handleNewTaskConfirm}>Confirm</Button>
          </div>
        )}
      </div>
    </div>
  );
}
