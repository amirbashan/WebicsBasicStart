import React from 'react';
import { expect, describe, test } from '@jest/globals';
import { store } from '../store';
import BunnyReducer, { addBunny, deleteBunny } from './bunnySlice';
import renderer from 'react-test-renderer';

describe('Bunny Slice', () => {
  test('Initial state', () => {
    let initState = store.getState().bunny;
    expect(initState.bunnies.length).toBe(0);
    expect(initState.bunnies).toEqual([]);
    expect(initState.loading).toBe(false);
    expect(initState.error).toBe('');
  });

  test('addBunny action', () => {
    store.dispatch(addBunny());
    const state = store.getState().bunny;
    expect(state.bunnies.length).toBe(1);
    expect(typeof state.bunnies[0].name).toBe('string');
    expect(typeof state.bunnies[0].cuteness).toBe('number');
    expect(state.bunnies[0].cuteness).toBeGreaterThanOrEqual(1);
    expect(state.bunnies[0].cuteness).toBeLessThanOrEqual(10);
    expect(typeof state.bunnies[0].color).toBe('string');
  });

  test('deleteBunny action', () => {
    //Note! : the store should have 1 bunny that was added in the addBunny test (with id=1)
    const initState = store.getState().bunny;
    expect(initState.bunnies.findIndex((element) => element.id === 1)).toBe(0);
    store.dispatch(deleteBunny('1'));
    const state = store.getState().bunny;
    expect(state.bunnies.findIndex((element) => element.id === 1)).toBe(-1);
  });
});
