<script setup lang="ts">
import { FullPageSection, HeroPartners } from '#components';

</script>

<template>
    <FullPageSection class="hero-landing">
        <HeroPartners class="left" />
        <div class="right">
            <h1 class="hero-title">
                A Unique Partnership for the Publication of ICC Arbitration Awards
            </h1>
            <p class="hero-text">The International Chamber of Commerce (ICC) & Jus Mundi have joined forces to make ICC Arbitration Awards and related materials freely available to the global legal community</p>
            <button class="hero-cta"><b>> Access ICC Awards</b></button>
        </div>
    </FullPageSection>
</template>

<style>
.hero-landing {
    display: grid;
    grid-auto-flow: column;
    align-content: center;
    align-items: center;
    justify-items: start;
    justify-content: stretch;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh;
    .left {
        height: 100vh;
        min-width: 50vw;
        padding: 8px;
    }
    .right {
        height: 100vh;
        width: 50vw;
        max-width: 581px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 8px;
        align-items: start;
        .hero-text {
            margin-top: 0px;
        }
        .hero-title {
            margin-top: 3em;
            margin-bottom: 0px;
        }
        .hero-cta {
            margin-top: 4em;
            justify-self: end;
        }
    }
}
</style>