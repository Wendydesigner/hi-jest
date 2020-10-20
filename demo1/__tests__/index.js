const add = require('../index');

describe('add测试3', () => {
    test('1+1=2', () => {
        const res = add(1,1);
        expect(res).toBe(2);
    })
})