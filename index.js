const obj1 = {
    a: 'qwe',
    b: 'tyu',
    c: 123,
    o: ['dsdsd', 'oyoyo', 'kk'],
};

function cloneWithModifiedKeys (obj, par) {
    if (null == obj || "object" != typeof obj) return obj;

    return res = obj.keys.map(k => k.stringify() + par);

    throw new Error("Unable to copy obj! Its type isn't supported.");
};


function main () {

    console.log(cloneWithModifiedKeys(obj1, 'test'));
}
