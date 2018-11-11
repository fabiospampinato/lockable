
/* LOCKABLE */

class Lockable {

  /* PROPERTIES */

  _locks = {};

  /* API */

  isLocked ( namespace? ) {

    return !!this._locks[namespace];

  }

  lock ( namespace? ): this {

    this._locks[namespace] = true;

    return this;

  }

  unlock ( namespace? ): this {

    delete this._locks[namespace];

    return this;

  }

}

/* EXPORT */

export default Lockable;
