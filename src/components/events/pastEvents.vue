<template>
    <v-container class="pa-0 mb-3">
        <v-snackbar
            v-model="errorAlert"
            bottom
            left
            >
            {{ errorMsg }}
            <v-btn
                color="pink"
                flat
                @click="errorAlert = false"
            >
                Close
            </v-btn>
        </v-snackbar>

        <v-layout wrap align-center justify-center row fill-height class="mt-0 mb-0" >
           <v-flex xs12 md12 lg12 class="pa-2 mb-0">
               <p class="google-font mb-0" style="font-size:170%;color:#0277bd">Directory of past events</p>
               <p class="google-font mt-0 mb-0" style="font-size:110%;color:#616161 ">
                   Events are listed in reverse chronological order by date.
               </p>
               <br/>
            </v-flex> 
        </v-layout>

        <v-layout wrap row >

            <v-flex xs12 v-if="showLoader">
                <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg4 v-for="n in 3" :key="`4${n}`">
                        <v-list two-line subheader  class="pa-2">
                            <v-list-tile
                                avatar
                            >
                                <v-list-tile-avatar>
                                    <v-avatar color="animate-shimmer" >
                                        <span class="google-font" style="width:100vh;"></span>
                                    </v-avatar>
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title class="google-font animate-shimmer" style="color:#424242;width:200px;height:20px;"></v-list-tile-title>
                                    <v-list-tile-sub-title class="google-font mt-1 animate-shimmer" style="color:#424242;width:100px;height:20px;"></v-list-tile-sub-title>
                                </v-list-tile-content>

                                <v-list-tile-action>
                                    <v-icon color="grey lighten-3">info</v-icon>
                                </v-list-tile-action>
                                
                            </v-list-tile>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-flex>
           

            <v-flex xs12 sm6 md4 lg4 v-for="(item,i) in eventsData" :key="i">
                <v-slide-y-reverse-transition>
                    <v-list two-line subheader v-show="showData" class="pa-2">
                        <v-list-tile
                            avatar
                            style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-top:0; border-left:0; border-right:0; border-bottom:1"
                        >
                            <v-list-tile-avatar>
                                <v-avatar color="grey lighten-2" >
                                    <span class="google-font" style="width:100vh">{{getCharString(item.name)}}</span>
                                </v-avatar>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title class="google-font" style="color:#424242">{{ item.name }}</v-list-tile-title>
                                <v-list-tile-sub-title class="google-font">{{ item.local_date | dateFilter }}</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-tooltip bottom>
                                    <v-btn icon ripple :href="item.link" target="_blank" rel="noopener" slot="activator">
                                        <v-icon color="grey darken-1">info</v-icon>
                                    </v-btn>
                                    
                                    <span>See More about {{item.name}}</span>
                                </v-tooltip>
                            </v-list-tile-action>
                            
                        </v-list-tile>
                        

                    </v-list>
                </v-slide-y-reverse-transition>
            </v-flex>

            <v-flex xs12 v-if="notFoundPastEventFlag==true">
                <p class="google-font px-2" style="font-size:140%"><v-icon >highlight_off</v-icon> Past Events Not Found!</p>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
export default {
    data() {
        return {
            eventsData:[
                {
                    name: "UTAR Engineering and Science Fiesta",
                    local_date: "2017-02-20",
                    local_time: "10:00 AM",
                    link: "https://ieeesightblog.wordpress.com/2017/03/29/volunteers-represent-ieee-at-utar-engineering-and-science-fiesta/"
                },
                {
                    name: "Club Interaction Day",
                    local_date: "2018-02-03",
                    local_time: "10:00 AM",
                    link: "https://sight.ieee.org/ieee-mysight4rehab-ieee-embs-utar-student-club-interaction-day/"
                },
                {
                    name: "Humanitarian Engagement Activity",
                    local_date: "2019-03-10",
                    local_time: "10:00 AM",
                    link: "https://sight.ieee.org/malaysia-sight-group-collaborates-humanitarian-engagement-activity/"
                },
            ],
            showLoader: false,
            showData: true,
            errorMsg: '',
            errorAlert: false,
            notFoundPastEventFlag: false
        }
    },
    methods:{
        getCharString(data){
            var splitArr = data.split(" ")
            if(splitArr.length>1){
                return (splitArr[0].substring(0,1)+''+splitArr[1].substring(0,1)).toUpperCase()
            }
            else{
                return (splitArr[0].substring(0,1)).toUpperCase()
            }
        },
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        },

        dateFilter: (value)=>{
            const date = new Date(value)
            return date.toLocaleString(['en-MY'], {month: 'short', day: '2-digit', year: 'numeric'})
        }
    }
}
</script>

<style scoped>
    
</style>

