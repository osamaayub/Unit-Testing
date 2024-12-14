const fetchPromise = require('./promise');
const {expect,it}=require('@jest/globals');

global.fetch=jest.fn();


describe('fetchData using Promise',()=>{
    beforeEach(()=>{
       jest.useFakeTimers();
       fetch.mockClear();
    });
    afterEach(()=>{
      jest.useRealTimers();
      jest.clearAllMocks();
    });
    it('verifys the code after 1s',()=>{
         const mockFn=jest.fn();
         setTimeout(mockFn,1000);
         jest.runAllTimers();
         expect(mockFn).toHaveBeenCalledTimes(1);
    });
    it('check the mocked response',async()=>{

      const mockdata={id:1,name:"Osama Ayub"};
      fetch.mockResolvedValueOnce({
        JSON: jest.fn().mockResolvedValueOnce(mockdata)
      });
     //calling the fetchPromise
     fetchPromise();
       //run the tmer after 1s
     jest.runAllTimers();

     await Promise.resolve();
       //assertions
     expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(('https://jsonplaceholder.typicode.com/person'))
    });
});