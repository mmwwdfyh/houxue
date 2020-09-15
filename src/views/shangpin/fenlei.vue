<template>
  <div class="wrap">
    <div class="wrap_title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">后台首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="chuang">
      <button>创建顶级分类</button>
    </div>
    <div class="boom">
      <el-tree
        :data="data"
        node-key="id"
        default-expand-all
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
      ></el-tree>
    </div>
  </div>
</template>

<script>
// import updata from "../../api/shang";

export default {
  data() {
    return {
      data: [
        {
          label: "诺基亚",
          children: [
            {
              label: "新分类",
              children: [
                {
                  label: "新分类",
                  children: [
                    {
                      label: "新分类"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "服饰",
          children: [
            {
              label: "新分类",
              children: [
                {
                  label: "裤子",
                  children: [
                    {
                      label: "男士"
                    },
                    {
                      label: "衣服"
                    },
                    {
                      label: "新分类"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "水果",
          children: [
            {
              label: "5"
            },
            {
              label: "新分类"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  created() {
    // this.lisst();
  },
  mounted() {},
  methods: {
    // 获取数据
    // lisst() {
    //   updata.commodity().then(res => {
    //     console.log(res);
    //   });
    // },
    handleNodeClick(data) {
      console.log(data);
    },
    handleDragStart(node, ev) {
      console.log("drag start", node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log("tree drag enter: ", dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log("tree drag leave: ", dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log("tree drag over: ", dropNode.label);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log("tree drag end: ", dropNode && dropNode.label, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log("tree drop: ", dropNode.label, dropType);
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === "二级 3-1") {
        return type !== "inner";
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf("三级 3-2-2") === -1;
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
.chuang {
  width: 1124px;
  height: 46px;
  background-color: #fff;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  button {
    background-color: #339999;
    color: #fff;
    padding: 6px 8px;
    border: none;
    margin-left: 18px;
    margin-top: 6px;
    font-size: 14px;
  }
}
.boom {
  background-color: #fff;
  padding-left: 20px;
  padding-top: 6px;
  /deep/.el-tree-node {
    margin-bottom: 10px;
  }
}
</style>
