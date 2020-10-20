const normalizeData = require('../normalizeData');
jest.mock('../getData');
const getData = require('../getData');
getData.mockReturnValue({
    name: 'zzc'
})
test('normalizeData test', () => {
    const {status, data} = normalizeData();
    expect(status).toBe(0);
    expect(data).toStrictEqual({
        name: 'zzc'
    })
})