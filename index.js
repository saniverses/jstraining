const obj1 = {
    a: 'qwe',
    b: 'tyu',
    c: 123,
    o: ['dsdsd', 'oyoyo', 'kk'],
};

function cloneWithModifiedKeys (obj, par) {
    let newObj2 = Object.keys(obj1).reduce(function(result, current) {
        result[current + '_test'] = obj1[current];   
        return result;
    }, {});
    
    console.log(newObj2);
};


function main () {
    let result = cloneWithModifiedKeys(obj1, 'test'); 
    console.log(result);
}

main();
