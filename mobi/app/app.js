/**
 * @version     0.1 app.js
 * @package     Harrrbour
 * @subpackage  App
 * @copyright   Copyright (C) 2011 Christian Hent. (hent.dev@googlemail.com).
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://zenjiapps.com
 */

Ext.regApplication({
    name: 'App',
    launch: function() {
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
		//if (!device || !this.launched) {return;}
		this.views.viewport = new this.views.Viewport();
	}
});