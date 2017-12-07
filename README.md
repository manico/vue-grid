[![Build Status](https://travis-ci.org/manico/vue-gridlayout.svg?branch=master)](https://travis-ci.org/manico/vue-gridlayout)

# vue-gridlayout

> Vue implementation of css grid layout

## Installation

```bash
# npm
npm install vue-gridlayout
```

## Using

### Import globally

```javascript
import Vue from 'vue';
import { VGrid } from 'vue-gridlayout';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VGrid);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
```

### Import locally

```javascript
import { VGrid, VGridItem } from 'vue-gridlayout';

export default {
  name: 'app',
  components: {
    VGrid,
    VGridItem,
  },
  data() {
    return {
    };
  },
};
```

### Use in template

```html
<template>
  <div id="app">
    <v-grid class="grid"
            template-columns="2fr 1fr 1fr"
            :auto-rows="['50px', '120px']"
            gap="10px">
      <v-grid-item :column-start="1"
                   :column-end="4">
      </v-grid-item>
      <v-grid-item></v-grid-item>
      <v-grid-item></v-grid-item>
      <v-grid-item></v-grid-item>
      <v-grid-item :column-start="1"
                   :column-end="4">
      </v-grid-item>
    </v-grid>
  </div>
</template>
```
