(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[97],{112:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(34),c=t(131),i=t(132),m=t(127),o=t(128);t(7);a.a=function(e){return r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement("div",{className:"page-title-box"},r.a.createElement("div",{className:"page-title-right"},r.a.createElement(m.a,null,r.a.createElement(o.a,null,r.a.createElement(l.b,{to:"/"},"Hyper")),e.breadCrumbItems.map((function(e,a){return e.active?r.a.createElement(o.a,{active:!0,key:a},e.label):r.a.createElement(o.a,{key:a},r.a.createElement(l.b,{to:e.path},e.label))})))),r.a.createElement("h4",{className:"page-title"},e.title))))}},1185:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(15),l=t(14),c=t(16),i=t(17),m=t(424),o=t(0),s=t.n(o),u=t(140),d=t(141),p=t(131),E=t(132),b=t(730),g=t(43),f=t.n(g),h=t(112),v=function(e){var a=e.color;return s.a.createElement(u.a,{className:f()("mb-0","mt-3","text-white","bg-"+a)},s.a.createElement(d.a,null,s.a.createElement("blockquote",{className:"card-bodyquote mb-0"},s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),s.a.createElement("footer",null,"Someone famous in ",s.a.createElement("cite",{title:"Source Title"},"Source Title")))))},D=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={items:[]},r.onDragEnd=r.onDragEnd.bind(Object(l.a)(r)),r}return Object(r.a)(t,[{key:"onDragEnd",value:function(e){if(e.destination){var a=function(e,a,t){var n=Array.from(e),r=n.splice(a,1),l=Object(m.a)(r,1)[0];return n.splice(t,0,l),n}(this.state.items,e.source.index,e.destination.index);this.setState({items:a})}}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{breadCrumbItems:[{label:"UI",path:"/ui/dragdrop"},{label:"Extended UI",path:"/ui/dragdrop"},{label:"Drag and Drop",path:"/ui/dragdrop",active:!0}],title:"Drag and Drop"}),s.a.createElement(p.a,null,s.a.createElement(E.a,null,s.a.createElement(b.a,{onDragEnd:this.onDragEnd},s.a.createElement(p.a,null,s.a.createElement(E.a,null,s.a.createElement(u.a,null,s.a.createElement(d.a,null,s.a.createElement(b.c,{droppableId:"droppable",direction:"horizontal"},(function(e,a){return s.a.createElement("div",{ref:e.innerRef},s.a.createElement("h4",{className:"header-title"},"Simple Drag and Drop Example"),s.a.createElement("p",{className:"text-muted font-14"},"Drag and drop cards in a list"),s.a.createElement("div",{className:"d-flex"},["primary","success","info","danger"].map((function(e,a){return s.a.createElement(b.b,{key:e,draggableId:e,index:a},(function(a,t){return s.a.createElement("div",Object.assign({className:"mr-2",ref:a.innerRef},a.draggableProps,a.dragHandleProps),s.a.createElement(v,{color:e}))}))})),e.placeholder))}))))))))))}}]),t}(o.Component);a.default=D}}]);
//# sourceMappingURL=97.7ee02c5e.chunk.js.map