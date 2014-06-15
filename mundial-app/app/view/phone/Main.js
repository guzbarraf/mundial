Ext.define('MundialApp.view.phone.Main',{
	extend:'MundialApp.view.Main',
	config:{
		layout:'card',
		activeItem:0,
		items:[{
            xtype:'container',
            layout:'fit',
            items:[{
                xtype:'titlebar',
                docked:'top',
                title:'Calendario',
                items:[/*{
                    itemId:'btnSendMail',
                    align:'left',
                    text:'Enviar Correo'
                },*/{
                    itemId:'btnACercaDe',
                    align:'right',
                    text:'Acerca de'
                }]
            },{
                xtype:'mundial'
            }/*,{
                xtype:'titlebar',
                docked:'bottom',
                items:[{
                    text:'Pendientes',
                    itemId:'pendientes',
                    ui:'btn-danger-ui',
                    align:'left',
                    scope: this
                },{
                    text:'Terminados',
                    itemId:'terminados',
                    ui:'btn-done-ui',
                    align:'right',
                    scope: this
                }]
            }*/]
        }]
	}
});