<template>
  <div>
    <pre>
      url的hash，
      url的hash也就是锚点（#），本质上是改变了window.location.href的属性
      可以直接赋值location.hash，来改变href，

      h5中的history模式:
      pushState
      用法：history.pushState({},'','/foo');相当于是入栈
      replaceState
      替换，浏览器上面没有返回键
      go()
      可以带参数 正数负数 history.go(-1) === history.back()
    </pre>
  </div>
</template>

<script>
export default {
  name: "routerLesson"
}
</script>

<style scoped>

</style>
