export const add = (...args: number[]): number => {
    return args.reduce((acc, curr) => acc + curr, 0);
}