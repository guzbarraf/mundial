/*
* @class MundialApp.view.todos.TodosList
* @extend Ext.List
* Lista para mostrar os todos de nuesra app
*/ 
Ext.define('MundialApp.view.mundial.Mundial',{
	extend:'Ext.List',
	alias:'widget.mundial',
	//xtype:'reporte',
	/*requires:[
		'Ext.plugin.PullRefresh'
	],*/
	config:{
		scrollable:{
			direction:'vertical'
		},
		//itemTpl:'<div>{description}<div/>',
		itemTpl:Ext.create('MundialApp.view.mundial.MundialTpl'),
		store:'Mundial'
	}
});