
export default class PromiseChecker<T> {
    constructor(prom: Promise<T>) {
        prom.then(() => {
            this.resolved = true;
        }).catch(reason => {
            this.rejected = true;
        })
    }

    hasResolved() {
        return this.resolved;
    }

    hasRejected() {
        return this.rejected;
    }

    private resolved: boolean = false;
    private rejected: boolean = false;
}
