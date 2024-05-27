<script>
    import LeftHalf from "../lib/components/LeftHalf.svelte";
    import RightHalf from "../lib/components/RightHalf.svelte";
    import Overlay from "$lib/components/Overlay.svelte";
    import Lost from "$lib/components/Lost.svelte";

    export let data;
    let controller = data.controller;

    // system variables
    const transitionTime = 1500;
    let showButtons = true;
    let vs = true;
    let lost = false;
    let score = 0;
    let highscore = 0;

    // reactive
    let top;
    let bottom;
    let next;

    // side effects
    $: highscore = Math.max(highscore, score);

    function loadFirst() {
        let newVals = controller.getFirst();
        top = newVals.top;
        bottom = newVals.bottom;
        next = newVals.next;
    }

    function reset() {
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
            }, transitionTime + 500);
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

<div class="grid md:grid-cols-[50%,50%] w-svw h-svh overflow-hidden">
    {#if lost}
        <Lost {score} {reset} />
    {:else}
        <Overlay {score} {highscore} {vs} />
        <LeftHalf {...top} />
        {#if showButtons}
            <RightHalf
                {...bottom}
                {chooseEasier}
                {chooseHarder}
            />
        {:else}
            <LeftHalf {...bottom} />
        {/if}
        <RightHalf {...next} {chooseEasier} {chooseHarder} />
    {/if}
</div>
