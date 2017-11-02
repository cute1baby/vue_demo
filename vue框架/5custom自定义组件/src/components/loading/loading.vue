<template>
    <div>
        <div class="loaders">
            <div class="loader">
                <div class="loader-inner ball-clip-rotate-pulse">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
    html, body {
        padding: 0;
        margin: 0;
        height: 100%;
        font-size: 16px;
        background: #ed5565;
        color: #fff;
        font-family: 'Source Sans Pro';
    }
    .loaders {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex: 0 1 auto;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .loaders .loader {
        box-sizing: border-box;
        display: flex;
        flex: 0 1 auto;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 25%;
        max-width: 25%;
        height: 200px;
        align-items: center;
        justify-content: center;
    }
    .ball-clip-rotate-pulse {
        position: relative;
        -webkit-transform: translateY(-15px);
        -ms-transform: translateY(-15px);
        transform: translateY(-15px);
    }
    .ball-clip-rotate-pulse > div:first-child {
        background: #fff;
        height: 16px;
        width: 16px;
        top: 9px;
        left: 9px;
        -webkit-animation: scale 1s 0s cubic-bezier(.09, .57, .49, .9) infinite;
        animation: scale 1s 0s cubic-bezier(.09, .57, .49, .9) infinite;
    }
    .ball-clip-rotate-pulse > div {
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 100%;
    }
    @keyframes scale {
        30% {
            -webkit-transform: scale(0.3);
            transform: scale(0.3);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    .ball-clip-rotate-pulse > div:last-child {
        position: absolute;
        border: 2px solid #fff;
        width: 30px;
        height: 30px;
        background: transparent;
        border: 2px solid;
        border-color: #fff transparent #fff transparent;
        -webkit-animation: rotate 1s 0s cubic-bezier(.09, .57, .49, .9) infinite;
        animation: rotate 1s 0s cubic-bezier(.09, .57, .49, .9) infinite;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
    }
    @keyframes rotate {
        0% {
            -webkit-transform: rotate(0deg) scale(1);
            transform: rotate(0deg) scale(1);
        }
        50% {
            -webkit-transform: rotate(180deg) scale(0.6);
            transform: rotate(180deg) scale(0.6);
        }
        100% {
            -webkit-transform: rotate(360deg) scale(1);
            transform: rotate(360deg) scale(1);
        }
    }
</style>