<template>
  <section v-if="alert.show">
    <div class="alert" :class="type[alert.type]" role="alert">
      <h4 class="alert-heading">{{ alert.title }}</h4>
      <p>{{ alert.message }}</p>
    </div>
  </section>
</template>

<script lang="js">
export default {
    name:'notification',
    props: ['alert'],
    data(){
        return{
            type: {
                'success': 'alert-sucess',
                'error': 'alert-danger'
            }
        }
    },
};
</script>

<style lang="scss"></style>
