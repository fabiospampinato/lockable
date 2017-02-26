declare class Lockable {
    _locks: {};
    isLocked(namespace?: any): boolean;
    lock(namespace?: any): this;
    unlock(namespace?: any): this;
}
export default Lockable;
