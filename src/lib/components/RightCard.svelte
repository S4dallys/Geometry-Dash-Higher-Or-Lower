<script>
    import Button from "./Button.svelte";

    export let name;
    export let author;
    export let chooseEasier;
    export let chooseHarder;
</script>

<div class="text-center text-white md:h-80">
    <p class="font-bold text-2xl md:text-5xl mb-2">"{name}"</p>
    <p class="italic text-xl md:text-2xl md:mb-5">{author}</p>
    <p class="text-lg mb-5 md:mb-10">is</p>

    <div class="flex flex-col gap-2">
    <Button value="Easier" icon="normal" handleClick={chooseEasier} />
    <Button value="Harder" icon="harder" handleClick={chooseHarder} />
    </div>
</div>
