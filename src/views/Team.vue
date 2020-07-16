<template>
  <v-content class="pa-0">

    <v-container fluid class="mt-3 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#616161">Our lineup of big thinkers and even bigger doers</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%">The team worked together through weekly meetings, project discussions, technical visits to the NGOs, and various training workshops to design the mechanical properties and structure of the hand-cycle as a collective group. It is anticipated that three more prototypes will be developed by the project team and commissioned to the NGOs by December of 2016.</p>

            <p class="google-font mt-3 mb-0" style="font-size:110%">Our goal is to aid physically challenged children with movement difficulties (e.g. Cerebral Palsy, Spasticity) in Malaysia, inculcate leadership development amongst volunteers especially engineering students generally, and biomedical engineering students specifically, and also volunteers with same interest.</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <coreTeam/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <technicalTeam/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <supportTeam/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  
</template>

<script>
import TeamDetails from '@/assets/data/chapterDetails.json'
import coreTeam from '@/components/team/coreTeam'
import technicalTeam from '@/components/team/technicalTeam'
import supportTeam from '@/components/team/supportTeam'
  export default {
    components: {
      coreTeam,
      technicalTeam,
      supportTeam
    },
    data() {
      return {
        TeamDetails: TeamDetails,
      }
    },
  }
</script>
