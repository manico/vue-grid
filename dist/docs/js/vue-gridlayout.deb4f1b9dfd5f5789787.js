webpackJsonp([2],{27:function(t,n,r){"use strict";var e=r(43),i=r(44);r.d(n,"a",function(){return e.a}),r.d(n,"b",function(){return i.a}),e.a.install=function(t){t.component(e.a.name,e.a),t.component(i.a.name,i.a)};e.a},28:function(t,n,r){"use strict";n.a=["auto","normal","start","end","center","stretch","baseline","first baseline","last baseline"]},40:function(t,n){},43:function(t,n,r){"use strict";var e=r(47),i=r(28),a=r(48),o=r(50),u=r(49),s=function(t){return Array.isArray(t)?t.map(function(t){return Array.isArray(t)?t.map(function(t){return'"'+t+'"'}).join(" "):'"'+t+'"'}).join(" "):t},l=function(t,n,i){var a=void 0;return r.i(e.a)(t)?t.min&&t.max?a="minmax("+t.min+", "+t.max+")":t.fit?a="fit-content("+t.fit+")":n&&t.repeat?a="repeat("+t.repeat.count+", "+t.repeat.value+")":i&&t.name&&(a="["+t.name+"]"):a=t,a},d=function(t,n,r){return Array.isArray(t)?1===t.length?l(t[0],n,r):2===t.length?"minmax("+t[0]+", "+t[1]+")":t.map(function(t){return l(t,n,r)}).join(" "):l(t,n,r)};n.a={name:"v-grid",props:{alignContent:{type:String,validator:function(t){return a.a.indexOf(t)>-1}},alignItems:{type:String,validator:function(t){return i.a.indexOf(t)>-1}},autoColumns:{type:[String,Array]},autoFlow:{type:String,validator:function(t){return u.a.indexOf(t)>-1}},autoRows:{type:[String,Array]},columnGap:{type:String},gap:{type:[String,Array]},justifyContent:{type:String,validator:function(t){return a.a.indexOf(t)>-1}},justifyItems:{type:String,validator:function(t){return i.a.indexOf(t)>-1}},rowGap:{type:String},tag:{type:String,default:"div",validator:function(t){return t.length>0}},templateAreas:{type:[String,Array]},templateColumns:{type:[String,Array]},templateRows:{type:[String,Array]},writingMode:{type:String,validator:function(t){return o.a.indexOf(t)>-1}}},data:function(){return{}},computed:{gridAutoRows:function(){return d(this.autoRows)},gridAutoColumns:function(){return d(this.autoColumns)},gridGap:function(){return this.rowGap&&this.columnGap?this.rowGap+" "+this.columnGap:this.gap},gridTemplateAreas:function(){return s(this.templateAreas)},gridTemplateColumns:function(){return d(this.templateColumns,!0,!0)},gridTemplateRows:function(){return d(this.templateRows,!0,!0)}},methods:{},render:function(t){return t(this.tag,{style:{alignContent:this.alignContent,justifyContent:this.justifyContent,alignItems:this.alignItems,justifyItems:this.justifyItems,display:"grid",gridTemplateAreas:this.gridTemplateAreas,gridAutoColumns:this.gridAutoColumns,gridAutoFlow:this.autoFlow,gridAutoRows:this.gridAutoRows,gridGap:this.gridGap,gridTemplateColumns:this.gridTemplateColumns,gridTemplateRows:this.gridTemplateRows,writingMode:this.writingMode}},this.$slots.default)}}},44:function(t,n,r){"use strict";var e=r(52),i=r.n(e),a=r(28),o=function(t,n){return i()(t)&&n?"span "+t:t};n.a={name:"v-grid-item",props:{align:{type:String,validator:function(t){return a.a.indexOf(t)>-1}},area:{type:String},columnStart:{type:[Number,String]},columnStartSpan:{type:Boolean,default:!1},columnEnd:{type:[Number,String]},columnEndSpan:{type:Boolean,default:!1},justify:{type:String,validator:function(t){return a.a.indexOf(t)>-1}},rowStart:{type:[Number,String]},rowStartSpan:{type:Boolean,default:!1},rowEnd:{type:[Number,String]},rowEndSpan:{type:Boolean,default:!1},stackIndex:{type:Number},tag:{type:String,default:"div",validator:function(t){return t.length>0}}},data:function(){return{}},computed:{gridColumnStart:function(){return o(this.columnStart,this.columnStartSpan)},gridColumnEnd:function(){return o(this.columnEnd,this.columnEndSpan)},gridRowStart:function(){return o(this.rowStart,this.rowStartSpan)},gridRowEnd:function(){return o(this.rowEnd,this.rowEndSpan)}},methods:{},render:function(t){return t(this.tag,{style:{alignSelf:this.align,gridArea:this.area,gridColumnStart:this.gridColumnStart,gridColumnEnd:this.gridColumnEnd,gridRowStart:this.gridRowStart,gridRowEnd:this.gridRowEnd,justifySelf:this.justify,zIndex:this.stackIndex}},this.$slots.default)}}},46:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r(40),i=(r.n(e),r(27));r.d(n,"VGrid",function(){return i.a}),r.d(n,"VGridItem",function(){return i.b})},47:function(t,n,r){"use strict";function e(t){return null!==t&&"object"===(void 0===t?"undefined":a()(t))}n.a=e;var i=r(55),a=r.n(i)},48:function(t,n,r){"use strict";n.a=["normal","start","end","center","stretch","space-around","space-between","space-evenly","baseline","first baseline","last baseline"]},49:function(t,n,r){"use strict";n.a=["row","column","dense","row dense","column dense"]},50:function(t,n,r){"use strict";n.a=["horizontal-tb","vertical-rl","vertical-lr","sideways-rl","sideways-lr"]}},[46]);
//# sourceMappingURL=vue-gridlayout.deb4f1b9dfd5f5789787.js.map