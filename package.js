Package.describe({
  summary: "Dagre plugin for jointjs."
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.use('joint', 'client');
  api.add_files(['joint.layout.DirectedGraph.js'], 'client');
});
