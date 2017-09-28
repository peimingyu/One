<template>
    <div class="miao">
        <div class="new">
            <span>京东<label style="background:red;color:white;">快报</label></span>
            <marquee direction='up' scrolldelay='100' Height="50px">
                华为荣耀6
                华为荣耀7
                华为荣耀8
                华为荣耀9
            </marquee>
            <span>更多</span>
        </div>
    </div>
</template>

<script>

    export default{
        name:'kuai'
    }
</script>

<style>
    .miao{
        width: 100%;
    }
    .new{
        width: 100%;
        display: flex;
    }
    .new span{
        width: 40%;
        text-align: center;
    }
    .new marquee{
        padding:0 .1rem;
    }
</style>