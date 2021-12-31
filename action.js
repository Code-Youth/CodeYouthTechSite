function readProfilesCsv() {

    console.log("this is papa parse from the original file")
    //https://stackoverflow.com/questions/49752889/how-can-i-read-a-local-file-with-papa-parse

    fileConfig = {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            createProfileCards(results)
        }
    }

    Papa.parse('profileSample.csv', fileConfig);

}


function createProfileCards(results){

    console.log(results)
    let numberOfProfiles = results.data.length

    console.log(numberOfProfiles)

    for (let i = 0; i < numberOfProfiles; i++) {
        console.log(results.data[i].Name)
        console.log(results.data[i].Location)
        console.log(results.data[i].GithubLink)
        console.log(results.data[i].LinkedInLink)
        console.log(results.data[i].ProfileLink)
        console.log(results.data[i].Description)

     }
}