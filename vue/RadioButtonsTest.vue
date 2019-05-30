<template lang="html">
  <div class="">
    <div class="block">
      <AnimateRadioGroup @change="onChange" v-model="value" color="#409EFF" :disabled="false">
        <AnimateRadioButton label="a">
          选项A
        </AnimateRadioButton>
        <AnimateRadioButton label="b">
          选项B
        </AnimateRadioButton>
        <AnimateRadioButton label="c">
          选项C
        </AnimateRadioButton>
      </AnimateRadioGroup>
    </div>
    <div class="block">
      <AnimateCheckbox @change="onCheckboxChange" v-model="check1" :true-label="1" :false-label="2">
        多选框1
      </AnimateCheckbox>
    </div>
  </div>
</template>

<script>
import AnimateRadioButton from './components/AnimateRadioButton';
import AnimateRadioGroup from './components/AnimateRadioGroup';
import AnimateCheckbox from './components/AnimateCheckbox';
export default {
  components: {
    AnimateRadioGroup,
    AnimateRadioButton,
    AnimateCheckbox
  },
  data(){
    return {
      value: 'b',
      check1: 1
    }
  },
  methods: {
    onChange(){
      console.dir(this.value);
    },
    onCheckboxChange(val){
      console.log(this.check1)
    }
  }
}
</script>

<style lang="css">
</style>
