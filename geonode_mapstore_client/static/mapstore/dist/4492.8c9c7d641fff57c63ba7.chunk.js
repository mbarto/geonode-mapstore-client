(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4492],{25970:(e,t,n)=>{var o=n(63012),r=n(79095);e.exports=function(e,t){return o(e,t,(function(t,n){return r(e,n)}))}},63012:(e,t,n)=>{var o=n(97786),r=n(10611),l=n(71811);e.exports=function(e,t,n){for(var i=-1,f=t.length,p={};++i<f;){var u=t[i],g=o(e,u);n(g,u)&&r(p,l(u,e),g)}return p}},78718:(e,t,n)=>{var o=n(25970),r=n(99021)((function(e,t){return null==e?{}:o(e,t)}));e.exports=r},94707:(e,t,n)=>{var o=n(71594).pZ;e.exports=function(e){var t=[1/0,1/0,-1/0,-1/0];return o(e,(function(e){t[0]>e[0]&&(t[0]=e[0]),t[1]>e[1]&&(t[1]=e[1]),t[2]<e[0]&&(t[2]=e[0]),t[3]<e[1]&&(t[3]=e[1])})),t}},71594:e=>{e.exports.pZ=function(e,t,n){var o,r,l,i,f,p,u,g,y,s,a=0,c="FeatureCollection"===e.type,h="Feature"===e.type,m=c?e.features.length:1;for(o=0;o<m;o++)for(u=(s="GeometryCollection"===(y=c?e.features[o].geometry:h?e.geometry:e).type)?y.geometries.length:1,i=0;i<u;i++)if(g=(p=s?y.geometries[i]:y).coordinates,a=!n||"Polygon"!==p.type&&"MultiPolygon"!==p.type?0:1,"Point"===p.type)t(g);else if("LineString"===p.type||"MultiPoint"===p.type)for(r=0;r<g.length;r++)t(g[r]);else if("Polygon"===p.type||"MultiLineString"===p.type)for(r=0;r<g.length;r++)for(l=0;l<g[r].length-a;l++)t(g[r][l]);else{if("MultiPolygon"!==p.type)throw new Error("Unknown Geometry Type");for(r=0;r<g.length;r++)for(l=0;l<g[r].length;l++)for(f=0;f<g[r][l].length-a;f++)t(g[r][l][f])}}}}]);