<template>
  <el-cascader :options="optionsData"
               v-model="address"
               :props="{ expandTrigger: 'hover', value:'code',  label:'name', checkStrictly: true }"
               clearable
               :disabled="disabled"
               :placeholder=placeholder
               @change="handleChange"
  >
  </el-cascader>
</template>

<script>
  import request from "../../utils/request";

  export default {
    name: "index",
    props: ['disabled', 'placeholder', 'level'],
    data() {
      return {
        optionsData: [],
        address: []
      }
    },
    created() {
      this.getOptions()
    },
    // watch: {
    //   address: function (newVal, oldVal) {
    //
    //   }
    // },
    methods: {
      async getOptions() {
        const res = await request('/zjjcpj/area/getAllAreas', {
          method: 'get',
        });
        if (res) {
          res.forEach(val1 => {
            val1.children.forEach(val2 => {
              val2.children.forEach(val3 => {
                delete val3.children;
              });
            });
          });
          this.optionsData = res
        }
      },
      handleChange(value) {
        if(this.$props.level==='1'){
          value =value[value.length-1]
        }
        this.$emit('change', value)
      }
    },
  }
</script>

<style scoped>

</style>
