const {delay, delayPromise} = require('../index');

test('callback 执行', (done) => {
    const callback = () => {
        console.log('callback exec');
        expect(true).toBe(true);
        done();
    }
    delay(callback);
})

test('callback 执行promise', () => {
    const callback = () => 1;
    return delayPromise(callback).then(res => {
        console.log('callback promise')
        expect(res).toBe(1);
    })

})

test('callback 执行await', async() => {
    const callback = () => 1;
    const res = await delayPromise(callback);
    expect(res).toBe(1);
})