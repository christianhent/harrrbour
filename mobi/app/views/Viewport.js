App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        Ext.apply(App.views, {
			Menu: new App.views.Menu(),
			Boats: new App.views.Boats(),
			Ports: new App.views.Ports(),
			Boat: new App.views.Boat(),
			Port: new App.views.Port(),
        });
        Ext.apply(this, {
            items: [
				App.views.Menu,
				App.views.Boats,
				App.views.Ports,
				App.views.Boat,
				App.views.Port
            ]
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
	layoutOrientation : function(orientation, w, h) {
        App.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});