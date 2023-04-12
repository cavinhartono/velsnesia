<script>
export default {
  data() {
    return {
      travels: []
    }
  },
  methods: {
    async getData() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ac4c811968mshd0e5a875afda39ap1af96ejsn6f54c5343107',
          'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
      }

      const res = fetch(
        'https://hotels4.p.rapidapi.com/locations/v3/search?q=bali&locale=en_US&langid=1033&siteid=300000001',
        options
      )
      const data = await res.json()
      this.travels = data
    }
  }
}
</script>
