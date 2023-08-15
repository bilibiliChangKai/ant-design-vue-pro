<template>
  <div>
    <div class="list">
      <a-row v-for="(item, index) in list" :key="index">
        <a-col :span="6">
          <a-select v-model="item.selectValue" style="width: 100%">
            <a-select-option v-for="option in options" :key="option.value" :value="option.value">
              {{ option.label }}
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="6">
          <a-input v-model="item.inputValue" style="width: 100%" />
        </a-col>
        <a-col :span="6">
          <a-button @click="removeRow(index)" v-if="list.length > 1">Remove</a-button>
          <a-button @click="addRow()" v-if="index === list.length - 1">Add</a-button>
        </a-col>
      </a-row>
    </div>
    <a-button type="primary" @click="submitForm">Submit</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
      list: [{ selectValue: 'option1', inputValue: '' }],
    };
  },
  methods: {
    addRow() {
      this.list.push({ selectValue: 'option1', inputValue: '' });
    },
    removeRow(index) {
      this.list.splice(index, 1);
    },
    submitForm() {
      // 在这里处理表单提交逻辑
      console.log(this.list);
    },
  },
};
</script>

<style>
.list {
  margin-bottom: 16px;
}
</style>