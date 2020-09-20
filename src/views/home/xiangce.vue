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
          <el-select v-model="formInline.region" placeholder="排序">
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
      <el-dialog title="上传图片" :visible.sync="dialogUpload" @closed="upload">
        <el-upload
          class="upload-demo"
          drag
          action="/fff/image/upload"
          multiple
          :headers="{ token:$store.state.user.token }"
          :data="{ image_class_id:id }"
          name="img"
          :on-success="uploadSuccess"
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
          <h1>创建相册</h1>
          <div class="mingcheng">
            <span>相册名称</span>
            <input type="text" v-model="form.name" />
          </div>
          <div class="paixu">
            <span>相册排序</span>
            <el-input-number
              v-model="form.region"
              @change="handleChange"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="tian">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 左侧相册 -->
    <div class="room">
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="toogle(item.id)">
          <p>{{ item.name }}</p>
          <el-dropdown class="yan" @command="drop">
            <!-- -->
            <el-button size="mini" style="margin-left:24px;">
              <span>{{ item.images_count }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="beforeHandleCommand(item.id,'x')">修改</el-dropdown-item>
              <!-- <button class="shan" @click="shanchu(item.id)">删除</button> -->
              <el-dropdown-item :command="beforeHandleCommand(item.id,'s')">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
    <!-- 修改相册 -->
    <el-dialog :modal="false" title="修改相册" :visible.sync="changeAlbumDialog">
      <el-form :model="xiufrom">
        <el-form-item label="相册名称" label-width="80px" prop="name">
          <el-input v-model="xiufrom.name" placeholder="请输入相册名称"></el-input>
        </el-form-item>
        <el-form-item label="相册排序" label-width="80px">
          <el-input-number v-model="xiufrom.order" :min="0" label></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="changeAlbumDialog = false">取 消</el-button>
        <el-button type="primary" @click="que('getlist')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 图片预览 -->
    <el-dialog class="img" :modal="false" width="60%"  :visible.sync="fdialogFormXiu">
      <img :src="prveImg" alt />
    </el-dialog>
    <!-- 图片列表 -->
    <div class="foom">
      <el-col :span="8" v-for="(o, index) in boom " :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="o.url" class="image" />
          <div class="span" style="padding: 14px;">
            <el-button-group>
              <el-button type="primary" icon="el-icon-view" @click="show(index,o)"></el-button>
              <el-button type="primary" icon="el-icon-edit" @click="tan(o)"></el-button>
              <el-button type="primary" icon="el-icon-delete" @click="remove(o.id)"></el-button>
            </el-button-group>
          </div>
          <p>{{ o.name }}</p>
        </el-card>
      </el-col>
    </div>
    <!-- 编辑图片弹框-->
    <el-dialog :modal="false" :visible.sync="dialogFormXiu">
      <p>提示</p>
      <h2>输入新名称</h2>
      <input type="text" v-model="bianshu" />
      <button @click="dialogFormXiu = false">取消</button>
      <button @click="yes">确定</button>
    </el-dialog>
    <!-- 分页器 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChanges"
        :current-page="currentPages"
        :page-sizes="[5,10,15]"
        :page-size="pageSizes"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      ></el-pagination>
      <div class="fyh_fen">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="10"
          prev-text="上一页"
          next-text="下一页"
          layout="prev,next"
          :total="this.total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import getData from "../../api/shu";
export default {
  data() {
    return {
      // currentPage: 4,
      formInline: {
        user: "",
        region: ""
      },
      imageUrl: "",
      dialogUpload: false,
      dialogFormVisible: false,
      changeAlbumDialog: false,
      dialogFormXiu: false,
      fdialogFormXiu: false,
      // 添加相册
      form: {
        name: "",
        region: 1
      },
      // 修改相册
      xiufrom: {
        id: 0,
        name: "",
        order: 0
      },
      // 分页
      currentPage: 1,
      currentPages: 1,
      pageSize: 10,
      pageSizes: 5,
      list: [],
      id: 0,
      order: "",
      boom: [],
      // 总条数列表
      total: 0,
      // 图片
      totalCount: 0,
      index: 0,
      foom: {
        url: "",
        image_class_id: 0
      },
      keyword: "",
      albumId: 0,
      xtpid: 0,
      bianshu: "",
      prveImg:'',
    };
  },
  created() {
    this.getlist();
  },
  mounted() {},
  methods: {
    // 创建相册
    open1() {
      this.dialogUpload = true;
    },
    open() {
      this.dialogFormVisible = true;
    },
    // 相册列表
    getlist() {
      getData.list(this.currentPage).then(res => {
        console.log(res);
        this.list = res.data.list;
        this.total = res.data.totalCount;
        // console.log(this.idd);
        this.toogle(res.data.list[0].id);
      });
    },
    // 图片列表
    pai() {
      getData
        .tu(
          this.id,
          this.currentPages,
          this.pageSizes,
          this.order,
          this.keyword
        )
        .then(res => {
          console.log(res);
          this.boom = res.data.list;
          this.totalCount = res.data.totalCount;
        });
    },
    // 点击切换
    toogle(id) {
      this.id = id;
      // console.log(id);
      this.pai();
    },
    // 上传图片
    uploadSuccess(response, file, fileList) {
      console.log(response.msg);
      if (response.msg == "ok") {
        this.$message("上传成功");
        this.dialogUpload = false;
        this.pai();
        this.getlist();
      }
    },
    upload() {
      this.getlist();
    },
    // 添加相册
    tian() {
      console.log(111);
      getData.tian(this.form.region, this.form.name).then(res => {
        console.log(res);
        if ((res.msg = "ok")) {
          this.getlist();
        }
        this.dialogFormVisible = false;
        this.form.name = "";
      });
    },
    // 修改相册
    que() {
      getData
        .chexu(this.xiufrom.id, this.xiufrom.name, this.xiufrom.order)
        .then(res => {
          console.log(res);
          this.changeAlbumDialog = false;
          this.getlist();
        });
    },
    xiubum(id) {
      this.changeAlbumDialog = true;
      let contat = this.list.filter((item, index) => {
        return item.id == id;
      });
      this.xiufrom = contat[0];
    },
    // 删除
    shanchu(index) {
      // console.log(index);
      // this.$confirm("是否删除该相册？", "提示", {
      //   confirmButtonText: "确定",
      //   cancelButtonText: "取消",
      //   type: "warning"
      // }).then(() => {
      getData.shan(index).then(res => {
        this.getlist();
      });
      // });
    },
    // 图片
    handleSizeChange(all) {
      console.log(all);
      this.pageSizes = all;
      this.getlist();
    },
    handleCurrentChanges(g) {
      console.log(g);
      this.currentPages = g;
      this.getlist();
    },
    // 上一页下一页
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.getlist();
    },
    handleChange(value) {
      // console.log(value);
    },
    //获取当前要修改属性的id
    beforeHandleCommand(item, command) {
      return {
        item: item,
        command: command
      };
    },
    drop(command) {
      console.log(command);
      switch (command.command) {
        case "x":
          this.xiubum(command.item);
          break;
        case "s":
          this.shanchu(command.item);
          break;
      }
    },
    // 删除单张图片
    remove(id) {
      console.log(id);
      this.$confirm("是否删除该相册？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        getData.remove(id).then(res => {
          this.pai();
          this.getlist();
        });
      });
    },
    // 修改单张图片
    tan(id) {
      console.log(id);
      this.xtpid = id.id;
      this.bianshu = id.name;
      this.dialogFormXiu = true;
    },
    yes() {
      getData.biant(this.xtpid, this.bianshu).then(res => {
        // console.log(res);
        this.pai();
      });
      this.dialogFormXiu = false;
    },
    // 预览图片
    show(index, item) {
      console.log(index);
      console.log(item);
      this.fdialogFormXiu = true
      this.prveImg = item.url
    }
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
  flex-shrink: 0;
  ul {
    li {
      width: 100%;
      position: relative;
      padding: 30px 10px;
      background-color: #fff;
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      p {
        color: #212529;
        float: left;
        margin-bottom: 4px;
        margin-left: 18px;
      }
      .el-dropdown {
        position: absolute;
        right: 20px;
        bottom: 10px;
      }
    }
    li:hover {
      background-color: #f0f9eb;
    }
  }
  /deep/.shan {
    border: none;
    background-color: #fff;
  }
}
.foom {
  .el-col {
    width: 200px;
    height: 180px;
    margin-right: 20px;
    margin-top: 20px;
    margin-left: 20px;
    position: relative;
  }
  position: fixed;
  left: 364px;
  width: 800px;
  height: 380px;
  .el-card {
    width: 200px;
    height: 180px;
    img {
      width: 200px;
      height: 100px;
    }
  }
  .span {
    // margin-left: 20px;
    .el-button {
      float: left;
      background-color: #fff;
      color: #dcdfe6;
      border: 1px solid #dcdfe6;
    }
  }
  p {
    width: 200px;
    position: absolute;
    bottom: 80px;
    left: 0;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
  }
}
/deep/.el-dialog {
  height: 290px;
  background-color: #fff;
  position: relative;
  .dialog-footer {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
  .paixu {
    margin-top: 30px;
  }
  .mingcheng {
    input {
      width: 558px;
      height: 36px;
    }
  }
  h1 {
    margin-bottom: 30px;
    font-size: 30px;
  }
}
.el-dialog__body {
  padding: 0 20px;
}
.block {
  position: fixed;
  bottom: 0px;
  left: 362px;
  width: 100%;
  height: 60px;
  border-top: 1px solid #ccc;
  padding: 0 20px;
  background-color: #fff;
}
.fyh_fen {
  position: fixed;
  left: 164px;
  bottom: 0px;
  width: 200px;
  height: 60px;
  background-color: #fff;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
/deep/.el-dialog {
  z-index: 999;
}
.upload-demo {
  width: 400px;
  margin: 0 auto;
  text-align: center;
}
.img{
  img{
    width:100%;
    height: 100%;
  }
}
</style>
