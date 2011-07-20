/**
 * @version     0.1 PortMap.js
 * @package     Harrrbour
 * @subpackage  Views
 * @copyright   Copyright (C) 2011 Christian Hent. (hent.dev@googlemail.com).
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://zenjiapps.com
 */

App.views.PortMap = Ext.extend(Ext.Panel, {
	fullscreen: false,
	dockedItems: [{
        xtype: 'toolbar',
        title: 'Port Map',
		ui : 'light',
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
					action: 'backToPort'
				});          	
			},
			scope: this        	
			},
            {xtype:'spacer'},
			{
			iconCls  : 'locate',
			handler : function(){
				Ext.dispatch({
					controller: App.controllers.Default,
					action: 'readMap'
				});
			}
            },	
        ]
    }],
    items     : [
        {
			xtype: 'map',
			fullscreen: true,
			getLocation: true,
			mapOptions: {
				zoom: 12,
				draggable: true,
				center : new google.maps.LatLng(-77.345, 25.06),
			},
		}
    ],
	updateWithRecord: function(record) {
        Ext.each(this.items.items, function(item) {
            item.update(record.data);
        });
        var toolbar = this.getDockedItems()[0];
        toolbar.setTitle(record.get('title'));
    },	
});