<template>
    <div class="logo-background">
        <slot />
    </div>
</template>

<style>
.logo-background {
    background-color: var(--background-color);
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    padding: 30px;
    display: flex;
    overflow: hidden;
    box-shadow: 0px 0px 128px rgba(0, 0, 0, 0.1);
}
</style>