Ext.define('MundialApp.store.Mundial', {
    extend: 'Ext.data.Store',
	requires:['MundialApp.model.Mundial'],
    config: {
        model: 'MundialApp.model.Mundial',
        listeners:{
			beforeload:function(store, operation, ops){
				console.log(arguments);
				var obj = {
					auth_token: localStorage.getItem('token_rpt')
				};
				store.getProxy().setExtraParams(obj);
			}
		}
        /*autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'http://localhost/Colletores/?mod=list_clientes'
        }*/
    }
});