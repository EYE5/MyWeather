<template>
  <div class="loadingio-spinner-ripple-y5lbjcle5n9"><div class="ldio-ybhkyq8l2f">
<div></div><div></div>
</div></div>

</template>

<script>
export default {
    name:'Loader'
}
</script>

<style >

@keyframes ldio-ybhkyq8l2f {
  0% {
    top: 120px;
    left: 120px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 22.5px;
    left: 22.5px;
    width: 195px;
    height: 195px;
    opacity: 0;
  }
}

.ldio-ybhkyq8l2f div {
  position: absolute;
  border-width: 5px;
  border-style: solid;
  opacity: 1;
  border-radius: 50%;
  animation: ldio-ybhkyq8l2f 2s cubic-bezier(0,0.2,0.8,1) infinite;
}

.ldio-ybhkyq8l2f div:nth-child(1) {
  border-color: #222222
}

.ldio-ybhkyq8l2f div:nth-child(2) {
  border-color: #00d8ff;
  animation-delay: -1s;
}

.loadingio-spinner-ripple-y5lbjcle5n9 {
  width: 250px;
  height: 250px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-ybhkyq8l2f {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-ybhkyq8l2f div { box-sizing: content-box; }
</style>