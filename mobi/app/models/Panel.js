/**
 * @version     0.1 Panel.js
 * @package     Harrrbour
 * @subpackage  Models
 * @copyright   Copyright (C) 2011 Christian Hent. (hent.dev@googlemail.com).
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        http://zenjiapps.com
 */
App.models.Panel = Ext.regModel('App.models.Panel', {
    fields: [
		{name: 'id', type: 'int'},
		{name: 'title', type: 'string'}
    ]
});