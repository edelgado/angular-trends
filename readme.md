# Angular Trends

Angular App to show the Google trends of other JS frameworks. Compares AngularJS, Backbone, and one other.

* Shows a D3js graph with the data that comes from:
* http://www.google.com/trends/fetchComponent?q=angularjs,backbone,etc&cid=TIMESERIES_GRAPH_0&export=3

## Instructions

* Run the Node.js server: `node dataServer.js`
* At the root of the project, run a webserver: `python -m SimpleHTTPServer`
* Open http://0.0.0.0:8000/index.html in your favorite modern browser.

## To-Do
- [ ] Elaborate on `dataServer.js` to fetch the data.
- [ ] Use D3.js to chart the trends.
- [ ] Use Angular's views to hold the charts.