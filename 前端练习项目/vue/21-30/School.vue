<template>
<!--  //组件的结构-->
<div class="demo">
  <h2>学校名称{{schoolName}}</h2>
  <h2>学校地址{{address}}</h2>
  <button @click="showName">点我提示学校</button>
</div>


</template>

<script>
// 组件交互之间的代码
//  const school=Vue.extend({
//   data(){
//
//     return{
//       schoolName:'斗地主',
//       address:'长春'
//     }
//
//   },
//   methods:{
//         showName(){
//           alert(this.schoolName)
//         }
//   }
//
// })
// export default school;
//第二种暴露
export default {
  name:'School',//尽量和文件名一种
  data(){
    return{
      schoolName:'斗地主',
      address:'长春'
    }

  },
  methods:{
        showName(){
          alert(this.schoolName)
        }
  }
}

</script>

<style>

/*样式的注释*/
.demo{
  background: orange;
}

</style>