/**
 * @version     0.1 Viewport.js
 * @package     Harrrbour
 * @subpackage  Views
 * @copyright   Copyright (C) 2011 Christian Hent. (hent.dev@googlemail.com).
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://zenjiapps.com
 */

App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        Ext.apply(App.views, {
			Panel: new App.views.Panel(),
			Boat: new App.views.Boat(),
			Port: new App.views.Port(),
			BoatImg: new App.views.BoatImg(),
			PortImg: new App.views.PortImg(),
			PortMap: new App.views.PortMap(),
        });
        Ext.apply(this, {
            items: [
				App.views.Panel,
				App.views.Boat,
				App.views.Port,
				App.views.BoatImg,
				App.views.PortImg,
				App.views.PortMap,
            ]
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
	layoutOrientation : function(orientation, w, h) {
        App.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});