/**
 * @version     0.1 Default.js
 * @package     Harrrbour
 * @subpackage  Controller
 * @copyright   Copyright (C) 2011 Christian Hent. (hent.dev@googlemail.com).
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://zenjiapps.com
 */

var portID = 0;
var boatID = 0;

App.controllers.Default = new Ext.Controller({
	
	readBoat: function(options) {
		var id = parseInt(options.id);
        boat = App.stores.Boats.getById(id);
		boatID = id;		
		if (boat) {
            App.views.Boat.updateWithRecord(boat);
            App.views.viewport.setActiveItem(
                App.views.Boat, options.animation
            );
        }
	},
	
	readPort: function(options) {
		var id = parseInt(options.id);
        port = App.stores.Ports.getById(id);
		portID = id;
		if (port) {
            App.views.Port.updateWithRecord(port);
            App.views.viewport.setActiveItem(
                App.views.Port, options.animation
            );
        }
	},
	
	readBoatImg: function(options) {
			boat = App.stores.Boats.getById(boatID);			
			if (boat) {
				App.views.BoatImg.updateWithRecord(boat);
				App.views.viewport.setActiveItem(
					App.views.BoatImg, options.animation
				);
			}
	},
	
	readPortImg: function(options) {
			port = App.stores.Ports.getById(portID);			
			if (port) {
				App.views.PortImg.updateWithRecord(port);
				App.views.viewport.setActiveItem(
					App.views.PortImg, options.animation
				);
			}
	},
	
	readPortMap: function(options) {
			port = App.stores.Ports.getById(portID);			
			if (port) {
				App.views.PortMap.updateWithRecord(port);
				App.views.viewport.setActiveItem(
					App.views.PortMap, options.animation
				);
			}
	},
	
	backToPanel: function(options) {
        App.views.viewport.setActiveItem(
            App.views.Panel, options.animation
			
        );
    },
	
	backToPort: function(options) {
            App.views.viewport.setActiveItem(
                App.views.Port, options.animation
            );
	},
	
	backToBoat: function(options) {
            App.views.viewport.setActiveItem(
                App.views.Boat, options.animation
            );
	},
	
});