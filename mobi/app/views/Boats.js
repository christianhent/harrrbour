App.views.Boats = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Boats List',
		items: [
			{
				xtype: 'button',
				text: 'Back',
				ui: 'back',
				handler: function() {
					Ext.dispatch({
						controller: App.controllers.Default,
						action: 'backToMenu'
					});          	
				},
				scope: this        	
			}
		]
    }],
    items: [
		{
			xtype: 'list',
			store: App.stores.Boats,
			itemTpl: '{title}',
			onItemDisclosure: function (record) {
				Ext.dispatch({
				    controller: App.controllers.Default,
				    action: 'readBoat',
				    id: record.getId()
				});
			},
			grouped: false,
			indexBar: false,
			scroll: 'vertical',
			fullscreen: true
		},
	]
});