<template>
  <div class="wrap">
    <div class="wrap_title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">后台首页</el-breadcrumb-item>
        <el-breadcrumb-item>相册管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="toom">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-select v-model="formInline.region" placeholder="升序">
            <el-option label="降序" value="shanghai"></el-option>
            <el-option label="升序" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formInline.user" placeholder="输入图片名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-row>
        <el-button type="text" @click="open">创建相册</el-button>
        <el-button type="text" @click="open1">上传图片</el-button>
      </el-row>
      <!-- 图片上传 -->
      <el-dialog title="提示" :modal="false" :visible.sync="dialogVisible" width="30%">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-dialog>
      <!-- 新增相册 -->
      <el-dialog :modal="false" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="room">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import getData from "../../api/shu";
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      dialogVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        type: []
      }
    };
  },
  created() {
    this.getlist()
  },
  mounted() {},
  methods: {
    open1() {
      this.dialogVisible = true;
    },
    open() {
      this.dialogFormVisible = true;
    },
    // getlist() {
    //   getData.list().then(res => {
    //     console.log(res);
    //   });
    // }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 60px;
  right: 0;
  left: 12%;
  background-color: #f8f9fa;
}
.wrap_title {
  width: 100%;
  height: 56px;
  font-size: 14px;
  line-height: 56px;
  border-bottom: 1px solid #dee2e6;
  background-color: #fff;
  .el-breadcrumb {
    line-height: 56px;
    margin-left: 20px;
  }
}
.toom {
  padding: 0 20px;
  width: 1150px;
  height: 62px;
  border-bottom: 1px solid #dee2e6;
  .el-form {
    float: left;
    .el-form-item {
      margin-top: 10px;
    }
  }
  .el-row {
    float: right;
    .el-button {
      width: 90px;
      margin-top: 10px;
      background-color: #67c23a;
      color: #fff;
    }
  }
}
.room {
  width: 200px;
  height: 380px;
  background-color: #fff;
  overflow: hidden;
  position: fixed;
  left: 164px;
  overflow-y: scroll;
  ul {
    overflow-y: scroll;
    overflow: hidden;

    li {
      width: 100%;
      padding: 26px 10px;
      background-color: #fff;
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
  }
}
</style>
