/*
* @class MundialApp.view.mundial.MundialTpl
* @extend Ext.XTemplate
* Plantilla del pendiente (reporte)
*/
Ext.define("MundialApp.view.mundial.MundialTpl",{
	extend:'Ext.XTemplate',

	constructor:function(){
		
		var html = [
			'<div class="mundial-tpl">',
				'<div class="equipos">{equipo_1}&nbsp;</div>',
				'<div class="equipos banderas" style="background-image:url(resources/images/banderas/{bandera_1}.png);"></div>',
				'<div class="equipos"> vs&nbsp;</div>',
				'<div class="equipos banderas" style="background-image:url(resources/images/banderas/{bandera_2}.png);"></div>',
				'<div class="equipos">{equipo_2}</div>',
				'<br />',
				'<div class="fecha">{dia} - {fecha} - {hora}</div>',
				'<div class="canal">{canal}</div>',
			'</div>'
		];
		this.callParent(html);
	}
});