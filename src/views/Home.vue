<template>
  <v-content class="pa-0">
    <v-container fluid class="my-4">
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 md10>
          <HomeStartScreen />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="background-color:#F9F9F9">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <whatWeDo />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="background-color:#4C4A78">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <aboutIEEEMySIGHT4RehabChapter />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="py-5" style="background-color:#F9F9F9">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <eventshowcase />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid>
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <partners />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import HomeStartScreen from '@/components/home/HomeStartScreen'
import whatWeDo from '@/components/home/whatWeDo'
import aboutIEEEMySIGHT4RehabChapter from '@/components/home/aboutIEEEMySIGHT4RehabChapter'
import eventshowcase from '@/components/home/eventshowcase'
import partners from '@/components/home/partners'

export default {
  components: {
    HomeStartScreen,
    whatWeDo,
    aboutIEEEMySIGHT4RehabChapter,
    eventshowcase,
    partners,
  },
}
</script>
