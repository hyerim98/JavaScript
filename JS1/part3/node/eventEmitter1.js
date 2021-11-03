class Emitter {
    constructor() {
        this.events = {};
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener); // 해당 이벤트의 listener들을 모아 놓은 형태
    }

    emit (type) {
        if (this.events[type]) {
            this.events[type].forEach((listener) => { // 해당 이벤트의 listener들을 forEach로 순차적으로 실행
                listener();
            });
        }
    }
}

module.exports = Emitter;