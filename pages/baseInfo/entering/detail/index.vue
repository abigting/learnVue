<template>
  <div>
    <el-form
      label-width="100px"
      :model="currentItem"
      :rules="rules"
      ref="currentItem"
    >
      <p class="subtitle">行政区划</p>
      <el-row>
        <el-col :span="6">
          <el-tooltip placement="top" content="健康建设主体">
            <span class="label-text-100">健康建设主体：</span>
          </el-tooltip>
          <el-form-item prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请选择健康建设主体"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-tooltip placement="top" content="行政区划代码">
            <span class="label-text-100">行政区划代码：</span>
          </el-tooltip>
          <el-form-item prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写行政区划代码"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="所辖乡镇数：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写所辖乡镇数"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="所辖街道数：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写所辖街道数"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="总土地面积：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写总土地面积"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="户籍人口数：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写户籍人口数"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="常住人口数：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写常住人口数"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <p class="subtitle">健康建设领导小组</p>
      <el-row>
        <el-col :span="6">
          <el-form-item label="成立日期：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请选择成立日期"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="组长1姓名：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写组长1姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="组长1职务：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写组长1职务"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="组长2姓名：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写组长2姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="成员单位：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="获取健康建设各部门数"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <p class="subtitle">健康建设执行机构（健康办）</p>
      <el-row>
        <el-col :span="6">
          <el-form-item label="名称：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="工作人员数：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写工作人员数"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="负责人：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写负责人"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="电话：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写电话"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="联系人：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写联系人"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="电话：" prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写电话"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-tooltip placement="top" content="有无独立单位">
            <span class="label-text-100">有无独立单位：</span>
          </el-tooltip>
          <el-form-item prop="applyName">
            <el-input :disabled="allDisabled" v-model="currentItem.applyName" placeholder="请填写有无独立单位"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <p class="subtitle">健康建设各部门</p>
      <el-button type="primary" @click="addDept">新建</el-button>
      <el-row>
        <el-col :span="24">
          <el-table
            :data="deptList"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="部门名称"
              width="180">
              <template slot-scope="scope">
                <el-input
                  :disabled="allDisabled"
                  v-model="deptList[scope.$index].name"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="principal"
              label="负责人（单位领导）"
              width="180">
              <template slot-scope="scope">
                <el-input
                  :disabled="allDisabled"
                  v-model="deptList[scope.$index].principal"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="contactPerson"
              label="工作联系人">
              <template slot-scope="scope">
                <el-input
                  :disabled="allDisabled"
                  v-model="deptList[scope.$index].contactPerson"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="contactPhone"
              label="手机">
              <template slot-scope="scope">
                <el-input
                  :disabled="allDisabled"
                  v-model="deptList[scope.$index].contactPhone"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="sort"
              label="优先级(用于部门选择)">
              <template slot-scope="scope">
                <el-input
                  :disabled="allDisabled"
                  v-model="deptList[scope.$index].sort"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="contactPerson"
              width="64px"
              label="操作">
              <template slot-scope="scope">
                <el-popconfirm
                  title="这是一段内容确定删除吗？"
                  @onConfirm="handleDelete( scope.row)"
                >
                  <span class="delete" slot="reference">删除</span>
                </el-popconfirm>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <p class="subtitle">资料上传</p>
      <el-row>
        <el-col :span="24">
          <el-form-item label-width="190px" label="健康建设领导小组成立文件" prop="fileInfos">
            <el-upload
              class="upload-demo"
              :headers="headers"
              :file-list="fileInfos"
              :data="module"
              accept="application/pdf"
              v-model="currentItem.fileInfos"
              action="/zjjcpj/fileInfo/upload"
              :on-change="handleChangeFile"
            >
              <el-button size="small">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">支持扩展名：.pdf</div>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
      <p class="subtitle">填报信息</p>
      <el-row>
        <el-col :span="6">
          <el-form-item label-width="80px" label="填报人：" prop="registerPerson">
            {{currentItem.registerPerson}}
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="填报日期：" prop="registerTime">
            {{currentItem.registerTime}}
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-button type="primary" @click="submit">
            保存提交
          </el-button>
          <el-button>
            返回
          </el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>


<script>
  // import "../../../../global.less";
  import {Message} from 'element-ui';
  import {createId, getUserInfo} from "../../../../utils/common";

  export default {
    name: "index",
    data() {
      return {
        allDisabled: false,
        currentItem: {
          fileInfos:[],
          registerPerson: getUserInfo().name,
          registerTime: '2020-8-25',
        },
        formLayout: {
          xs: {span: 24},
          sm: {span: 12},
          md: {span: 8},
          lg: {span: 8},
          xl: {span: 6}
        },
        headers: {'token': getUserInfo().token},
        deptList: [],
        fileInfos: [],
        module:{
          module:'baseInfo'
        },
        rules: {}
      }
    },
    methods: {
      addDept() {
        this.deptList = [...this.deptList, {id: createId()}]
      },
      handleDelete(item) {
        this.deptList = this.deptList.filter(s => s.id !== item.id);
      },
      handleChangeFile(file, fileList) {
        const {response, uid} = file;
        if(response){
          if (response?.code === '0') {
            fileList = fileList.map(s => (s.uid === uid ? { ...response.data } : s));
          } else if (response?.code === '6666') {
            Message({
              message: response.message,
              type: 'error',
              duration: 5 * 1000
            });
            setTimeout(() => {
              this.$router.push('/');
            }, 300)
          } else {
            fileList = fileList.filter(s => s.uid !== uid);
            Message({
              message: response.message,
              type: 'error',
              duration: 5 * 1000
            });
          }
        }
        this.fileInfos = fileList
      },
      submit(){
        const res = {...this.currentItem, deptList:this.deptList};
        console.log(res, 'res')
      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .subtitle {
    padding: 0 8px;
    font-size: 16px;
    border-left: 4px solid #499afe;
    font-weight: 500;
    color: #3a3d49;
    margin: 8px 0;
  }

  //label超出文案的长度自定义
  @each $i in 100, 120, 160, 180 {
    .label-text-#{$i} {
      width: #{$i}px;
      color: #606266;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      line-height: 28px;
      position: relative;
      float: left;

      &:before {
        content: '*';
        color: #F56C6C;
        margin-right: 4px;
      }
    }
  }

  //global
  .el-form-item__label {
    padding: 0
  }
</style>
