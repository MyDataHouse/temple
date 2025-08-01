"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = exports.myFunction = void 0;
var myFunction = function () {
    return 'Hello, world!';
};
exports.myFunction = myFunction;
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}());
exports.MyClass = MyClass;
MyClass.prototype.name = 'zhangsan';
MyClass.prototype.sex = 'male';
