import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from '@storybook/addon-knobs/react';
import Task from "./Task";


export const task = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};
  
export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask')
}


storiesOf('Task', module)
    .addDecorator(withKnobs)
    .add("default", () => <Task task={task} {...actions} />)
    .add('default', () => {
        return <Task task={object('task', { ...task })} {...actions} />;
      })
    .add("pinned", () => <Task task={{ ...task, status: "TASK_PINNED" }}  {...actions} />)
    .add("archived", () => <Task task={{...task, status: "TASK_ARCHIVED"}}  {...actions} />)