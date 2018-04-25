/* eslint-disable no-undef,max-len */
import { addTodo, ADD_TODO } from './addTodo';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: ADD_TODO,
      text,
    };
    expect(addTodo(text)).toEqual(expectedAction);
  });
});
