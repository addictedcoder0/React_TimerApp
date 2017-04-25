var expect =  require('expect');  //i am removing it , b/c at test time expect can't be resolved .. so using via chai
//var expect = require('chai').expect;
describe('App',() => {
  it('should properly run tests ',() => {
    // expect(1).to.equal(1); when using 'chai'
    expect(1).toBe(1);
  });
});
