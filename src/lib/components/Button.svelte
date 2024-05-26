<script>
    export let value;
    export let icon;
    export let handleClick;
</script>

<button
    class="border-white border-2 mx-auto w-[200px] text-yellow-200 hover:bg-white hover:text-black transition font-semibold px-10 py-5 text-sm md:text-lg h-10 rounded-full flex gap-3 items-center"
    on:click={handleClick}
>
    <p class="w-20">{value}</p>
    <img class="h-5 aspect-square" src={`/${icon}.png`} alt="" />
</button>
