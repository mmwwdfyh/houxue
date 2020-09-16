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
        <!-- <el-upload
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
        </el-upload>-->
        <el-upload
          ref="imgBroadcastUpload"
          :auto-upload="false"
          multiple
          :file-list="diaLogForm.imgBroadcastList"
          list-type="picture-card"
          :on-change="imgBroadcastChange"
          :on-remove="imgBroadcastRemove"
          accept="image/jpg, image/png, image/jpeg"
          action
        >
          <i class="el-icon-plus"></i>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2M</div>
        </el-upload>
        <el-button @click="tijiao">submitData</el-button>
      </el-dialog>
      <!-- 新增相册 -->
      <el-dialog :modal="false" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <!-- <el-form-item>
           相册名称 <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>-->
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
    <div class="room">
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="toogle(item.id)">
          <p>{{ item.name }}</p>
          <el-dropdown class="yan">
            <el-button size="mini" style="margin-left:24px;">
              <span>{{ item.images_count }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改</el-dropdown-item>
              <!-- <el-dropdown-item @command="shanchu">删除</el-dropdown-item> -->
              <button class="shan" @click="shanchu(item.id)">删除</button>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <!-- <li>
          <p></p>
          <el-dropdown class="yan">
            <el-button size="mini" style="margin-left:24px;">
              2
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>-->
        <!-- <li>
          <span>煊赫门</span>
          <el-dropdown class="yan">
            <el-button size="mini" style="margin-left:24px;">
              2
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <span>3333</span>
          <el-dropdown class="yan">
            <el-button size="mini" style="margin-left:24px;">
              1
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <span>付义航</span>
          <el-dropdown class="yan">
            <el-button size="mini" style="margin-left:24px;">
              5
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <span>付义航</span>
          <el-dropdown class="yan">
            <el-button size="mini" style="margin-left:24px;">
              1
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <span>张</span>
          <el-dropdown class="yan">
            <el-button size="mini" style="margin-left:24px;">
              2
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <span>小鱼</span>
          <el-dropdown class="yan">
            <el-button size="mini" style="margin-left:24px;">
              2
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <span>玛卡巴卡</span>
          <el-dropdown class="yan">
            <el-button size="mini" style="margin-left:24px;">
              1
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>-->
      </ul>
    </div>
    <div class="foom">
      <el-col :span="8" v-for="(o, index) in boom " :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="o.url" class="image" />
          <div class="span" style="padding: 14px;">
            <el-button-group>
              <el-button type="primary" icon="el-icon-view"></el-button>
              <el-button type="primary" icon="el-icon-edit"></el-button>
              <el-button type="primary" icon="el-icon-delete"></el-button>
            </el-button-group>
          </div>
          <p>{{ o.name }}</p>
        </el-card>
      </el-col>
    </div>
    <!-- 分页器 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
      <div class="fyh_fen">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="10"
          prev-text="上一页"
          next-text="下一页"
          layout="prev,next"
          :total="this.idd"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import getData from "../../api/shu";
import { uploadImgToBase64 } from "../../api/utlis";
export default {
  data() {
    return {
      currentPage4: 4,
      formInline: {
        user: "",
        region: ""
      },
      imageUrl: "",
      dialogVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: 1
      },
      currentPage: 1,
      pageSize: 10,
      list: [],
      id: 238,
      order: "",
      boom: [],
      idd: 0,
      index: 0,
      foom: {
        url: "",
        image_class_id: 0
      },
      keyword: "",
      diaLogForm: {
        goodsName: "", // 商品名称字段
        imgBroadcastList: [], // 储存选中的图片列表
        imgsStr: "" // 后端需要的多张图base64字符串 , 分割
        // img: "",
        // image_class_id: ""
      }
    };
  },
  created() {
    this.getlist();
    this.pai();
  },
  mounted() {},
  methods: {
    open1() {
      this.dialogVisible = true;
    },
    open() {
      this.dialogFormVisible = true;
    },
    // 相册列表
    getlist() {
      getData.list(this.currentPage).then(res => {
        console.log(res);
        this.list = res.data.list;
        this.idd = res.data.totalCount;
        // console.log(this.idd);
      });
    },
    // 图片列表
    pai() {
      getData
        .tu(this.id, this.currentPage, this.pageSize, this.order, this.keyword)
        .then(res => {
          console.log(res);
          this.boom = res.data.list;
          this.idd = res.data.list.id;
          console.log(this.idd)
          // this.updata();
        });
    },
    toogle(id) {
      this.id = id;
      console.log(id);
      this.pai();
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
      });
    },
    // 删除
    shanchu(index) {
      console.log(index);
      getData.shan(index).then(res => {
        this.getlist();
      });
    },
    handleSizeChange(all) {
      console.log(all);
    },
    handleCurrentChange(size) {
      console.log(size);
    },
    handleChange(value) {
      console.log(value);
    },
    // 上传图片
    // updata() {},
    tijiao() {
      getData.uploading(this.foom.image_class_id, this.foom.url).then(res => {
        console.log(res);
        this.pai();
      });
    },
    // 图片选择后 保存在 diaLogForm.imgBroadcastList 对象中
    imgBroadcastChange(file, fileList) {
      const isLt2M = file.size / 1024 / 1024 < 2; // 上传头像图片大小不能超过 2MB
      if (!isLt2M) {
        this.diaLogForm.imgBroadcastList = fileList.filter(
          v => v.uid !== file.uid
        );
        this.$message.error(
          "图片选择失败，每张图片大小不能超过 2MB,请重新选择!"
        );
      } else {
        this.diaLogForm.imgBroadcastList.push(file);
      }
    },
    // 有图片移除后 触发
    imgBroadcastRemove(file, fileList) {
      this.diaLogForm.imgBroadcastList = fileList;
    },
    // 提交弹窗数据
    async submitDialogData() {
      const imgBroadcastListBase64 = [];
      console.log("图片转base64开始...");
      // 并发 转码轮播图片list => base64
      const filePromises = this.diaLogForm.imgBroadcastList.map(async file => {
        const response = await uploadImgToBase64(file.raw);
        return response.result.replace(/.*;base64,/, ""); // 去掉data:image/jpeg;base64,
      });
      // 按次序输出 base64图片
      for (const textPromise of filePromises) {
        imgBroadcastListBase64.push(await textPromise);
      }
      console.log("图片转base64结束..., ", imgBroadcastListBase64);
      this.diaLogForm.imgsStr = imgBroadcastListBase64.join();
      console.log(this.diaLogForm);
      const res = await addCommodity(this.diaLogForm); // 发请求提交表单
      if (res.status) {
        this.$message.success("添加商品成功");
        // 一般提交成功后后端会处理，在需要展示商品地方会返回一个图片路径
      }
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
</style>
