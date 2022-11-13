import { expect, describe, test } from '@jest/globals';

const thunkMiddleware =
  ({ dispatch, getState }: any) =>
  (next: any) =>
  (action: any) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();
  const invoke = (action: any) => thunkMiddleware(store)(next)(action);

  return { store, next, invoke };
};

describe('Store Test', () => {
  test('passes dispatch and getState', () => {
    const { store, invoke } = create();
    invoke((dispatch: any, getState: any) => {
      dispatch('TEST DISPATCH');
      getState();
    });
    expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH');
    expect(store.getState).toHaveBeenCalled();
  });
});
