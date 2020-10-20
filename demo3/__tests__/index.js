const {delayPromise,getRandom} = require('../index');
let mockRandom;
beforeEach(() => {
    mockRandom = jest.spyOn(Math, 'random');
})
afterEach(() => {
    mockRandom.mockRestore();
})
test('callback 执行promise', () => {
    const callback = jest.fn().mockReturnValue(1);
    return expect(delayPromise(callback)).resolves.toBe(1);
})
test('getRandom < 10', () => {
    expect(getRandom()).toBeLessThan(10);
})
// test('getRandom >=0', () => {
//     expect(getRandom()).toBeGreterThanOrEqual(0);
// })
test('控制随机数', () => {
    mockRandom.mockReturnValue(0.11);
    expect(getRandom()).toBe(1);
})
test('控制随机数临界', () => {
    mockRandom.mockReturnValue(1);
    expect(getRandom()).toBe(10);
})
test('getRandom < 10', () => {
    expect(getRandom()).toBeLessThan(10);
})