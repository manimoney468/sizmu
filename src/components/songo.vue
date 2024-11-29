<template>
  <div>
   
    <p>{{ title }} {{ songName }} {{ songpath }} </p>
    <audio controls @play="updatePlayCount">
      <source ref="audioSource" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script lang="js">

export default {
  props: {
    title: String,
    songName: String,
    songpath: String,
  },
  data() {
    return {
      songupath: "",
      playCount: 0, // Tracks the number of plays
      // repdata:{
      //   title: this.title,
      //   noofplays:0
      // } // Holds the modified song path
    };
    // localStorage.setItem(title, );
  },
  mounted() {
    this.songupath = this.songpath.replace("public", ""); // Example: removing "public/"
    console.log("Modified Song Path (songupath):", this.songupath);

    // Use $nextTick to ensure DOM is updated before accessing the ref
    this.$nextTick(() => {
      if (this.$refs.audioSource) {
        this.$refs.audioSource.src = `${this.songupath}`;
      } else {
        console.error("Audio source reference is not available.");
      }
    });
    const storedCount = localStorage.getItem(this.title);
    this.playCount = storedCount ? parseInt(storedCount, 10) : 0;
    localStorage.setItem(this.title, this.playCount);

  },
  methods: {
    updatePlayCount() {
      // Increment the play count
      this.playCount += 1;

      // Save the updated play count to local storage
      localStorage.setItem(this.title, this.playCount);

      console.log(`Updated play count for ${this.title}: ${this.playCount}`);
    },
  },
  
};
</script>
