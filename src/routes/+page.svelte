<script>
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import Card from "$lib/components/Card.svelte";
    import Button from "$lib/components/Button.svelte";

    let score = 0;
    let lost = false;
    let highScore = 0;
    $: highScore = Math.max(highScore, score);

    export let data;

    function getNext(reset) {
        async function fetchNewData() {
            const response = await fetch(`/api?reset=${reset}`);
            data = await response.json();
        }

        fetchNewData();
    }

    function chooseHarder() {
        if (data.left.position > data.right.position) {
            getNext();
            score++
            return;
        }

        lost = true;
    }

    function chooseEasier() {
        if (data.left.position < data.right.position) {
            getNext();
            score++
            return;
        }

        lost = true;
    }

    function resetGame() {
        getNext(true);
        lost = false;
        score = 0;
    }
</script>

{#await data}
    Loading...
{:then d}
    <div id="master" class="flex h-svh w-svw">
        {#if lost == true}
            <div
                class="text-white bg-black flex flex-col justify-center items-center w-svw h-svh"
            >
                <h1 class="text-6xl">You lost!</h1>
                <p class="text-4xl m-8">Score: {score}</p>
                <button
                    class="mt-6 px-4 py-2 rounded-3xl hover:scale-125 hover:text-green-500 transition border-black border-2 bg-gray"
                    on:click={resetGame}>Try again?</button
                >
            </div>
        {:else}
            <Header />

            <div class="flex justify-center items-start relative w-full">
                <img
                    class="absolute darken h-full object-cover"
                    src={d.left.thumbnail}
                    alt=""
                />
                <Card name={d.left.name} author={d.left.author}>
                    <p class="text-yellow-200 text-6xl mt-8 font-bold">
                        #{d.left.position}
                    </p>
                </Card>
            </div>

            <div
                class="absolute w-full h-full flex justify-center items-center"
            >
                <span
                    class="w-24 h-24 p-4 text-4xl z-10 font-bold rounded-full bg-white flex justify-center items-center"
                    >VS</span
                >
            </div>

            <div class="flex justify-center items-start relative w-full">
                <img
                    class="absolute darken h-full object-cover"
                    src={d.right.thumbnail}
                    alt=""
                />
                <Card name={d.right.name} author={d.right.author}>
                    <Button role="harder" on:click={chooseHarder} />
                    <Button role="easier" on:click={chooseEasier} />
                </Card>
            </div>

            <Footer {highScore} {score} />
        {/if}
    </div>
{/await}

<style lang="postcss">
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

    #master {
        font-family: Montserrat, sans-serif;
    }
    .darken {
        filter: brightness(40%);
    }
</style>
