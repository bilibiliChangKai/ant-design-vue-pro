<template>
    <div class="main">
        <div>
            <a-text>URL:  </a-text>
            <a-input v-model="url" style="width: 300px" />
            <a-text style="margin-left: 50px">API: </a-text>
            <a-input v-model="api" style="width: 300px" />
        </div>
        <div>
            <a-text>JWT: </a-text>
            <a-input v-model="jwt" placeholder="填空为默认值，填写则发送使用这个JWT" style="width: 300px" />
        </div>
        <a-table :columns="columns" :dataSource="dataSource" rowKey="id">
            <template #id="text, record">
                {{ record.id }}
            </template>

            <template #type="text, record">
                <a-select v-model:value="record.type" @change="updateType(record)" style="width: 100px;">
                    <a-select-option value="string">string</a-select-option>
                    <a-select-option value="int64">int64</a-select-option>
                    <a-select-option value="int32">int32</a-select-option>
                </a-select>
            </template>

            <template #name="text, record">
                <a-input v-model:value="record.name" @change="updateName(record)" style="width: 200px;" />
            </template>

            <template #value="text, record">
                <a-input v-model:value="record.value" @change="updateValue(record)" style="width: 200px;" />
            </template>

        </a-table>
        <div style="margin-top: 16px;">
            <a-button type="primary" @click="addRow">添加一行</a-button>
            <a-button type="danger" @click="deleteRow">删除一行</a-button>
            <a-button @click="importFromFile">从文件导入</a-button>
            <a-button @click="exportToFile">导出文件</a-button>
            <a-button type="primary" style="float: right;" @click="sendReq">发送协议</a-button>
        </div>
    </div>
</template>
  
<script>
import { requestTest } from '@/api/test'
import storage from 'store'
import { DATASOURCE_JSON, JWT } from '@/store/mutation-types'

export default {
    data() {
        let data = {
            columns: [
                {
                    title: 'ID',
                    dataIndex: 'id',
                    scopedSlots: { customRender: 'id' },
                },
                {
                    title: '类型',
                    dataIndex: 'type',
                    scopedSlots: { customRender: 'type' },
                },
                {
                    title: '变量名(可不填)',
                    dataIndex: 'name',
                    scopedSlots: { customRender: 'name' },
                },
                {
                    title: '值',
                    dataIndex: 'value',
                    scopedSlots: { customRender: 'value' },
                },
            ],

            url: 'http://happyhhh.com',
            api: '/api/user-pswd-login',
            jwt: '',
            dataSource: [
                { id: 1, type: '', name: '', value: '' },
            ],
        };

        const json = storage.get(DATASOURCE_JSON)
        if (json != null) {
            this.FromJson(data, json)
        }

        return data
    },

    methods: {
        addRow() {
            const id = this.dataSource.length + 1;
            this.dataSource.push({ id, type: '', name: '', value: '' });
        },
        deleteRow() {
            this.dataSource.pop();
        },
        importFromFile() {
            const { FromJson, $notification } = this

            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'application/json';
            input.onchange = () => {
                const file = input.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    try {
                        FromJson(this, reader.result)
                    } 
                    catch (error) {
                        $notification['error']({
                            message: '报错',
                            description: error.message,
                            duration: 3
                        })
                    }
                };
                reader.readAsText(file);
            };
            input.click();
        },
        exportToFile() {
            const data = this.ToJson(this);
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'data.json';
            link.click();
            URL.revokeObjectURL(url);
        },
        async sendReq() {
            let that = this;

            if (that.dataSource == null || that.dataSource.length == 0) {
                return
            }
            
            storage.set(DATASOURCE_JSON, this.ToJson(that))
            storage.set(JWT, that.jwt)

            const { $notification } = that

            const protoJson = that.getProtoJson()
            const dataJson = that.getDataJson()
            const url = that.url + that.api

            try {
                var rsp = await requestTest(that.url, that.api, protoJson, dataJson)
                $notification['success']({
                    message: '提示',
                    description: '协议请求成功，发送地址：' + url,
                    duration: 3
                })
            }
            catch (error) {
                $notification['error']({
                    message: '报错',
                    description: error.message,
                    duration: 3
                })
            }
        },

        getProtoJson() {
            var innerStr = this.getSingleProtoJson(this.dataSource[0])
            for (let i = 1; i < this.dataSource.length; i++) {
                innerStr += ', ' + this.getSingleProtoJson(this.dataSource[i])
            }

            return `{${innerStr}}`
        },

        getSingleProtoJson(data) {
            return `"Data_${data.id}": { "type": "${data.type}", "id": ${data.id} }`
        },

        getDataJson() {
            if (this.dataSource == null || this.dataSource.length == 0) {
                return null
            }
            
            var innerStr = this.getSingleDataJson(this.dataSource[0])
            for (let i = 1; i < this.dataSource.length; i++) {
                innerStr += ', ' + this.getSingleDataJson(this.dataSource[i])
            }

            return `{${innerStr}}`
        },

        getSingleDataJson(data) {
            if (data.type == 'string') {
                return `"Data_${data.id}": "${data.value}"`
            }
            else {
                const value = parseInt(data.value)
                return `"Data_${data.id}": ${value}`
            }
        },

        ToJson(data) {
            const jsonObj = {
                url: data.url,
                api: data.api,
                jwt: data.jwt,
                dataSource: data.dataSource,
            }

            return JSON.stringify(jsonObj, null, 2)
        },

        FromJson(data, json) {
            const jsonObj = JSON.parse(json);

            data.dataSource = jsonObj.dataSource;
            data.url = jsonObj.url;
            data.api = jsonObj.api;
            data.jwt = jsonObj.jwt;
        },

        updateType(record) {
            // 更新Type
            console.log('Gender updated:', record.type);
        },
        updateName(record) {
            // 更新Name
            console.log('Name updated:', record.name);
        },
        updateValue(record) {
            // 更新Value
            console.log('Gender updated:', record.value);
        },
    },
};
</script>