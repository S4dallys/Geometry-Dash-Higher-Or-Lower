<script>
    import LeftHalf from "../lib/components/LeftHalf.svelte";
    import RightHalf from "../lib/components/RightHalf.svelte";
    import Overlay from "$lib/components/Overlay.svelte";
    import Lost from "$lib/components/Lost.svelte";

    // load
    export let data;
    let controller = data.controller;
    let variables = data.variables;

    // cookies
    let { highscore, highscore150, isTop150 } = variables;

    // system variables
    const transitionTime = 1500;
    let showButtons = true;
    let vs = true;
    let lost = false;
    let score = 0;

    // reactive
    let top;
    let bottom;
    let next;

    // side effects
    $: if (isTop150) {
        controller.useTop150();
        reset();
    } else {
        controller.dontUseTop150();
        reset();
    }

    function loadFirst() {
        let newVals = controller.getFirst();
        top = newVals.top;
        bottom = newVals.bottom;
        next = newVals.next;
    }

    function reset() {
        if (isTop150) {
            highscore150 = Math.max(highscore150, score);
        } else {
            highscore = Math.max(highscore, score);
        }

        controller.reset();
        loadFirst();
        score = 0;
        lost = false;
        showButtons = true;
        vs = true;
    }

    function checkAnswer(val) {
        showButtons = false;

        if (val) {
            setTimeout(() => {
                top = bottom;
                bottom = next;
                next = controller.getNext();
                score++;
                showButtons = true;
            }, transitionTime);
        } else {
            vs = false;
            setTimeout(() => {
                lost = true;
            }, transitionTime);
        }
    }

    function chooseEasier() {
        checkAnswer(controller.isEasier());
    }

    function chooseHarder() {
        checkAnswer(controller.isHarder());
    }
    loadFirst();
</script>

<div
    class="grid grid-rows-[50svh] grid-cols-1 md:grid-rows-1 md:grid-cols-[50%,50%,50%] w-svw h-svh overflow-hidden"
>
    {#if lost}
        <Lost {score} {reset} />
    {:else}
        <Overlay {score} {highscore} {highscore150} {vs} bind:isTop150 />

        <!-- top -->
        <div>
            <LeftHalf {...top} />
        </div>

        <!-- bottom -->
        <div>
            {#if showButtons}
                <RightHalf {...bottom} {chooseEasier} {chooseHarder} />
            {:else}
                <LeftHalf {...bottom} />
            {/if}
        </div>

        <!-- next -->
        <div>
            <RightHalf {...next} {chooseEasier} {chooseHarder} />
        </div>
    {/if}
</div>
