<template>

<div class="weather" :style="{background: `url(https://picsum.photos/${windowSize.width}/${windowSize.height}) no-repeat`, backgroundSize: 'cover'}">
    <div v-if="!loading && current" class="tone">
        <div >
            <h1 class="weather-status">{{current.weather[0].main}}</h1>
            <h4>{{current.name}}</h4>
            <h2 class="weather-temp">{{`${Math.floor(current.main.temp - 273.15)}`}}</h2>
        </div>
    </div>
    <Loader class="loader" v-else />
</div>
</template>

<script>
import Loader from "../components/Loader"

export default {

   name:'Weather',
   components: {
       Loader
   },
   computed:{
       current(){
           return this.$store.state.current;
           },
        loading(){
            return this.$store.state.loading;
        },
        windowSize(){
            return {width: window.innerWidth, height: window.innerHeight}
        }
       },
   beforeCreate(){
       this.$store.dispatch('setWeatherObj', this.$router.history.current.params.city.split('_').join(' '));
   },
}
</script>

<style>
    .weather{
        color: white;
        height: 100%;
        background: white;

    }
    .loader{
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
    }

    .tone{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.2);
        text-align: center;
    }

    .weather-temp::after{
        content: '°';
        position: absolute;
        font-weight: 300;
    }
    h2{
        font-weight: 600;
        font-size: 42px;
    }
    h1{
        font-weight: 300;
    }
    h4{
        font-weight: 300;
        font-size: 26px;
    }
</style>