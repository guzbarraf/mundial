Ext.define('MundialApp.controller.Main',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			main:{
				selector:'main'
			},
			btnACercaDe:{
				selector:'titlebar #btnACercaDe'
			}
		},
		control:{
			'titlebar #btnACercaDe':{
				tap:'fnACercaDe'
			}
		}
	},
	launch:function (){
		var me = this;
		this.getMain().setActiveItem(1);
		Ext.getStore('Mundial').load();
		//me.fnActualizar();
	},
	fnActualizar: function(){

	},
	fnACercaDe: function(){
		Ext.Msg.alert('Acerca de', 'App desarrollada por <br /> Rafael Guzmán Barranco <br /> <a href="http://guzbarraf.com">http://guzbarraf.com</a>');
	}
});