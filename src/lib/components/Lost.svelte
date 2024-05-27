<script>
    export let score;
    export let reset;
</script>

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
