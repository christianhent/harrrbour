/**
 * @version     0.1 Boats.js
 * @package     Harrrbour
 * @subpackage  Stores
 * @copyright   Copyright (C) 2011 Christian Hent. (hent.dev@googlemail.com).
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://zenjiapps.com
 */

App.stores.Boats = new Ext.data.Store({
    model: 'App.models.Boats',
    getGroupString : function(record) {
        return record.get('title')[0];
    },
	proxy:
	{
		type: 'ajax',
        url: '../index.php?option=com_harbour&view=boats&sort=title&direction=asc',
		extraParams: {
			format: 'json'
		},
        reader: {},        
    },
    autoLoad: true
});