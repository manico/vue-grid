webpackJsonp([2],{27:function(t,n,r){"use strict";var i=r(43),e=r(44);r.d(n,"a",function(){return i.a}),r.d(n,"b",function(){return e.a}),i.a.install=function(t){t.component(i.a.name,i.a),t.component(e.a.name,e.a)};i.a},28:function(t,n,r){"use strict";n.a=["auto","normal","start","end","center","stretch","baseline","first baseline","last baseline"]},40:function(t,n){},43:function(t,n,r){"use strict";var i=r(47),e=r(28),a=r(48),o=r(49),u=function(t){return Array.isArray(t)?t.map(function(t){return Array.isArray(t)?t.map(function(t){return'"'+t+'"'}).join(" "):'"'+t+'"'}).join(" "):t},s=function(t,n,e){var a=void 0;return r.i(i.a)(t)?t.min&&t.max?a="minmax("+t.min+", "+t.max+")":t.fit?a="fit-content("+t.fit+")":n&&t.repeat?a="repeat("+t.repeat.count+", "+t.repeat.value+")":e&&t.name&&(a="["+t.name+"]"):a=t,a},l=function(t,n,r){return Array.isArray(t)?1===t.length?s(t[0],n,r):2===t.length?"minmax("+t[0]+", "+t[1]+")":t.map(function(t){return s(t,n,r)}).join(" "):s(t,n,r)};n.a={name:"v-grid",props:{alignContent:{type:String,validator:function(t){return a.a.indexOf(t)>-1}},alignItems:{type:String,validator:function(t){return e.a.indexOf(t)>-1}},autoColumns:{type:[String,Array]},autoFlow:{type:String},autoRows:{type:[String,Array]},columnGap:{type:String},gap:{type:[String,Array]},justifyContent:{type:String,validator:function(t){return a.a.indexOf(t)>-1}},justifyItems:{type:String,validator:function(t){return e.a.indexOf(t)>-1}},rowGap:{type:String},templateAreas:{type:[String,Array]},templateColumns:{type:[String,Array]},templateRows:{type:[String,Array]},writingMode:{type:String,validator:function(t){return o.a.indexOf(t)>-1}}},data:function(){return{}},computed:{gridAutoRows:function(){return l(this.autoRows)},gridAutoColumns:function(){return l(this.autoColumns)},gridGap:function(){return this.rowGap&&this.columnGap?this.rowGap+" "+this.columnGap:this.gap},gridTemplateAreas:function(){return u(this.templateAreas)},gridTemplateColumns:function(){return l(this.templateColumns,!0,!0)},gridTemplateRows:function(){return l(this.templateRows,!0,!0)}},methods:{},render:function(t){return t("div",{style:{alignContent:this.alignContent,justifyContent:this.justifyContent,alignItems:this.alignItems,justifyItems:this.justifyItems,display:"grid",gridTemplateAreas:this.gridTemplateAreas,gridAutoColumns:this.gridAutoColumns,gridAutoFlow:this.autoFlow,gridAutoRows:this.gridAutoRows,gridGap:this.gridGap,gridTemplateColumns:this.gridTemplateColumns,gridTemplateRows:this.gridTemplateRows,writingMode:this.writingMode}},this.$slots.default)}}},44:function(t,n,r){"use strict";var i=r(51),e=r.n(i),a=r(28),o=function(t,n){return e()(t)&&n?"span "+t:t};n.a={name:"v-grid-item",props:{align:{type:String,validator:function(t){return a.a.indexOf(t)>-1}},area:{type:String},columnStart:{type:[Number,String]},columnStartSpan:{type:Boolean,default:!1},columnEnd:{type:[Number,String]},columnEndSpan:{type:Boolean,default:!1},justify:{type:String,validator:function(t){return a.a.indexOf(t)>-1}},rowStart:{type:[Number,String]},rowStartSpan:{type:Boolean,default:!1},rowEnd:{type:[Number,String]},rowEndSpan:{type:Boolean,default:!1},stackIndex:{type:Number}},data:function(){return{}},computed:{gridColumnStart:function(){return o(this.columnStart,this.columnStartSpan)},gridColumnEnd:function(){return o(this.columnEnd,this.columnEndSpan)},gridRowStart:function(){return o(this.rowStart,this.rowStartSpan)},gridRowEnd:function(){return o(this.rowEnd,this.rowEndSpan)}},methods:{},render:function(t){return t("div",{style:{alignSelf:this.align,gridArea:this.area,gridColumnStart:this.gridColumnStart,gridColumnEnd:this.gridColumnEnd,gridRowStart:this.gridRowStart,gridRowEnd:this.gridRowEnd,justifySelf:this.justify,zIndex:this.stackIndex}},this.$slots.default)}}},46:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=r(40),e=(r.n(i),r(27));r.d(n,"VGrid",function(){return e.a}),r.d(n,"VGridItem",function(){return e.b})},47:function(t,n,r){"use strict";function i(t){return null!==t&&"object"===(void 0===t?"undefined":a()(t))}n.a=i;var e=r(54),a=r.n(e)},48:function(t,n,r){"use strict";n.a=["normal","start","end","center","stretch","space-around","space-between","space-evenly","baseline","first baseline","last baseline"]},49:function(t,n,r){"use strict";n.a=["horizontal-tb","vertical-rl","vertical-lr","sideways-rl","sideways-lr"]}},[46]);
//# sourceMappingURL=vue-gridlayout.bc3436cea01bf76370d1.js.map