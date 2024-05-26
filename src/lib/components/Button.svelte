<script>
    export let value;
    export let icon;
    export let handleClick;
</script>

<button
    class="border-white border-2 mx-auto text-yellow-200 hover:bg-white 
    hover:text-black transition font-semibold px-8 md:w-[200px] md:py-7 text-sm md:text-lg 
    h-8 md:h-10 rounded-full flex justify-center items-center"
    on:click={handleClick}
>
    <p class="text-start w-[6ch]">{value}</p>
    <img class="h-5 aspect-square" src={`/${icon}.png`} alt="" />
</button>
