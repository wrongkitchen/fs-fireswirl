/**
*   App Spec Test
*/

'use strict';

describe('just checking', function() {

    it('works for app', function() {
        var msg = 'Welcome to yeogurt!';

        var message = app.init(msg);

        
        expect(message).toMatch(/initialized/);
    });

});
