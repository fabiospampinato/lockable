# Lockable

![Issues](https://img.shields.io/github/issues/fabiospampinato/lockable.svg)
[![NPM version](https://img.shields.io/npm/v/@fabiospampinato/lockable.svg)](https://www.npmjs.com/package/@fabiospampinato/lockable)

A base class that implements lock/unlock-related functionalities.

## Install

```shell
$ npm install --save @fabiospampinato/lockable
```

## Usage

```js
import Lockable from '@fabiospampinato/lockable';

class Safe extends Lockable {}

const safe = new Safe ();

safe.isLocked (); // false
safe.isLocked ( 'numpad' ); // false

safe.lock ();
safe.lock ( 'numpad' );

safe.isLocked (); // true
safe.isLocked ( 'numpad' ); // true

safe.unlock ();
safe.unlock ( 'numpad' );

safe.isLocked (); // false
safe.isLocked ( 'numpad' ); // false
```

## API

### `new Lockable ()`

Returns a new instance of Lockable.

### `.isLocked ( namespace?: string ): boolean`

Returns a boolean indicating if a particular namespace is locked or not.

### `.lock ( namespace?: string ): this`

`.isLocked ( namespace )` will return true.

### `.unlock ( namespace?: string ): this`

`.isLocked ( namespace )` will return false.

## License

MIT © Fabio Spampinato
