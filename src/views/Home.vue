<template>
  <div class="home">
    <h1>City</h1>
    <input v-model="city" type="text" :class="!error ? 'form-control' : 'form-control error'" id="cityInput" />
    <button type="button" @click="getWeather" class="btn btn-outline-dark btn-block mt-2">Open</button>

  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      city:'',
      error:false
    }
  },
  methods:{
    getWeather(){
      if(this.city!==''){
      this.$router.push({path: `/${this.city.split(' ').join('_').toLowerCase()}`, params: {city:this.city}});
      } else {
        this.error = true;
      }
    }
  }
}
</script>
<style>
  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .error {
    border:1px solid red;
  }

</style> 