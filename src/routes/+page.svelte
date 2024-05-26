<script>
    import LeftCard from "$lib/components/LeftCard.svelte";
    import RightCard from "$lib/components/RightCard.svelte";
    import Overlay from "$lib/components/Overlay.svelte";

    export let data;
    let controller = data.controller;

    // system variables
    let lost = false;
    let score = 0;
    let highscore = 0;

    // side effects
    $: highscore = Math.max(highscore, score);
    $: console.log(top, bottom);

    let top;
    let bottom;
    let next;

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
    }

    function checkAnswer(val) {
        if (val) {
            top = bottom;
            bottom = next;
            next = controller.getNext();
            score++;
        } else {
            lost = true;
        }
    }

    loadFirst();
</script>

<div class="container">
    {#if lost}
        <div
            class="text-white bg-black flex flex-col justify-center items-center w-svw h-svh"
        >
            <h1 class="text-6xl">You lost!</h1>
            <p class="text-4xl m-8">Score: {score}</p>
            <button
                class="mt-6 px-4 py-2 rounded-3xl hover:scale-125 hover:text-green-500 transition border-black border-2 bg-gray"
                on:click={reset}>Try again?</button
            >
        </div>
    {:else}
        <Overlay {score} {highscore} />
        <div
            style="background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({top.thumbnail}) center/cover no-repeat;"
            class="h-1/2 w-full fixed top-0 md:h-full md:w-1/2 md:left-0"
        >
            <div
                class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            >
                <LeftCard
                    name={top.name}
                    author={top.author}
                    position={top.position}
                />
            </div>
        </div>
        <div
            style="background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({bottom.thumbnail}) center/cover no-repeat;"
            class="h-1/2 w-full fixed bottom-0 md:h-full md:w-1/2 md:right-0"
        >
            <div
                class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            >
                <RightCard
                    name={bottom.name}
                    author={bottom.author}
                    chooseEasier={() => {
                        checkAnswer(controller.isEasier());
                    }}
                    chooseHarder={() => {
                        checkAnswer(controller.isHarder());
                    }}
                />
            </div>
        </div>
    {/if}
</div>
