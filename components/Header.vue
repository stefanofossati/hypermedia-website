<!-- Header of the page -->
<template>
    <header>
        <h1>Header</h1>
        <nav>
            <NuxtLink to = "/projects">Projects</NuxtLink>
        </nav>
    </header>
</template>

<style>
    header
    {
        background-color: blue;
    }
    header
    {
        padding: 0px 20px 0px 20px;
        margin-bottom: 5px;
        border-bottom: 5px solid cyan;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav {
        display: flex;
        gap: 30px;
        font-size: 17pt;
        font-weight: bold;
    }
</style>