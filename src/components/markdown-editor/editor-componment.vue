<template>
  <div>
    <div>
      文章名称:<input
        class="demoInput"
        type="text"
        v-model="richData.articleName"
        placeholder="请输入文章名称"
      />
    </div>
    <div>
      文章作者:<input
        class="demoInput"
        type="text"
        v-model="richData.articleAuthor"
        placeholder="请输入文章作者"
      />
    </div>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="richData.model"
      />
      <Editor
        style="height: 550px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="richData.model"
        @onCreated="handleCreated"
      />
    </div>
    <button @click="toSaveArcitle">保存</button>
    <div>==========================================</div>
    <button @click="toQueryArticle">查询文章</button>
    <div v-if="queryArticle != null">
      <h1>{{ queryArticle.articleName }}</h1>
      <h5>{{ queryArticle.articleAuthor }}</h5>
      <h6>{{ queryArticle.gmtUpdate }}</h6>
      <div v-html="queryArticle.articleContent"></div>
    </div>
  </div>
</template>

<script setup>
import "@wangeditor/editor/dist/css/style.css" // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted, reactive } from "vue"
import { Editor, Toolbar } from "@wangeditor/editor-for-vue"
// import { uploadPic, deleteFile, uploadVideo, toSaveArticleAndFile ,toQueryArticleApi} from "./request/api";
// import { resourceUrl } from "./common/path";
//图片 视频 类型声明
const richData = reactive({})
const saveArticleData = reactive({})
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref("")

// 模拟 axios 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = "<p>大大帅将军 小小怪下士</p>"
  }, 1500)
})
//编辑器初始化
const toolbarConfig = {}
const editorConfig = { MENU_CONF: {} }
// 编辑器创建完毕时的回调函数。
const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

//图片上传
editorConfig.MENU_CONF["uploadImage"] = {
  // 自定义上传
  async customUpload(richPic, insertFn) {
    //图片上传接口调用
    uploadPic(richPic).then((res) => {
      console.log(res.data)
      //返回给编辑器 图片地址
      // insertFn(resourceUrl + res.data)
      //上传成功后 记录图片地址
      richData.preFileList.push(res.data)
    })
  }
}
//上传视频 url 视频地址 poster 视频展示图片地址
editorConfig.MENU_CONF["uploadVideo"] = {
  // 自定义上传
  async customUpload(file, insertFn) {
    //视频上传接口调用
    uploadVideo(file).then((res) => {
      console.log(res.data)
      //返回给编辑器 图片地址
      // insertFn(resourceUrl + res.data, "/src/assets/bg.png")
      //上传成功后 记录视频地址
      richData.preFileList.push(res.data)
    })
  }
}
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
//保存文章
const toSaveArcitle = () => {
  const editor = editorRef.value
  // 1.获取最后保存的文章图片 视频 list数组
  editor.getElemsByType("image").forEach((item) => {
    //排除掉外部资源
    if (item.src.indexOf(resourceUrl) != -1) {
      richData.articleFileUrl.push(item.src)
    }
  })
  editor.getElemsByType("video").forEach((item) => {
    if (item.src.indexOf(resourceUrl) != -1) {
      richData.articleFileUrl.push(item.src)
    }
  })
  //2.对于全部图片 视频 对比 获取已删除图片
  richData.preFileList.forEach((item) => {
    //articleFileList 数组展示的是图片完全路径
    //preFileList 保存的是图片部分路径
    //所以要通过添加resourceUrl常量进行对比
    if (richData.articleFileUrl.indexOf(resourceUrl + item) == -1) {
      //保存到需删除的数组中
      richData.deleteFileList.push(item)
    } else {
      //保存需要存入数据库的数组
      saveArticleData.articleFileUrl.push(item)
    }
  })

  //3.调后台接口 删除图片 视频
  deleteFile(richData.deleteFileList).catch((err) => {
    console.log(err.msg)
  })
  //4.调后台接口保存文章
  //参数赋值
  saveArticleData.articleName = richData.articleName
  saveArticleData.articleAuthor = richData.articleAuthor
  saveArticleData.articleContent = valueHtml.value
  toSaveArticleAndFile(saveArticleData).then((res) => {
    console.log("保存文章成功")
    //保存文章后 所有数据清空
    valueHtml.value = ""
    richData.articleAuthor = ""
    richData.articleName = ""
  })
}
//文章查询
const queryArticle = reactive({})
const toQueryArticle = () => {
  toQueryArticleApi(1566944471915032576n).then((res) => {
    // console.log(res.data)
    // queryArticle.articleAuthor = res.data.articleAuthor
    // queryArticle.articleContent = res.data.articleContent
    // queryArticle.articleId = res.data.articleId
    // queryArticle.gmtUpdate = res.data.gmtUpdate
    // queryArticle.articleName = res.data.articleName
  })
}
</script>

<style lang="less" scoped>
.demoInput {
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 13px 14px;
  width: 320px;
  font-size: 14px;
  font-weight: 320;
  margin: 20px;
  font-family: "Microsoft soft";
}
.demoInput:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
</style>
