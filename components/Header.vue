<!-- Header of the page -->

<template>
  <div>
    <header>
      <div class="fixed flex z-50 h-20 lg:h-28 w-full top-0 dark:bg-gray-900 bg-white items-center justify-between"
           id="navbar">
        <NuxtLink to="/" class="w-32 lg:w-48 flex-none cursor-pointer ml-12">
          <img alt="logo" src="../assets/LogoDraft.png">
        </NuxtLink>
        <div class="relative px-4 cursor-pointer lg:hidden items-center mr-6" v-on:click="manageMenu">
          <img src="../assets/burger-menu.png" class="w-12 relative" id="burgir" alt="">
        </div>

        <div class="absolute right-0 w-44 sm:w-72 -z-10 float-right grid cols-4 hidden" id="items">
          <div class="flex flex:col justify-end items-center dark:bg-gray-900 bg-white mt-56">
            <nav class="text-right">
              <ul class="mr-3">
                <li class="text-white-500 font-bold py-1">
                  <NuxtLink to="/areas" class="text-lg sm:text-2xl px-4 flex justify-end text-black dark:text-white
                                            hover:text-orange-500 border-r-4 border-orange-500 border-primary"
                            v-on:click="manageMenu">
                    <span>Areas</span>
                  </NuxtLink>
                </li>
                <li class="text-white-500 font-bold py-1">
                  <NuxtLink to="/projects" class="text-lg sm:text-2xl px-4 flex justify-end text-black dark:text-white
                                               hover:text-orange-500 border-r-4 border-orange-500 border-primary"
                            v-on:click="manageMenu">
                    <span>Projects</span>
                  </NuxtLink>
                </li>
                <li class="text-white-500 font-bold py-1">
                  <NuxtLink to="/team" class="text-lg sm:text-2xl px-4 flex justify-end text-black dark:text-white
                                            hover:text-orange-500 border-r-4 border-orange-500 border-primary"
                            v-on:click="manageMenu">
                    <span>Team</span>
                  </NuxtLink>
                </li>
                <li class="text-white-500 font-bold py-1">
                  <NuxtLink to="/about_us" class="text-lg sm:text-2xl px-4 flex justify-end text-black dark:text-white
                                      hover:text-orange-500 border-r-4 border-orange-500 border-primary"
                            v-on:click="manageMenu">
                    <span>Contact Us</span>
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="w-full hidden lg:block">
          <nav class="text-lg w-full font-bold text-slate-700 dark:text-slate-200">
            <ul class="flex justify-end">
              <li class="mr-8 lg:mr-16">
                <NuxtLink to="/areas" class="lg:text-2xl hover:text-orange-500 cursor-pointer">Areas</NuxtLink>
              </li>
              <li class="mr-8 lg:mr-16">
                <NuxtLink to="/projects" class="lg:text-2xl hover:text-orange-500 cursor-pointer">Projects</NuxtLink>
              </li>
              <li class="mr-8 lg:mr-16">
                <NuxtLink to="/team" class="lg:text-2xl hover:text-orange-500 cursor-pointer">Team</NuxtLink>
              </li>
              <li class="mr-8 lg:mr-16">
                <NuxtLink to="/about_us" class="lg:text-2xl hover:text-orange-500 cursor-pointer">About Us</NuxtLink>
              </li>
              <li class="inline-flex items-center">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-slate-700 dark:fill-slate-200 mx-2"
                       viewBox="0 -960 960 960">
                    <path
                        d="M479.765-340Q538-340 579-380.765q41-40.764 41-99Q620-538 579.235-579q-40.764-41-99-41Q422-620 381-579.235q-41 40.764-41 99Q340-422 380.765-381q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-450q-12.75 0-21.375-8.675Q40-467.351 40-480.175 40-493 48.625-501.5T70-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170-450H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-450H790ZM479.825-760Q467-760 458.5-768.625T450-790v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-890v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720Q467-40 458.5-48.625T450-70v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-170v100q0 12.75-8.675 21.375Q492.649-40 479.825-40ZM240-678l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217-786 226-777l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5-282q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743-174 734-183Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786-743 777-734l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897-182.897q-8.897-8.896-8.897-21.5Q174-217 183-226l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291-273 291-261t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480-480Z"/>
                  </svg>
                </div>
                <div>
                  <label class="relative flex items-center cursor-pointer">
                    <input type="checkbox"
                           v-model="theme"
                           v-on:input="bright"
                           class="sr-only peer">
                    <div
                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-slate-700 dark:fill-slate-200 mx-2"
                       viewBox="0 -960 960 960">
                    <path
                        d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Zm0-60q109 0 190-67.5T771-406q-25 11-53.667 16.5Q688.667-384 660-384q-114.689 0-195.345-80.655Q384-545.311 384-660q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180-480q0 125 87.5 212.5T480-180Zm-4-297Z"/>
                  </svg>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </header>
  </div>
</template>
<style>
* {
  font-family: 'Roboto', sans-serif;
}

/*.router-link-exact-active {*/
/*    color: red;*/
/*}*/
</style>

<script setup lang="ts">
//import {useColorMode} from "~/.nuxt/imports";
//@ts-ignore
let theme = useColorMode().value === 'dark'

function bright() {
  theme = (useColorMode().value === 'dark');
  if (useColorMode().value === 'dark') {
    useColorMode().preference = 'light';
  } else {
    useColorMode().preference = 'dark';
  }
}

//make the header disappear when scroll down and appear on scroll up
// let lastScroll = 0;
// addEventListener("scroll", function(){
//   let scrollTop = this.window.scrollY || document.documentElement.scrollTop;
//   if(scrollTop > lastScroll){
//     document.getElementById("navbar").classList.add("-translate-y-28");
//     if(!document.getElementById("items").classList.contains("hidden")) {
//       document.getElementById("burgir").classList.remove("rotate-90");
//       document.getElementById("items").classList.add("hidden");
//     }
//   }
//   else{
//     document.getElementById("navbar").classList.remove("-translate-y-28");
//   }
//   lastScroll = scrollTop;
// });
//
//
// //hide header on inactivity
// let time;
// onload = resetTimer;
// onmousemove = resetTimer;
//
// function hideNav() {
//   document.getElementById("navbar").classList.add("-translate-y-28");
//   document.getElementById("topBar").classList.add("-translate-y-28");
//   if(!document.getElementById("items").classList.contains("hidden")) {
//     document.getElementById("burgir").classList.remove("rotate-90");
//     document.getElementById("items").classList.add("hidden");
//   }
// }
//
// function resetTimer() {
//   document.getElementById("navbar").classList.remove("-translate-y-28");
//   document.getElementById("topBar").classList.remove("-translate-y-28");
//   clearTimeout(time);
//   time = setTimeout(hideNav, 4000);
// }


//shows the menu
function manageMenu(){
  if(document.getElementById("items").classList.contains("hidden")){
    document.getElementById("burgir").classList.add("rotate-90");
    document.getElementById("items").classList.remove("hidden");
  }else{
    document.getElementById("burgir").classList.remove("rotate-90");
    document.getElementById("items").classList.add("hidden");
  }
}

</script>

