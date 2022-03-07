import { Stack } from './stack';

describe('Stack', () => {
  let stack: any;

  beforeAll(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('🍿');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🍿');
  });

  it('can pop off', () => {
    stack.items = {
      0: '🍿',
      1: '🍔',
    };
    stack.top = 1;
    expect(stack.top).toBe(1);
    expect(stack.pop).toBe('🍔');
  });
})