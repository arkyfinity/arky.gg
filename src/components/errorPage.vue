<template>
    <div class="code-area">
        <span class="comment">// 404 - Page not found</span>
        <span>
            <span class="red">if</span>(<span class="light italic">error</span>) {
        </span>
        <span>
            <span class="indent blue">throw</span><span>(<span class="yellow">"(<span class="arm">╯</span>°□°)<span class="arm">╯</span><span class="throw">︵</span> <span class="table">┻━┻</span>"</span>);</span>
        </span>
        <span>}</span>
    </div>
</template>

<style lang="scss" scoped>
*, *:before, *:after {
	border: 0;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html,
body {
    width: 100%;
    height: 100%;
}

body {
    margin: 0;
    background: #081421;
}

.code-area {
    position: absolute;
    width: 320px;
    min-width: 320px;
    top: 50%;
    left: 50%;
    font-size: 1.125rem;
    line-height: 1.5em;
    color: #d3d7de;
    cursor: default;
    font-family: "Roboto Mono","Liberation Mono",SFMono-Regular,Consolas,Menlo,Courier,monospace;
    font-weight: 500;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

span {
	display: inline-block;
}

.code-area > span {
    display: block;
}

@media screen and (max-width: 320px) {
    .code-area {
        font-size: 5vw;
        min-width: auto;
        width: 95%;
        margin: auto;
        padding: 5px;
        padding-left: 10px;
        line-height: 6.5vw;
    }
}

.comment {
    color: #777;
    font-style: italic;
}

.red {
    color: #d65562;
}

.light-blue {
    color: #4ca8ef;
}

.blue {
    color: #2796ec;
}

.light {
    color: #bdbdbd;
}

.italic {
    font-style: italic;
}

.indent {
    padding-left: 2rem;
}

.yellow {
    color: #a6a61f;
}

.arm {
	animation: arm var(--dur) linear infinite;
	transform-origin: 25% 25%;
}

.throw {
	animation: throw var(--dur) linear infinite;
}

.table {
	animation: table var(--dur) linear infinite;
	transform-origin: -33% 50%;
}

.descr {
    margin-top: 20px;
    line-height: 1.42;
    p {
        margin: 0 0 10px;
        font-size: 1rem;
        color: rgba(255,255,255,.65);
    }
}

@keyframes arm {
	from {
        transform: rotate(90deg);
    }
	12.5%,
    to {
        transform: rotate(0deg);
    }
}

@keyframes throw {
	from {
        opacity: 0;
    }
	37.5%,
    to {
        opacity: 1;
    }
}

@keyframes table {
	from {
        transform: rotate(-180deg);
    }
	37.5%,
    to {
        transform: rotate(0);
    }
}
</style>

