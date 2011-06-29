App.controllers.Default = new Ext.Controller({
	
	backToMenu: function(options) {
        App.views.viewport.setActiveItem(
            App.views.Menu, options.animation
        );
    },
	
	backToBoats: function(options) {	
		App.views.viewport.setActiveItem(
            App.views.Boats, options.animation
		);	
    },
	
	backToPorts: function(options) {	
		App.views.viewport.setActiveItem(
            App.views.Ports, options.animation
		);	
    },
	
	browseItems: function(options) {
        var id = parseInt(options.id);
		if (id==0) {
			App.views.viewport.setActiveItem(
				App.views.Boats, options.animation
			);
		}
		if (id==1) {
			App.views.viewport.setActiveItem(
				App.views.Ports, options.animation
			);
		}
    },
	
	readBoat: function(options) {
		var id = parseInt(options.id);
        boat = App.stores.Boats.getById(id);		
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
		if (port) {
            App.views.Port.updateWithRecord(port);
            App.views.viewport.setActiveItem(
                App.views.Port, options.animation
            );
        }
	}
	
});