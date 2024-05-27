<script>
    import { fade } from "svelte/transition";
    import { circOut } from "svelte/easing";

    import Button from "./Button.svelte";

    export let name;
    export let author;
    export let chooseEasier;
    export let chooseHarder;
</script>

<div class="text-center break-words text-white h-36 md:h-80 w-svw md:w-[50svw]">
    <p class="font-bold text-2xl md:text-5xl md:mb-2">"{name}"</p>
    <p class="italic text-xl md:text-2xl md:mb-5">{author}</p>
    <p class="text-lg my-2 md:mb-10">is</p>

    <div class="flex flex-col gap-2" transition:fade={{ duration: 500, easing: circOut }}>
        <Button value="Easier" icon="normal" handleClick={chooseEasier} />
        <Button value="Harder" icon="harder" handleClick={chooseHarder} />
    </div>
</div>
