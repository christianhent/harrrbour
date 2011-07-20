/**
 * @version     0.1 Ports.js
 * @package     Harrrbour
 * @subpackage  Models
 * @copyright   Copyright (C) 2011 Christian Hent. (hent.dev@googlemail.com).
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://zenjiapps.com
 */

App.models.Ports = Ext.regModel('App.models.Ports', {
    fields: [
		{name: 'id', type: 'int'},
		{name: 'title', type: 'string'},
		{name: 'description', type: 'string'},
		{name: 'latitude', type: 'string'},
		{name: 'longitude', type: 'string'},
		{name: 'wikilink', type: 'string'},
		{name: 'wikimedia', type: 'string'},
		{name: 'image', type: 'string'},
		{name: 'flag', type: 'string'},
		{name: 'boats', type: 'string'}
    ],
});