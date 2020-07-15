<template>
  <v-content class="pa-0">
    <v-container fluid class="mt-2 mb-0">
      <v-layout wrap align-start justify-center row fill-height class="my-0">
        <v-flex xs12 md8 class="mb-0">
          
          <p class="google-font mb-0 mt-3" style="font-size:200%;color:#616161">Contact {{ChapterDetails.ChapterName}}</p>
          <!-- <v-divider></v-divider> -->
          <p class="google-font mt-3" style="font-size:110%">Our groups are open to newbies, students, developers, and organizations who are interested in contributing this project.</p>
          
          <p class="google-font mb-0" style="font-size:130%">Social Media:</p>
          <p class="google-font mt-0 ml-0" style="font-size:130%" >
            <span v-for="(item,i) in ChapterDetails.socialLinks" :key="i">
              <v-tooltip bottom>
                  <v-btn flat icon :href="item.link" target="_blank" slot="activator">
                    <v-icon>{{item.icon}}</v-icon>
                  </v-btn>
                  <span>{{item.name}}</span>
              </v-tooltip>
            </span>
          </p>
            
          <p class="google-font mb-0" style="font-size:120%">Questions? Please contact Mr. Chong Yu Zheng ({{ChapterDetails.ChapterEmail}}).</p>
          <br/>
          <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=universiti%20tunku%20abdul%20rahman%20sungai%20long&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net">google maps iframe</a></div></div>
          <br/>
          <p class="google-font mb-0" style="font-size:120%"><b>Universiti Tunku Abdul Rahman (UTAR)</b></p>
          <p class="google-font mb-0" style="font-size:120%">Sungai Long Campus,</p> 
          <p class="google-font mb-0" style="font-size:120%">Jalan Sungai Long,</p>
          <p class="google-font mb-0" style="font-size:120%">Bandar Sungai Long, Cheras,</p>
          <p class="google-font mb-0" style="font-size:120%">43000 Kajang, Selangor,</p>
          <p class="google-font mb-0" style="font-size:120%">Malaysia.</p>
        </v-flex>
        <v-flex xs12 md2 lg2 class="pa-2">
          <v-img
              :src="require('@/assets/img/svg/contact2.svg')"
              :lazy-src="require('@/assets/img/svg/contact2.svg')"
              width="70%"
              style="float:right"
              >
              <v-layout
                  slot="placeholder"
                  fill-height
                  align-center
                  justify-center
                  ma-0
              >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>  
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'

  export default {
    components: {
    },
    data() {
      return {
        ChapterDetails: ChapterDetails
      }
    },
  }
</script>

<style>
.mapouter{
    position:relative;
    text-align:right;
    height:500px;
    width:600px;
}
.gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:500px;
    width:600px;
}
</style>