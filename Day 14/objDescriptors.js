const obj = {
    property1: 42,
    property2: "hello",
  };
  
  
  Object.defineProperties(obj, {
    property1: {
      enumerable: false,
      writable: false,
      configurable:false
    },
    property2: {
      enumerable: true,
      writable: true
    }
  });
  
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  
  console.log(descriptors.property1.configurable);