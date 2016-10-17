define("sap_viz_ext_sortablestackedbars-src/js/flow", ["sap_viz_ext_sortablestackedbars-src/js/module"], function(moduleFunc) {
	var flowRegisterFunc = function() {
		var flow = sap.viz.extapi.Flow.createFlow({
			id: "sap.viz.ext.sortablestackedbars",
			name: "SortableStackedBars",
			dataModel: "sap.viz.api.data.CrosstableDataset",
			type: "BorderSVGFlow"
		});

		var titleElement = sap.viz.extapi.Flow.createElement({
			id: "sap.viz.chart.elements.Title",
			name: "Title"
		});
		flow.addElement({
			"element": titleElement,
			"propertyCategory": "title",
			"place": "top"
		});
		

		var element = sap.viz.extapi.Flow.createElement({
			id: "sap.viz.ext.sortablestackedbars.PlotModule",
			name: "SortableStackedBars Module"
		});
		element.implement("sap.viz.elements.common.BaseGraphic", moduleFunc);

		/*Feeds Definition*/
		var ds1 = {
			"id": "sap.viz.ext.sortablestackedbars.PlotModule.DS1",
			"name": "Y Axis",
			"type": "Dimension",
			"min": 1, //minimum number of data container
			"max": 1, //maximum number of data container
			"aaIndex": 1
		};
		element.addFeed(ds1);

		var ms1 = {
			"id": "sap.viz.ext.sortablestackedbars.PlotModule.MS1",
			"name": "X Axis",
			"type": "Measure",
			"min": 1, //minimum number of measures
			"max": Infinity, //maximum number of measures
			"mgIndex": 1
		};
		element.addFeed(ms1);

		element.addProperty({
			name: "colorPalette",
			type: "StringArray",
			supportedValues: "",
			defaultValue: d3.scale.category20().range().concat(d3.scale.category20b().range()).concat(d3.scale.category20c().range())
		});

		flow.addElement({
			"element": element,
			"propertyCategory": "plotArea"
		});
		sap.viz.extapi.Flow.registerFlow(flow);
	};
	flowRegisterFunc.id = "sap.viz.ext.sortablestackedbars";
	return {
		id: flowRegisterFunc.id,
		init: flowRegisterFunc
	};
});