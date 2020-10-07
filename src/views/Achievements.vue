<template>
  <v-content class="pa-0">

    <v-container fluid class="mt-3 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#616161">Achievements</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%">The team working hard together for past few years and have achieved significant progress.</p>
            <br>
            <ul>
              <li class="google-font mb-0" style="font-size:120%">Two (2) teams from <a href="https://www.utar.edu.my/" style="text-decoration:none">Universiti Tunku Abdul Rahman (UTAR)</a> are shortlisted as Top 20 Finalists in <a href="https://aiyehum.ieeer10.org/aiyehum-2016-shortlisted-projects/?fbclid=IwAR3ckB7hYP-FS6LBtuAMHLsz9hmB3V8eBAUvohvQfFwMa0G9btSLAPnJjco" style="text-decoration:none">All IEEE Young Engineers’ Humanitarian Challenge (AIYEHUM) 2016</a> for IEEE Region 10 Asia-Pacific region, being the only Malaysian university team that shortlisted in AIYEHUM 2016. Each team have received grant of RM3,000 (USD500) from IEEE for prototype development and completion of the project.</li>
              <li class="google-font mb-0" style="font-size:120%">Published a conference paper title <a href="https://ieeexplore.ieee.org/abstract/document/7843556" style="text-decoration:none">"Development of low cost upper and lower extremities rehabilitation system with interactive feedback for children with movement disorders"</a> in <a href="https://ieeexplore.ieee.org/xpl/conhome/7829191/proceeding" style="text-decoration:none">2016 IEEE EMBS Conference on Biomedical Engineering and Sciences (IECBES)</a>.</li>
            </ul>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  
</template>

<script>
import TeamDetails from '@/assets/data/chapterDetails.json'
  export default {
    components: {},
    data() {
      return {
        TeamDetails: TeamDetails,
      }
    },
  }
</script>
