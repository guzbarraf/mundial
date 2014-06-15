/*
*@class MundialApp.controller.phone.Main
*@extends MundialApp.controller.Main
*para la version de telefono
*/
Ext.define('MundialApp.controller.phone.Main',{
	extend:'MundialApp.controller.Main',
	config:{
		control:{
			'titlebar #pendientes':{
				tap:'listarTodosPendientes'
			},
			'titlebar #terminados':{
				tap:'listarTodosTerminados'
			},
			'titlebar #salir':{
				tap:'onLogoutUser'
			}
		}
	}
});