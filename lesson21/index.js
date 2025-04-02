"use strict";
class ComputerFile {
}
class TextFile extends ComputerFile {
    constructor(name, size) {
        super();
        this.name = name;
        this.size = size;
    }
    show() {
        console.log(this.size);
    }
}
// namespace & module
var Photos;
(function (Photos) {
    class JPEG {
    }
    Photos.JPEG = JPEG;
    class PNG {
    }
    Photos.PNG = PNG;
})(Photos || (Photos = {}));
var Videos;
(function (Videos) {
    class MP4 {
    }
    Videos.MP4 = MP4;
    class AVI {
    }
    Videos.AVI = AVI;
})(Videos || (Videos = {}));
//# sourceMappingURL=index.js.map