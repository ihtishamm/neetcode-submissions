class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const value = this.keyStore.get(key);
        if (!value) {
            return "";
        }
        if (value[0][1] > timestamp) {
            return "";
        }
        function condition(mid) {
            return value[mid][1] <= timestamp;
        }
        let l = 0;
        let r = value.length - 1;
        while (l < r) {
            const mid = Math.ceil((l + r) / 2);
            if (condition(mid)) {
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        return value[l][0];
    }
}
