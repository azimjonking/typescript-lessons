"use strict";
// TypeScript namespace
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var Utils;
(function (Utils) {
    function log(text, color, fontSize) {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
        }
        else {
            console.log(`%c${text}`, `color: ${color}`);
        }
    }
    Utils.log = log;
    log("Salom TypeScript", "red", "32px");
})(Utils || (Utils = {}));
Utils.log("Salom dunyo", "green", "24px");
var Animals;
(function (Animals) {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    Animals.Animal = Animal;
})(Animals || (Animals = {}));
(function (Animals) {
    var _Tiger_sound;
    class Tiger extends Animals.Animal {
        constructor(name, sound) {
            super(name);
            _Tiger_sound.set(this, void 0);
            this.sound = sound;
            __classPrivateFieldSet(this, _Tiger_sound, sound, "f");
        }
        say() {
            Utils.log(`${this.name} - ${this.sound}, ${__classPrivateFieldGet(this, _Tiger_sound, "f")}`, "blue", "24px");
        }
    }
    _Tiger_sound = new WeakMap();
    Animals.Tiger = Tiger;
    let Pets;
    (function (Pets) {
        class Cat extends Animals.Animal {
            constructor(name, sound) {
                super(name);
                this.sound = sound;
            }
            say() {
                Utils.log(`${this.name} - ${this.sound}`, "blue", "24px");
            }
        }
        Pets.Cat = Cat;
    })(Pets = Animals.Pets || (Animals.Pets = {}));
})(Animals || (Animals = {}));
const tiger = new Animals.Tiger("Sherxon", "RRRR");
console.log(tiger);
tiger.say();
// console.log(tiger.#sound);
const cat = new Animals.Pets.Cat("Mushuk", "Myau");
cat.say();
//# sourceMappingURL=index.js.map