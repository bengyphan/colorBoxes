(this["webpackJsonpcolored-boxes"]=this["webpackJsonpcolored-boxes"]||[]).push([[0],[,,,,,function(e,n,o){},,,,,,,,,function(e,n,o){},function(e,n,o){},function(e,n,o){},function(e,n,o){"use strict";o.r(n);var t=o(0),r=o(1),c=o.n(r),l=o(6),s=o.n(l),i=(o(14),o(15),o(7)),a=o(8),u=(o(16),function(e){var n=e.color,o=e.isSelected;return Object(t.jsx)("div",{className:"Box",style:{backgroundColor:n,width:"15%",height:"100px"},children:o?"clicked":null})}),d=(o(5),function(e){var n=e.boxes;return Object(t.jsx)("div",{className:"ColorBoxGrid",children:n.map((function(e,n){return Object(t.jsx)(u,{color:e.color,isSelected:e.isSelected},n)}))})});function h(e){return e[Math.floor(Math.random()*e.length)]}var j=function(e){var n=Object(r.useState)(Array.from({length:e.numBoxes},(function(){return{color:h(e.colors),isSelected:!1}}))),o=Object(a.a)(n,2),c=o[0],l=o[1];return Object(t.jsxs)("div",{className:"ColorBoxes",children:[Object(t.jsx)("h1",{children:"Color Boxes"}),Object(t.jsx)(d,{boxes:c}),Object(t.jsx)("button",{onClick:function(){var n=Math.floor(Math.random()*e.numBoxes);l((function(o){var t=Object(i.a)(o);return t[n].color=h(e.colors),t.map((function(e){return e.isSelected=!1})),t[n].isSelected=!0,t}))},children:"Change"})]})};j.defaultProps={numBoxes:16,colors:["Aqua","Black","BlanchedAlmond","Blue","Chocolate","DodgerBlue","Lavender","LawnGreen","Peru","Plum","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Yellow","YellowGreen"]};var b=j;var x=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,18)).then((function(n){var o=n.getCLS,t=n.getFID,r=n.getFCP,c=n.getLCP,l=n.getTTFB;o(e),t(e),r(e),c(e),l(e)}))};s.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(x,{})}),document.getElementById("root")),f()}],[[17,1,2]]]);
//# sourceMappingURL=main.35f143a8.chunk.js.map