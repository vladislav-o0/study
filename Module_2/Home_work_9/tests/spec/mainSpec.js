
describe('Тестирование функции testFoo',
  function() {
    it('Позитивный тест', function() {
      let x = 1;
      let y = 2;

      expect(testFoo(x)).toBe(y);
    });
    it('Тест на NaN', function() {
      let str = 'str';

      expect(testFoo(str)).toBeNaN()
    });
    it('Негативный тест', function() {
      let x = -1;
      let y = 2;

      expect(testFoo(x)).not.toBe(y);
    }); 
});