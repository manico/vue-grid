import { isObject } from '../../util';
import alignmentItemValues from '../../validation/alignmentItemValues';
import alignmentContentValues from '../../validation/alignmentContentValues';

const resolveAreas = (input) => {
  let output;

  if (Array.isArray(input)) {
    output = input.map((n) => {
      if (Array.isArray(n)) {
        return n.map(m => `"${m}"`).join(' ');
      }

      return `"${n}"`;
    }).join(' ');
  } else {
    output = input;
  }

  return output;
};

const resolveSizeObject = (input, isRepeatable, isNameable) => {
  let output;

  if (isObject(input)) {
    if (input.min && input.max) {
      output = `minmax(${input.min}, ${input.max})`;
    } else if (input.fit) {
      output = `fit-content(${input.fit})`;
    } else if (isRepeatable && input.repeat) {
      output = `repeat(${input.repeat.count}, ${input.repeat.value})`;
    } else if (isNameable && input.name) {
      output = `[${input.name}]`;
    }
  } else {
    output = input;
  }

  return output;
};

const resolveSize = (input, isRepeatable, isNameable) => {
  let output;

  if (Array.isArray(input)) {
    if (input.length === 1) {
      output = resolveSizeObject(input[0], isRepeatable, isNameable);
    } else if (input.length === 2) {
      output = `minmax(${input[0]}, ${input[1]})`;
    } else {
      output = input.map(n => resolveSizeObject(n, isRepeatable, isNameable)).join(' ');
    }
  } else {
    output = resolveSizeObject(input, isRepeatable, isNameable);
  }

  return output;
};

export default {
  name: 'v-grid',
  props: {
    alignContent: {
      type: String,
      validator(value) {
        return alignmentContentValues.indexOf(value) > -1;
      },
    },
    alignItems: {
      type: String,
      validator(value) {
        return alignmentItemValues.indexOf(value) > -1;
      },
    },
    autoColumns: {
      type: [String, Array],
    },
    autoRows: {
      type: [String, Array],
    },
    columnGap: {
      type: String,
    },
    gap: {
      type: [String, Array],
    },
    justifyContent: {
      type: String,
      validator(value) {
        return alignmentContentValues.indexOf(value) > -1;
      },
    },
    justifyItems: {
      type: String,
      validator(value) {
        return alignmentItemValues.indexOf(value) > -1;
      },
    },
    rowGap: {
      type: String,
    },
    templateAreas: {
      type: [String, Array],
    },
    templateColumns: {
      type: [String, Array],
    },
    templateRows: {
      type: [String, Array],
    },
  },
  data() {
    return {
    };
  },
  computed: {
    gridAutoRows() {
      return resolveSize(this.autoRows);
    },
    gridAutoColumns() {
      return resolveSize(this.autoColumns);
    },
    gridGap() {
      if (this.rowGap && this.columnGap) {
        return `${this.rowGap} ${this.columnGap}`;
      }

      return this.gap;
    },
    gridTemplateAreas() {
      return resolveAreas(this.templateAreas);
    },
    gridTemplateColumns() {
      return resolveSize(this.templateColumns, true, true);
    },
    gridTemplateRows() {
      return resolveSize(this.templateRows, true, true);
    },
  },
  methods: {
  },
  render(h) {
    return h('div', {
      style: {
        alignContent: this.alignContent,
        justifyContent: this.justifyContent,
        alignItems: this.alignItems,
        justifyItems: this.justifyItems,
        display: 'grid',
        gridTemplateAreas: this.gridTemplateAreas,
        gridAutoColumns: this.gridAutoColumns,
        gridAutoRows: this.gridAutoRows,
        gridGap: this.gridGap,
        gridTemplateColumns: this.gridTemplateColumns,
        gridTemplateRows: this.gridTemplateRows,
      },
    }, this.$slots.default);
  },
};
