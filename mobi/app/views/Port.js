App.views.Port = Ext.extend(Ext.Panel, {
	dockedItems: [{
        xtype: 'toolbar',
        title: 'Port Details',
        items: [
            {
			xtype: 'button',
			text: 'Back',
			ui: 'back',
			handler: function() {
				Ext.dispatch({
					controller: App.controllers.Default,
					action: 'backToPorts'
				});          	
			},
			scope: this        	
			},
            {xtype:'spacer'}
        ]
    }],
	initComponent: function() {	
        App.views.Port.superclass.initComponent.apply(this, arguments);
    },
    styleHtmlContent:true,
    scroll: 'vertical',
    items: [
		{tpl:[
            '<h4>{description}</h4>'
        ]}
	],
	updateWithRecord: function(record) {
        Ext.each(this.items.items, function(item) {
            item.update(record.data);
        });
        var toolbar = this.getDockedItems()[0];
        toolbar.setTitle(record.get('title'));
    },
});