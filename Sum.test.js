
const sum=require("./sum");



//truthy and falsy values its for boolean  values

test('falsy values',()=>{
  expect(0).toBeFalsy()
})
// truthy values

test('truthy value',()=>{
 expect(1).toBeTruthy()
});

//defined values

test('defined values',()=>{
  const price=1.5
  expect(price).toBeDefined()
})
//Null values

test('null values',()=>{
 const checked=null;
 expect(checked).toBeNull()
});
//undefined values
test('undefined values',()=>{
  let name;
  expect(name).toBeUndefined();
})
//compiling functions Error

test('compiling the sum function',()=>{
 expect(()=>sum(1,2))
})