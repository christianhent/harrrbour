/**
 * @version     0.1 Boats.js
 * @package     Harrrbour
 * @subpackage  Models
 * @copyright   Copyright (C) 2011 Christian Hent. (hent.dev@googlemail.com).
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://zenjiapps.com
 */

App.models.Boats = Ext.regModel('App.models.Boats', {
    fields: [
		{name: 'id', type: 'int'},
		{name: 'port_title', type: 'string'},
		{name: 'title', type: 'string'},
		{name: 'description', type: 'string'},
		{name: 'wikilink', type: 'string'},
		{name: 'wikimedia', type: 'string'},
		{name: 'image', type: 'string'},
		{name: 'flag', type: 'string'}
    ]
});