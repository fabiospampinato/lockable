/* LOCKABLE */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lockable = (function () {
    function Lockable() {
        /* PROPERTIES */
        this._locks = {};
    }
    /* API */
    Lockable.prototype.isLocked = function (namespace) {
        return !!this._locks[namespace];
    };
    Lockable.prototype.lock = function (namespace) {
        this._locks[namespace] = true;
        return this;
    };
    Lockable.prototype.unlock = function (namespace) {
        delete this._locks[namespace];
        return this;
    };
    return Lockable;
}());
/* EXPORT */
exports.default = Lockable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsY0FBYzs7O0FBRWQ7SUFBQTtRQUVFLGdCQUFnQjtRQUVoQixXQUFNLEdBQUcsRUFBRSxDQUFDO0lBMEJkLENBQUM7SUF4QkMsU0FBUztJQUVULDJCQUFRLEdBQVIsVUFBVyxTQUFVO1FBRW5CLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVsQyxDQUFDO0lBRUQsdUJBQUksR0FBSixVQUFPLFNBQVU7UUFFZixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUU5QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBRWQsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUyxTQUFVO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBRWQsQ0FBQztJQUVILGVBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLFFBQVEsQ0FBQyJ9