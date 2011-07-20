/**
 * @version     0.1 Ports.js
 * @package     Harrrbour
 * @subpackage  Stores
 * @copyright   Copyright (C) 2011 Christian Hent. (hent.dev@googlemail.com).
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://zenjiapps.com
 */

App.stores.Ports = new Ext.data.Store({
    model: 'App.models.Ports',
    getGroupString : function(record) {
        return record.get('title')[0];
    },
	proxy: 
	{
		type: 'ajax',
        url: 'http://192.168.2.107/index.php?option=com_harbour&view=ports&sort=title&direction=asc',
		extraParams: {
			format: 'json'
		},
        reader: {},         
    },
    autoLoad: true
});