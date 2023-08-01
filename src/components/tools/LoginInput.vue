<template>
    <a-card>
        <a-text>URI: </a-text>
        <a-input v-model="url" style="width: 300px" />
        <a-text style="margin-left: 50px">API: </a-text>
        <a-input v-model="api" style="width: 300px" />
        <a-table :columns="columns" :dataSource="dataSource" row-key="key">
            <template #key="text">
                {{ text + 1 }}
            </template>
            <template #options="text">
                <a-select v-model="text.options" style="width: 100px">
                    <a-select-option value="string">String</a-select-option>
                    <a-select-option value="int64">Int64</a-select-option>
                    <a-select-option value="int32">Int32</a-select-option>
                    <a-select-option value="bool">Bool</a-select-option>
                </a-select>
            </template>
            
            <template #property="text">
                <a-input v-model="text.property" style="width: 200px" />
            </template>
            <template #input="text">
                <a-input v-model="text.input" style="width: 200px" />
            </template>
        </a-table>
        <a-button type="primary" style="margin: 20px" @click="addRow">加入一行</a-button>
        <a-button type="primary" style="margin: 20px" @click="removeRow">删除一行</a-button>
        <a-button type="primary" style="margin: 20px" @click="saveJson">保存Json</a-button>
        <a-button type="primary" style="margin: 20px" @click="importJson">导入Json</a-button>
        <a-button type="primary" style="margin: 20px; float: right;" @click="importJson">发送协议</a-button>
    </a-card>
</template>
  
<script>
export default {
    data() {
        return {
            url: 'http://happyhhh.com',
            api: '/api/user-pswd-login',
            dataSource: [
                { key: 0, options: [], property: '', input: '' },
            ],
        };
    },
    computed: {
        columns() {
            return [
                { title: '序号', dataIndex: 'key', customRender: (text, record, index) => index },
                { title: '类型', dataIndex: 'options', scopedSlots: { customRender: 'options' } },
                { title: '变量名(可不填)', dataIndex: 'property', scopedSlots: { customRender: 'property' } },
                { title: '输入', dataIndex: 'input', scopedSlots: { customRender: 'input' } },
            ];
        },
    },
    methods: {
        addRow() {
            const key = this.dataSource.length;
            this.dataSource.push({ key: key, options: [], property: [], input: [] });
        },
        removeRow() {
            this.dataSource.pop();
        },
        saveJson() {
            const json = JSON.stringify({
                url: this.url,
                api: this.api,
                dataSource: this.dataSource,
            });

            console.log(json);
        },
        importJson() {
            // 在这里处理导入Json的逻辑
        },
    },
};
</script>
  