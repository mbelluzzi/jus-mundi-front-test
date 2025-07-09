<template>
  <Background>
    <GreenLine
      id="1"
      width="30px"
      top="5%"
      left="5%"
      transform="rotate(0deg)"
    />
    <GreenLine
      id="2"
      width="30px"
      top="90%"
      left="5%"
      transform="rotate(90deg)"
    />
    <GreenLine
      id="3"
      width="30px"
      top="90%"
      left="90%"
      transform="rotate(45deg)"
    />
    <div class="bottom-gradient" />
  </Background>
</template>

<style>
  .bottom-gradient {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5%;
    background: linear-gradient(to bottom, transparent 0%, #f5f5f5 100%);
    pointer-events: none;
    z-index: 10;
  }
</style>
