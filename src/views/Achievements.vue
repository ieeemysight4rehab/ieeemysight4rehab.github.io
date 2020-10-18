<template>
  <v-content class="pa-0">
    <v-container fluid class="mt-3 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#616161">IEEE MySIGHT4Rehab's Achievements</p>
            <br>
            <p class="google-font mb-0" style="font-size:120%">The team working hard together since formation of the project group and have achieved significant progress till today.</p>
            <br>
            <ul>
              <li class="google-font mb-0" style="font-size:120%">Project team first site visit to <a href="http://pibakismiri.gbs2u.com/" target=_blank style="text-decoration:none">Parent's Association Of The Special Children Miri (PIBAKIS) or Pemulihan Dalam Komuniti (PDK Miri)</a>, a Community-based Rehabilitation Centre located at Miri, Sarawak, in conjunction with <a href="https://ewh.ieee.org/sb/malaysia/curtinsarawak/" target=_blank style="text-decoration:none">IEEE Curtin Malaysia Student Branch</a> on 2012.</li>
              <br>
              <div id="lingallery">
                <lingallery 
                  :iid.sync="currentId" 
                  :width="600" 
                  :height="500" 
                  :responsive="true"
                  :showThumbnails="false"
                  :items="[
                    {
                      id: 'PIBAKIS', 
                      src: 'img/projects/events/event-4.png', 
                      thumbnail: 'img/projects/events/event-4.png', 
                      alt: 'Site Visit To PIBAKIS, Miri, Sarawak', 
                      caption: 'Site Visit To PIBAKIS, Miri, Sarawak'
                    }
                  ]
                "/>
              </div>
              <br>
              <li class="google-font mb-0" style="font-size:120%">Two (2) teams from <a href="https://www.utar.edu.my/" target=_blank style="text-decoration:none">Universiti Tunku Abdul Rahman (UTAR)</a> are shortlisted as Top 20 Finalists in <a href="https://aiyehum.ieeer10.org/aiyehum-2016-shortlisted-projects/?fbclid=IwAR3ckB7hYP-FS6LBtuAMHLsz9hmB3V8eBAUvohvQfFwMa0G9btSLAPnJjco" target=_blank style="text-decoration:none">All IEEE Young Engineers’ Humanitarian Challenge (AIYEHUM) 2016</a> for IEEE Region 10 Asia-Pacific region, being the only Malaysian team that shortlisted in AIYEHUM 2016. Each team have received grant of RM3,000 (USD500) from IEEE for prototype development and completion of the project.</li>
              <br>
              <li class="google-font mb-0" style="font-size:120%">Published a conference paper title <a href="https://ieeexplore.ieee.org/abstract/document/7843556" target=_blank style="text-decoration:none">"Development of low cost upper and lower extremities rehabilitation system with interactive feedback for children with movement disorders"</a> in <a href="https://ieeexplore.ieee.org/xpl/conhome/7829191/proceeding" target=_blank style="text-decoration:none">2016 IEEE EMBS Conference on Biomedical Engineering and Sciences (IECBES)</a> that held from 4th to 8th December 2016 at The Pullman Bangsar, Kuala Lumpur.</li>
              <br>
              <li class="google-font mb-0" style="font-size:120%">Featured in <a href="https://epics.ieee.org/" target=_blank style="text-decoration:none">EPICS in IEEE</a> for article <a href="https://epics.ieee.org/development-hand-cycle-children-movement-disorders/" target=_blank style="text-decoration:none">"Development of hand-cycle for children with movement disorders"</a> on 1st August 2016.</li>
              <br>
              <li class="google-font mb-0" style="font-size:120%">Two (2) teams (<a href="https://www.facebook.com/digitalhealthmalaysia/posts/1024214667654596?__cft__[0]=AZWR2o-2zZIr9GP9bqEiL4v-a0e8iuuCEhqsy-gJHh9u3zxOgbrifagXVa17_DFg9fd5ZII43an4f4oQgKl1GPFdTgm9PdWxEjXL8C2BZXdNwc2sMKDq_H41qs62pcwT3eO153dEzzqrFlaa_NzIeMASm3k8ZRIihOykKnXC52i_Et-sYKdtTWtoynG53zhxYeQ&__tn__=%2CO%2CP-R" target=_blank style="text-decoration:none">Team A</a> & <a href="https://www.facebook.com/digitalhealthmalaysia/posts/1024215304321199?__cft__[0]=AZWQwaOG-LGO7VS-q93gcqM0ZwLI_HFh4Solkp1N1obtowe-xrYM6koLZYwpi0fKzjf-rV2mnLnuf56DpRAJLt_0rQCg3MKFty0tCD7r4hXtsw9OksPs2812HfnGoz_U3dyubpRrHFYGgzmg0Kn7RC9LhUcNZ-Z0fzrgQoppHRjPHGmOagVuIyH5yBN7qI3kk_k&__tn__=%2CO%2CP-R" target=_blank style="text-decoration:none">Team B</a>) participated in <a href="https://www.monash.edu.my/mdp/tmb/telemedicine" target=_blank style="text-decoration:none">Malaysia Telemedicine Innovation Challenge 2016</a>, which is part of the <a href="https://www.monash.edu.my/news-and-events/pages/latest/articles/2016/shaping-tomorrows-healthcare-today" target=_blank style="text-decoration:none">2nd Telemedicine Conference</a> that held from 16th to 18th August 2016 at Swan Convention Centre, Sunway Medical Centre, Bandar Sunway, Selangor, Malaysia. (One of the participating team official website can be access <a href="https://pengyi00.wixsite.com/mysite-2" target=_blank style="text-decoration:none">here</a>)</li>
              <br>
              <li class="google-font mb-0" style="font-size:120%">The team showcased their <a href="https://ieeesightblog.wordpress.com/2017/03/29/volunteers-represent-ieee-at-utar-engineering-and-science-fiesta/" target=_blank style="text-decoration:none">historical work building devices to help rehabilitate children with movement disorders</a> at the  <a href="https://news.utar.edu.my/news/2017/Feb/25/01/01.html" target=_blank style="text-decoration:none">UTAR Engineering and Science Fiesta 2017</a> that held from 20 to 23 February 2017, which was organised by the UTAR Engineering Society in collaboration with The Institution Of Engineers Malaysia (IEM), Institution of Engineering and Technology (IET), Institution of Chemical Engineers (IChemE), Institution of Mechanical Engineers (IMechE), Institution of Civil Engineers (ICE), Institute of Electrical and Electronics Engineers (IEEE), Institute of Materials, Malaysia (IMM), American Society of Heating, Refrigerating, and Air-Conditioning Engineers (ASHRAE) Student Chapters, as well as UTAR Robotics Society, UTAR Mathematics Society, UTAR Architecture Society and Actuarial Science Society.</li>
              <br>
              <li class="google-font mb-0" style="font-size:120%">Featured in <a href="https://sight.ieee.org/" target=_blank style="text-decoration:none">IEEE SIGHT Blog</a> for article <a href="https://sight.ieee.org/ieee-mysight4rehab-ieee-embs-utar-student-club-interaction-day/" target=_blank style="text-decoration:none">"IEEE-MySIGHT4Rehab & IEEE-EMBS UTAR Student Club Interaction Day"</a> on 28th March 2018.</li>
              <br>
              <li class="google-font mb-0" style="font-size:120%">Featured in <a href="https://sight.ieee.org/" target=_blank style="text-decoration:none">IEEE SIGHT Blog</a> for article <a href="https://sight.ieee.org/training-sessions-hac-sight-malaysia/" target=_blank style="text-decoration:none">"Training Sessions in HAC/SIGHT Malaysia"</a> on 31st May 2018.</li>
              <br>
              <li class="google-font mb-0" style="font-size:120%">Featured in <a href="https://sight.ieee.org/" target=_blank style="text-decoration:none">IEEE SIGHT Blog</a> for article <a href="https://sight.ieee.org/malaysia-sight-group-collaborates-humanitarian-engagement-activity/" target=_blank style="text-decoration:none">"Malaysia SIGHT Group Collaborates In Humanitarian Engagement Activity"</a> on 22nd March 2019.</li>
            </ul>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  
</template>

<script>
import Lingallery from 'lingallery';
import TeamDetails from '@/assets/data/chapterDetails.json'

export default {
    components: { 
      Lingallery 
    },
    data() {
      return {
        TeamDetails: TeamDetails,
        images: [
          {
            id: 'someid1', 
            src: 'img/projects/design/design-1.png', 
            thumbnail: 'img/projects/design/design-1.png', 
            alt: 'Design 1', 
            caption: 'Design 1'
          },
          {
            id: 'someid2', 
            src: 'img/projects/design/design-2.png', 
            thumbnail: 'img/projects/design/design-2.png', 
            alt: 'Design 2', 
            caption: 'Design 2'
          }
        ]
      }
    }
}
</script>

<style scoped>
#lingallery {  width: 100%;
  display: flex;
  justify-content: center;
}
</style>