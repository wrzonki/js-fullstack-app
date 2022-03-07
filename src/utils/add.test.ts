import { add } from './add';

describe('Add numbers', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
    it('should add three numbers', () => {
        expect(add(1, 2, 3)).toBe(6);
    });
    it('should add four numbers', () => {
        expect(add(1, 2, 3, 4)).toBe(10);
    });
})