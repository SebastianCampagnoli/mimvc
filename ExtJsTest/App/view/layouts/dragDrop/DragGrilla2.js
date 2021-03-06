﻿Ext.define('MiMvc5.view.layouts.dragDrop.DragGrilla2', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.dragGrilla2',

	viewConfig: {
		plugins: {
			ptype: 'gridviewdragdrop',
			dragText: 'Reordenar la Familia'
		}
	},
	width: 350,
	height: 200,
	border:true,

	title: 'The Simpsons 2 - Proxy:ajax/json',
	tools: [{
		type: 'refresh',
		tooltip: 'Orden inicial',
		scope: this,
		handler: this.onResetClick
	}],
	
	initComponent: function () {
		
		this.store = {
			autoLoad: true,
			model: Ext.define('MiMvc5.model.User', {
				extend: 'Ext.data.Model',
				fields: ['nombre', 'funcion'],
				proxy: {
					type: 'ajax',
					api: {
						read: 'api/drags'
					},
					reader: {
						type: 'json',
						root: 'results',
						successProperty: 'success',
						totalProperty: 'totalCount'
					}
				}
			})
		};

		this.columns = [
			{ header: 'Nombres', dataIndex: 'nombre', flex: 1 },
			{ header: 'Funcion', dataIndex: 'funcion', flex: 1 }
		];

		this.callParent(arguments);
	},
	onResetClick: function () {
		
		//como recargo los datos iniciales?
		
		//this.down('grid').getStore().loadData(data);
		//grid.store.load();
		//this.down('grid').store.load();
	}


});