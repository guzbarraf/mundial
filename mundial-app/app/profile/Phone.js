Ext.define('MundialApp.profile.Phone', {
	extend:'Ext.app.Profile',

	config:{
		name:'phone',
		namespace:'phone',
		controllers:['Main'],
		views:['Main']
	},

	isActive: function(){
		return Ext.os.is.Phone;
	},

	launch: function(){
		// Initialize the main view
        Ext.Viewport.add(Ext.create('MundialApp.view.phone.Main'));
	}

});