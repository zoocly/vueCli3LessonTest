<template>
  <div>
    name:{{ name }} &nbsp;
    id:{{ pathQuery }}
    <div>
      <button @click="count++">+</button> {{count}}
    </div>
    <pre>
      <strong>url的hash</strong>
      url的hash也就是锚点（#），本质上是改变了window.location.href的属性
      可以直接赋值location.hash，来改变href，

      <strong>h5中的history模式:</strong>
      pushState
      用法：history.pushState({},'','/foo');相当于是入栈
      replaceState
      替换，浏览器上面没有返回键
      go()
      可以带参数 正数负数 history.go(-1) === history.back()
    </pre>
    <pre>
      <strong>vue的打包</strong>
      在js文件夹里面有个app开头的，为当前应用并发的所有代码（业务代码）
      vendors为第三方的包，比如说vue-router，axios 等都在里面
      manifast 是为底层代码做支撑的


      <strong> 懒加载，首屏加载</strong>
      const home = () => import('xxx/xx/xx');
      但是懒加载在一些比如组件的引用会出问题
      1、多次进出同一个异步加载页面是否会造成多次加载组件？
        不会，加载完毕后会保存到缓存
      2、在多个地方使用同一个异步组件时是否造成多次加载组件
        不会，理由同上
      3.如果在两个异步加载的页面中分别同步与异步加载同一个组件时是否会造成资源重用？
        会，不使用异步加载的页面中的组件会嵌入到页面中和异步加载不一样，所以浏览器户重新请求组件
      4、在异步加载页面中载嵌入异步加载的组件时对页面是否会有渲染延时影响？
        会，异步加载会有延迟，会闪屏，且还有在某个地方拿不到想要的数据
        比如说树的数据，拿不到或者请求顺序乱了之后会影响右侧页面的加载

      <strong>懒加载的最终解决方案</strong>
      路由页面使用懒加载，
      在不特别影响首页显示延迟的情况下，根页面合理导入复用组件，
      而路由页面中的组件按需进行懒加载,
      即如果组件不大且使用不太频繁, 直接在路由页面中导入组件, 如果组件使用较为频繁使用懒加载

      <strong>路由嵌套</strong>
      类似于/home/news，在umi中，umi已经把这个事情做了=》 路由就是文件夹的顺序
      vue还是要自己手动

      <strong>$router 和 $route的区别</strong>
      可以理解成router为vue-router的实例，是vue生成的
      route 是当前页面的路由的参数啊，路径啊的一些属性
    </pre>
  </div>
</template>

<script>
export default {
  name: "routerLesson",
  data() {
    const {params, query: {name = ''} = {}} = this.$route;
    return {
      pathQuery: params.id,
      name,
      count:0,
    }
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  updated(...a) {
    console.log(a,'updated居然没有参数  ');
  }
}
</script>

<style scoped>
strong {
  color: brown;
}
</style>
