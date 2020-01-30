const Svgo = require('svgo');

const svgo = new Svgo({
    plugins: [{
      cleanupAttrs: true,
    }, {
      removeDoctype: true,
    },{
      removeXMLProcInst: true,
    },{
      removeComments: true,
    },{
      removeMetadata: true,
    },{
      removeTitle: true,
    },{
      removeDesc: true,
    },{
      removeUselessDefs: true,
    },{
      removeEditorsNSData: true,
    },{
      removeEmptyAttrs: true,
    },{
      removeHiddenElems: true,
    },{
      removeEmptyText: true,
    },{
      removeEmptyContainers: true,
    },{
      removeViewBox: false,
    },{
      cleanupEnableBackground: true,
    },{
      convertStyleToAttrs: true,
    },{
      convertColors: true,
    },{
      convertPathData: true,
    },{
      convertTransform: true,
    },{
      removeUnknownsAndDefaults: true,
    },{
      removeNonInheritableGroupAttrs: true,
    },{
      removeUselessStrokeAndFill: true,
    },{
      removeUnusedNS: true,
    },{
      cleanupIDs: true,
    },{
      cleanupNumericValues: true,
    },{
      moveElemsAttrsToGroup: true,
    },{
      moveGroupAttrsToElems: true,
    },{
      collapseGroups: true,
    },{
      removeRasterImages: false,
    },{
      mergePaths: true,
    },{
      convertShapeToPath: true,
    },{
      sortAttrs: true,
    },{
      removeDimensions: true,
    }]
  });


module.exports = function(src){

    var callback = this.async();
    svgo.optimize(src).then((result) => {callback(null, result.data);});
    return;
}