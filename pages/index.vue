<!-- Home page -->
<script setup lang="ts">

function switchDetails(details: HTMLDetailsElement) {
  if (details.open) {
    details.open = false;
    details.children[1].classList.add('hidden');
  } else {
    details.open = true;
    details.children[1].classList.remove('hidden');
  }
}

</script>

<template>
  <div> <!-- homepage -->
    <div class="bg-scroll bg-cover bg-center aspect-auto w-screen"
         style="background-image:url('https://i.pinimg.com/originals/7a/c0/40/7ac0401bf9764abb6612a069b033c7c8.jpg');">
      <div
          class="snap-y snap-mandatory backdrop-blur-sm flex flex-col w-full text-sm sm:text-base md:text-lg lg:text-xl dark:text-white">
        <div class="snap-center flex flex-row w-full justify-start mt-10">
          <div class="flex flex-row border-r-2 border-black w-1/2 translate-x-0.5 justify-end text-end">
            <details
                class="sm:hidden bg-gray-200 dark:bg-gray-600 drop-shadow-2xl rounded-xl w-2/3 mr-2 sm:mr-5 md:mr-10 p-2"
                v-on:click="switchDetails(this)">
              <summary class="font-bold"> What is StartMeUp? </summary>
              <span> Welcome to StartMeUp, where we turn innovative ideas into thriving businesses.
                As a leading venture capital firm, we are committed to fueling the growth and success of startups across a wide range of industries</span>
            </details>
            <div
                class="hidden sm:block bg-gray-200 dark:bg-gray-600 drop-shadow-2xl rounded-xl w-2/3 mr-2 sm:mr-5 md:mr-10 p-2">
              <span> Welcome to StartMeUp, where we turn innovative ideas into thriving businesses.
                As a leading venture capital firm, we are committed to fueling the growth and success of startups across a wide range of industries</span>
            </div>
          </div>
        </div>
        <div class="snap-center flex flex-row w-full justify-end">
          <div class="border-l-2 border-black w-1/2">
            <details
                class="sm:hidden bg-gray-200 dark:bg-gray-600 drop-shadow-2xl rounded-xl w-2/3 ml-2 sm:ml-5 md:ml-10 p-2">
              <summary class="font-bold"> What is our mission? </summary>
              <span> At StartMeUp, we believe in the power of entrepreneurship and the transformative potential of disruptive technologies.
                Our mission is to identify and support exceptional founders and visionary teams who are revolutionizing their respective industries</span>
            </details>
            <div class="hidden sm:block bg-gray-200 dark:bg-gray-600 drop-shadow-2xl rounded-xl w-2/3 ml-2 sm:ml-5 md:ml-10 p-2">
              <span class="mr-10"> At StartMeUp, we believe in the power of entrepreneurship and the transformative potential of disruptive technologies.
                Our mission is to identify and support exceptional founders and visionary teams who are revolutionizing their respective industries</span>
            </div>
          </div>
        </div>
        <div class="snap-center flex flex-row w-full justify-start">
          <div class="flex flex-row border-r-2 border-black w-1/2 translate-x-0.5 justify-end">
            <lazy-nuxt-img src="https://www.utax.it/uploads/big/news/124/team-building.jpg" alt="team picture"
                           class="drop-shadow-2xl rounded-xl w-3/4 md:w-2/3 mr-2 sm:mr-5 md:mr-10"/>
          </div>
        </div>
        <div class="snap-center flex flex-row w-full justify-end">
          <div class="border-l-2 border-black w-1/2">
            <details
                class="sm:hidden bg-gray-200 dark:bg-gray-600 drop-shadow-2xl rounded-xl w-2/3 ml-2 sm:ml-5 md:ml-10 p-2">
              <summary class="font-bold"> Our network </summary>
              <span> With our extensive network, deep industry expertise, and strategic guidance, we provide more than just capital.
                We partner with entrepreneurs from the early stages, offering mentorship, operational support, and access to our global network of investors, advisors, and industry leaders.
                Together, we aim to build scalable and sustainable businesses that leave a lasting impact</span>
            </details>
            <div class="hidden sm:block bg-gray-200 dark:bg-gray-600 drop-shadow-2xl rounded-xl w-2/3 ml-2 sm:ml-5 md:ml-10 p-2">
              <span class="mr-10"> With our extensive network, deep industry expertise, and strategic guidance, we provide more than just capital.
                We partner with entrepreneurs from the early stages, offering mentorship, operational support, and access to our global network of investors, advisors, and industry leaders.
                Together, we aim to build scalable and sustainable businesses that leave a lasting impact</span>
            </div>
          </div>
        </div>
        <div class="snap-center flex flex-row w-full justify-start">
          <div class="flex flex-row border-r-2 border-black w-1/2 translate-x-0.5 justify-end text-end">
            <details
                class="sm:hidden bg-gray-200 dark:bg-gray-600 drop-shadow-2xl rounded-xl w-2/3 mr-2 sm:mr-5 md:mr-10 p-2"
                v-on:click="switchDetails(this)">
              <summary class="font-bold"> How do we invest? </summary>
              <span> Our investment philosophy is rooted in a long-term approach.
                We focus on building enduring relationships with our portfolio companies, providing ongoing support throughout their growth journey.
                We invest in companies with high growth potential, strong market traction, and a compelling vision for the future</span>
            </details>
            <div class="hidden sm:block bg-gray-200 dark:bg-gray-600 drop-shadow-2xl rounded-xl w-2/3 mr-2 sm:mr-5 md:mr-10 p-2">
              <span class="mr-10"> Our investment philosophy is rooted in a long-term approach.
                We focus on building enduring relationships with our portfolio companies, providing ongoing support throughout their growth journey.
                We invest in companies with high growth potential, strong market traction, and a compelling vision for the future</span>
            </div>
          </div>
        </div>
        <div class="snap-center flex flex-row w-full justify-end">
          <div class="flex flex-row border-l-2 border-black w-1/2">
            <lazy-nuxt-img
                src="https://www.hotpmo.com/wp-content/uploads/2021/10/dreamstime_xxl_49486769-2690x1310.jpg"
                alt="team picture"
                class="drop-shadow-2xl rounded-xl w-3/4 md:w-2/3 ml-2 sm:ml-5 md:ml-10"/>
          </div>
        </div>
        <div class="snap-center flex flex-row w-full justify-start">
          <div class="flex flex-row border-r-2 border-black w-1/2 translate-x-0.5 justify-end text-end">
            <details
                class="sm:hidden bg-gray-200 dark:bg-gray-600 drop-shadow-2xl rounded-xl w-2/3 mr-2 sm:mr-5 md:mr-10 p-2"
                v-on:click="switchDetails(this)">
              <summary class="font-bold"> Our results </summary>
              <span> StartMeUp has a proven track record of successful investments, helping numerous startups reach their full potential.
                Our portfolio spans across various sectors, including technology, healthcare, consumer goods, and clean energy.
                We take pride in our ability to identify promising opportunities and help our portfolio companies navigate the challenges of scaling and market expansion</span>
            </details>
            <div class="hidden sm:block bg-gray-200 dark:bg-gray-600 drop-shadow-2xl rounded-xl w-2/3 mr-2 sm:mr-5 md:mr-10 p-2">
              <span class="mr-10"> StartMeUp has a proven track record of successful investments, helping numerous startups reach their full potential.
                Our portfolio spans across various sectors, including technology, healthcare, consumer goods, and clean energy.
                We take pride in our ability to identify promising opportunities and help our portfolio companies navigate the challenges of scaling and market expansion</span>
            </div>
          </div>
        </div>
        <div class="snap-center flex flex-row w-full justify-end mb-10">
          <div class="border-l-2 border-black w-1/2">
            <details
                class="sm:hidden bg-gray-200 dark:bg-gray-600 drop-shadow-2xl rounded-xl w-2/3 ml-2 sm:ml-5 md:ml-10 p-2">
              <summary class="font-bold"> You can join us </summary>
              <span> If you are an ambitious entrepreneur with a disruptive idea, we invite you to explore the possibility of partnering with us.
                Together, we can transform your vision into reality and create a brighter future.
                Learn more about our investment criteria, portfolio companies, and how to get in touch on our website</span>
            </details>
            <div class="hidden sm:block bg-gray-200 dark:bg-gray-600 drop-shadow-2xl rounded-xl w-2/3 ml-2 sm:ml-5 md:ml-10 p-2">
              <span class="mr-10"> If you are an ambitious entrepreneur with a disruptive idea, we invite you to explore the possibility of partnering with us.
                Together, we can transform your vision into reality and create a brighter future.
                Learn more about our investment criteria, portfolio companies, and how to get in touch on our website</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
