<!-- About Us page -->
<template>
  <div class="grow">
    <Head>
      <Title>About Us</Title>
    </Head>
    <div> <!-- Page wrapper -->
      <div class="flex justify-center">
        <h1 class="page_title">
          About Us
        </h1>
      </div>

      <div class="flex flex-col"> <!-- All rows wrapper -->
        <v-timeline side="end" class="mb-6" line-thickness=3 line-color="#C0C0C0">
          <AboutUs v-for="row in about_us" :title="row.title" :subtitle="row.subtitle" :paragraph="row.paragraph"
                   :image_url="row.image_url" :color="row.color" :icon="row.icon" :alternative_text="row.alternative_text"></AboutUs>
        </v-timeline>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
const {data: about_us, error}: { data: AboutUs[] } = await useFetch(
    '/api/about_us',
    {
      method: "GET",
    }
);
</script>