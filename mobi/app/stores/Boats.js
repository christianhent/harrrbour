App.stores.Boats = new Ext.data.Store({
    model: "App.models.Boats",
    getGroupString : function(record) {
        return record.get('title')[0];
    },
	proxy:
	{
		type: 'ajax',
        url: 'http://192.168.2.107/index.php?option=com_harbour&view=boats&sort=title&direction=asc',
		extraParams: {
			format: 'json'
		},
        reader: {},        
    },
    autoLoad: true
});