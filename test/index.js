
/* IMPORT */

import {describe} from 'ava-spec';
import Lockable from '../dist';

/* LOCKABLE */

describe ( 'Lockable', it => {

  it.beforeEach ( t => {

    t.context.L = new Lockable ();

  });

  it ( 'Is unlocked by default', t => {

    t.false ( t.context.L.isLocked () );

  });

  describe ( 'isLocked', it => {

    it ( 'Checks if a lock is active', t => {

      const namespaces = [undefined, 'ns1', 'ns2'];

      for ( let namespace of namespaces ) {

        t.false ( t.context.L.isLocked ( namespace ) );
        t.context.L.lock ( namespace );
        t.true ( t.context.L.isLocked ( namespace ) );

      }

    });

  });

  describe ( 'lock', it => {

    it ( 'Sets a lock to true', t => {

      const namespaces = [undefined, 'ns1', 'ns2'];

      for ( let namespace of namespaces ) {

        t.false ( t.context.L.isLocked ( namespace ) );
        t.context.L.lock ( namespace );
        t.true ( t.context.L.isLocked ( namespace ) );

      }

    });

  });

  describe ( 'unlock', it => {

    it ( 'Removes a lock', t => {

      const namespaces = [undefined, 'ns1', 'ns2'];

      for ( let namespace of namespaces ) {

        t.false ( t.context.L.isLocked ( namespace ) );
        t.context.L.lock ( namespace );
        t.context.L.unlock ( namespace );
        t.false ( t.context.L.isLocked ( namespace ) );

      }

    });

  });

});
