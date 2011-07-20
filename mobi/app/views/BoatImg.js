/**
 * @version     0.1 BoatImg.js
 * @package     Harrrbour
 * @subpackage  Views
 * @copyright   Copyright (C) 2011 Christian Hent. (hent.dev@googlemail.com).
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://zenjiapps.com
 */

App.views.BoatImg = Ext.extend(Ext.Panel, {
dockedItems: [{
        xtype: 'toolbar',
        title: 'Boat Image',
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
					action: 'backToBoat'
				});           	
			},
			scope: this        	
			},
            {xtype:'spacer'},	
        ]
    }],
    items     : [
        {tpl:[
            '<div class="image">' + 
				'<a href="{wikimedia}" target="_blank">'+
					'<img class="polaroid" src="../media/com_harbour/images/boats/{image}" />' +
				'</a>'+
			'</div>'+
			'<br />',
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