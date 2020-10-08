<template>
  <v-content class="pa-0">

    <v-container fluid class="mt-3 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#616161">IEEE MySIGHT4Rehab's Achievements</p>
            <br>
            <p class="google-font mb-0" style="font-size:120%">The team working hard together for past few years and have achieved significant progress.</p>
            <br>
            <ul>
              <li class="google-font mb-0" style="font-size:120%">Two (2) teams from <a href="https://www.utar.edu.my/" style="text-decoration:none">Universiti Tunku Abdul Rahman (UTAR)</a> are shortlisted as Top 20 Finalists in <a href="https://aiyehum.ieeer10.org/aiyehum-2016-shortlisted-projects/?fbclid=IwAR3ckB7hYP-FS6LBtuAMHLsz9hmB3V8eBAUvohvQfFwMa0G9btSLAPnJjco" style="text-decoration:none">All IEEE Young Engineers’ Humanitarian Challenge (AIYEHUM) 2016</a> for IEEE Region 10 Asia-Pacific region, being the only Malaysian team that shortlisted in AIYEHUM 2016. Each team have received grant of RM3,000 (USD500) from IEEE for prototype development and completion of the project.</li>
              <br>
              <li class="google-font mb-0" style="font-size:120%">Published a conference paper title <a href="https://ieeexplore.ieee.org/abstract/document/7843556" style="text-decoration:none">"Development of low cost upper and lower extremities rehabilitation system with interactive feedback for children with movement disorders"</a> in <a href="https://epics.ieee.org/development-hand-cycle-children-movement-disorders/" style="text-decoration:none">2016 IEEE EMBS Conference on Biomedical Engineering and Sciences (IECBES)</a> that held from 4 to 8 December 2016 at The Pullman Bangsar, Kuala Lumpur.</li>
              <br>
              <li class="google-font mb-0" style="font-size:120%">Featured in <a href="https://ieeexplore.ieee.org/abstract/document/7843556" style="text-decoration:none">EPICS in IEEE</a> for article <a href="https://ieeexplore.ieee.org/abstract/document/7843556" style="text-decoration:none">"Development of hand-cycle for children with movement disorders"</a> on 1st August 2016.</li>
              <br>
              <li class="google-font mb-0" style="font-size:120%">The team showcased their <a href="https://ieeesightblog.wordpress.com/2017/03/29/volunteers-represent-ieee-at-utar-engineering-and-science-fiesta/" style="text-decoration:none">historical work building devices to help rehabilitate children with movement disorders</a> at the  <a href="https://news.utar.edu.my/news/2017/Feb/25/01/01.html" style="text-decoration:none">UTAR Engineering and Science Fiesta 2017</a> that held from 20 to 23 February 2017, which was organised by the UTAR Engineering Society in collaboration with The Institution Of Engineers Malaysia (IEM), Institution of Engineering and Technology (IET), Institution of Chemical Engineers (IChemE), Institution of Mechanical Engineers (IMechE), Institution of Civil Engineers (ICE), Institute of Electrical and Electronics Engineers (IEEE), Institute of Materials, Malaysia (IMM), American Society of Heating, Refrigerating, and Air-Conditioning Engineers (ASHRAE) Student Chapters, as well as UTAR Robotics Society, UTAR Mathematics Society, UTAR Architecture Society and Actuarial Science Society.</li>
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
