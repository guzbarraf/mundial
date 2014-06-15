/**
* @class MundialApp.model.Mundial
* @extends Ext.data.Model
* Este es el modelo para el reporte ("reporte")
*/
Ext.define('MundialApp.model.Mundial',{
	extend:'Ext.data.Model',
	config:{
		fields:[{
			name:'equipo_1'
		},{
			name:'bandera_1'
		},{
			name:'equipo_2'
		},{
			name:'bandera_2'
		},{
			name:'dia'
		},{
			name:'fecha'
		},{
			name:'hora'
		},{
			name:'grupo'
		},{
			name:'ciudad'
		},{
			name:'canal'
		}

		],
		proxy:{
			type:'ajax',
			url: 'calendario.json'/*,
			reader:{
				type:'json',
				rootProperty:'datos'
			}*/
		}
	}
});