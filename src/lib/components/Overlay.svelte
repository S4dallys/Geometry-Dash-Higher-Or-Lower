<script>
    import { scale } from "svelte/transition";
    import { cubicIn, cubicOut } from "svelte/easing";

    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import ToggleTop150 from "./ToggleTop150.svelte";

    export let score;
    export let highscore;
    export let highscore150;
    export let vs;
    export let isTop150

    function toggleTop150() {
        isTop150 = !isTop150
    }
</script>

<button class="z-[11] absolute top-0 left-[50%] translate-x-[-50%] min-[440px]:left-0 min-[440px]:translate-x-[0] py-4 px-5" on:click={toggleTop150}>
    <ToggleTop150 {isTop150} />
</button>

<div
    class="hidden min-[440px]:flex absolute top-0 z-10 text-white justify-center w-full text-center pt-5"
>
    <Header />
</div>
{#if vs}
    <div
        transition:scale={{ duration: 400, easing: cubicOut }}
        class="absolute z-10 w-10 md:w-16 aspect-square leading-[2.5rem] md:leading-[4rem]
    rounded-full bg-white font-bold text-black align-middle text-center
    text-xl md:text-2xl top-[50svh] left-1/2 translate-x-[-50%] translate-y-[-50%]"
    >
        <p class="inline-block">VS</p>
    </div>
{:else}
    <div
        transition:scale={{ duration: 400, easing: cubicIn }}
        class="absolute z-10 w-10 md:w-16 aspect-square leading-[2.5rem] md:leading-[4rem]
    rounded-full bg-red-500 font-bold text-black align-middle text-center
    text-xl md:text-2xl top-[50svh] left-1/2 translate-x-[-50%] translate-y-[-50%]"
    >
        <p class="inline-block">x</p>
    </div>
{/if}
<div class="absolute bottom-0 z-10 text-white w-full text-center p-5">
    <Footer {score} highscore={isTop150 ? highscore150 : highscore} />
</div>
