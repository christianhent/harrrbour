/**
 * @version     0.1 Boat.js
 * @package     Harrrbour
 * @subpackage  Views
 * @copyright   Copyright (C) 2011 Christian Hent. (hent.dev@googlemail.com).
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://zenjiapps.com
 */

App.views.Boat = Ext.extend(Ext.Panel, {
	dockedItems: [{
        xtype: 'toolbar',
        title: 'Boat Details',
		ui : 'light',
		dock: 'top',
		defaults: {
			iconMask: true,
			ui: 'plain'
		},
        items: [
            {
			xtype: 'button',
			text: 'Back',
			ui: 'back',
			handler: function() {
				Ext.dispatch({
					controller: App.controllers.Default,
					action: 'backToPanel'
				});          	
			},
			scope: this        	
			},
            {xtype:'spacer'},
			
			{
			iconCls  : 'photos2',
			handler : function(){
				 Ext.dispatch({
					controller: App.controllers.Default,
					action: 'readBoatImg'
				});          
			},
			scope: this 
            },
        ]
    }],
	initComponent: function() {	
		App.views.Boat.superclass.initComponent.apply(this, arguments);
    },
    styleHtmlContent:true,
    scroll: 'vertical',
    items: [ 
		{tpl:[
            '<div>{description}</div>'+
			'<p> source: <a href="{wikilink}" target="_blank">wikipedia</a></p>',
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