// Что не так в нижеприведённом тесте функции pow?  Несколько тестов в одной функции,
//  а также не хватает описаний входных и выходных данных.
// В случае выпадения ошибки, будет сложно найти в чем проблема.

it("Возводит x в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  });