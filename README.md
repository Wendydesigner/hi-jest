## jest支持的三种测试文件
- .test.js
- .spec.js
- `__tests__/`

## 异步方法和回调函数的测试
- callback
- promise
- await/async
- setTimeout

## 测试用例的覆盖
- jest --coverage

## mock数据
- jest.fn()。mockReturnValue() 方法返回值
- jest.spyOn(Math, 'random') 对库的mock
- jest.mock() 对其他文件的引用

### 提升效率
beforeEach + afterEach

## ui测试
- npx jest --update进行ui更新
