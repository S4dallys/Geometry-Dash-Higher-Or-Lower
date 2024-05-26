<script>
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";

    export let score;
    export let highscore;
</script>

<div
    class="absolute top-0 z-10 text-white flex justify-center w-full text-center pt-5"
>
    <Header />
</div>
<div
    class="absolute z-10 w-10 md:w-16 aspect-square leading-[2.5rem] md:leading-[4rem] rounded-full bg-white font-bold text-black align-middle text-center text-xl md:text-2xl top-[50vh] left-1/2 translate-x-[-50%] translate-y-[-50%]"
>
    <p class="inline-block">VS</p>
</div>
<div class="absolute bottom-0 z-10 text-white w-full text-center p-5">
    <Footer {score} {highscore} />
</div>
