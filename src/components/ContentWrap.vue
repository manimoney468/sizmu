<template>
  <div class="content-wrap">
    <p>Song Listbro</p>
   
    <div v-for="song in filterSongs" :key="song.title">
      <songo :title="song.title" :songName="song.songName" :songpath="song.songpath"></songo>
    </div>
    <!-- <button @click="$router.push('/contact')">Contact</button> -->
    <button @click="handleFilter('OrderBYAlpha')">manish</button>
    <button @click="handleFilter('OrderBYAlphadesc')">desc</button>
    <button @click="handleFilter('OrderBYSessionplaysAsc')">SessionplayAsc</button>
    <button @click="handleFilter('OrderBYSessionplaysdec')">Sessionplaydec</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      songs: [
        { title: "Aagave Nuvvagave.mp3", songName: "Aagave Nuvvagave", songpath: "public/songs/Aagave Nuvvagave.mp3" },
        { title: "Asha Pasham.mp3", songName: "Asha Pasham", songpath: "public/songs/Asha Pasham.mp3" },
        { title: "Bekhayali.mp3", songName: "Bekhayali", songpath: "public/songs/Bekhayali.mp3" },
        { title: "Ee Raathale.mp3", songName: "Ee Raathale", songpath: "public/songs/Ee Raathale.mp3" },
        { title: "Emai Poyave.mp3", songName: "Emai Poyave", songpath: "public/songs/Emai Poyave.mp3" },
        { title: "Emo Emo.mp3", songName: "Emo Emo", songpath: "public/songs/Emo Emo.mp3" },
        { title: "Guruvaram.mp3", songName: "Guruvaram", songpath: "public/songs/Guruvaram.mp3" },
        { title: "I Wanna Fly.mp3", songName: "I Wanna Fly", songpath: "public/songs/I Wanna Fly.mp3" },
        { title: "Kalaavathi.mp3", songName: "Kalaavathi", songpath: "public/songs/Kalaavathi.mp3" },
        { title: "Leharaayi.mp3", songName: "Leharaayi", songpath: "public/songs/Leharaayi.mp3" },
        { title: "Maate Vinadhuga.mp3", songName: "Maate Vinadhuga", songpath: "public/songs/Maate Vinadhuga.mp3" },
        { title: "Mella Mellagaa.mp3", songName: "Mella Mellagaa", songpath: "public/songs/Mella Mellagaa.mp3" },
        { title: "Nuvvala.mp3", songName: "Nuvvala", songpath: "public/songs/Nuvvala.mp3" },
        { title: "Nuvvunte Naa Jathagaa.mp3", songName: "Nuvvunte Naa Jathagaa", songpath: "public/songs/Nuvvunte Naa Jathagaa.mp3" },
        { title: "Pataas Pilla.mp3", songName: "Pataas Pilla", songpath: "public/songs/Pataas Pilla.mp3" },
        { title: "Pillaa Raa.mp3", songName: "Pillaa Raa", songpath: "public/songs/Pillaa Raa.mp3" },
        { title: "Priyathama.mp3", songName: "Priyathama", songpath: "public/songs/Priyathama.mp3" },
        { title: "Rakaasi Rakaasi.mp3", songName: "Rakaasi Rakaasi", songpath: "public/songs/Rakaasi Rakaasi.mp3" },
        { title: "Samajavaragamana.mp3", songName: "Samajavaragamana", songpath: "public/songs/Samajavaragamana.mp3" },
        { title: "Sirivennela.mp3", songName: "Sirivennela", songpath: "public/songs/Sirivennela.mp3" },
        { title: "Tera Ban Jaunga.mp3", songName: "Tera Ban Jaunga", songpath: "public/songs/Tera Ban Jaunga.mp3" },
        { title: "Tillu Anna DJ Pedithe.mp3", songName: "Tillu Anna DJ Pedithe", songpath: "public/songs/Tillu Anna DJ Pedithe.mp3" },
        { title: "Undiporaadhey.mp3", songName: "Undiporaadhey", songpath: "public/songs/Undiporaadhey.mp3" },
        { title: "Undipova - Telugu.mp3", songName: "Undipova - Telugu", songpath: "public/songs/Undipova - Telugu.mp3" },
        { title: "Yevevo.mp3", songName: "Yevevo", songpath: "public/songs/Yevevo.mp3" },
      ],
      filterSongs: [] 
    };
  },
  created() {
    // Populate filterSongs after the component is created
    this.filterSongs = [...this.songs];
  },
  methods: {
    handleFilter(filter) {
       if(filter === 'OrderBYAlpha'){
         console.log("OrderBYAlpha");
         this.filterSongs.sort((a, b) => a.title.localeCompare(b.title));
         console.log(this.filterSongs); 
         
       }
       if(filter === 'OrderBYAlphadesc'){
         console.log("OrderBYAlphadesc");
         this.filterSongs.sort((a, b) => b.title.localeCompare(a.title));
         console.log(this.filterSongs); 
         
       }
       if(filter === 'OrderBYSessionplaysAsc'){
         console.log("OrderBYSessionplaysAsc");
         let sfa= [];
         for (let i = 0; i < localStorage.length; i++) {
             let key = localStorage.key(i);  // Get the key
            let value = localStorage.getItem(key);
           
            let song = this.songs.find((item) => item.title === key);
            if (song) {
      // Add the song and its play count to sfa
               sfa.push({
                  title: key,
              songName: song.songName,
               songpath: song.songpath,
                   noofplays: value,
      });
    }
        //     console.log("the x",x);
        //       sfa=[...sfa,{title: key, noofplays: value}] // Get the value associated with the key
        //      console.log(`${key}: ${value}`);
        //          }
        // //  this.filterSongs.sort((a, b) => b.title.localeCompare(a.title));
        // //  console.log(this.filterSongs); 
        //  this.filterSongs=sfa;
        //  console.log(sfa);
   
}
sfa.sort((a, b) => a.noofplays - b.noofplays);

// Update filterSongs with the sorted array
    this.filterSongs = sfa;

    console.log("Sorted Filtered Array (sfa):", sfa);
       }

       if(filter === 'OrderBYSessionplaysdec'){
         console.log("OrderBYSessionplaysdec");
         let sfa= [];
         for (let i = 0; i < localStorage.length; i++) {
             let key = localStorage.key(i);  // Get the key
            let value = parseInt(localStorage.getItem(key), 10);
           
            let song = this.songs.find((item) => item.title === key);
            if (song) {
      // Add the song and its play count to sfa
               sfa.push({
                  title: key,
              songName: song.songName,
               songpath: song.songpath,
                   noofplays: value,
      });
    }
        //     console.log("the x",x);
        //       sfa=[...sfa,{title: key, noofplays: value}] // Get the value associated with the key
        //      console.log(`${key}: ${value}`);
        //          }
        // //  this.filterSongs.sort((a, b) => b.title.localeCompare(a.title));
        // //  console.log(this.filterSongs); 
        //  this.filterSongs=sfa;
        //  console.log(sfa);
   
}
sfa.sort((a, b) => b.noofplays - a.noofplays);

// Update filterSongs with the sorted array
    this.filterSongs = sfa;

    console.log("Sorted Filtered Array (sda):", sfa);
       }

    }
  }
};
</script>
