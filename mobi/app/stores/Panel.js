/**
 * @version     0.1 Panel.js
 * @package     Harrrbour
 * @subpackage  Stores
 * @copyright   Copyright (C) 2011 Christian Hent. (hent.dev@googlemail.com).
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://zenjiapps.com
 */

App.Panel = [
	{id: 0, title: 'Boats'},
	{id: 1, title: 'Ports'},
	{id: 2, title: 'Notes'},
];

App.stores.Panel = new Ext.data.Store({
    model: 'App.models.Panel',
	data: App.Panel,	
});