App.Menu = [
	{id: 0, title: 'Boats'},
	{id: 1, title: 'Ports'},
];

App.stores.Menu = new Ext.data.Store({
    model: "App.models.Menu",
	data: App.Menu,	
});