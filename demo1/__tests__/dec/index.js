const add = require('../../index');

describe('add测试4', () => {
    test('1+1=2', () => {
        const res = add(1,1);
        expect(res).toBe(2);
    })
})