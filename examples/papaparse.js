function isWorking() {

    let csv = `Name,Location,GithubLink,LinkedInLink,ProfileLink,Description,ImageLink
Prisca Azulphar,"Ottawa, ON",https://github.com/priscaaz,https://www.linkedin.com/in/prisca-azulphar-40052b229/,,"currently , i focus on web developping i am full of passion and persevance towards where i am heading, code youths has helped me to have all the basics that i need and i am always evolving.",https://media-exp1.licdn.com/dms/image/C4D03AQFVLcwyQg7PJQ/profile-displayphoto-shrink_200_200/0/1640371511138?e=1646265600&v=beta&t=IICPFgVCWkqmUnrBFB8EPX-VuZ1acvnHUe-3WSVKjn8
Stephen Ward,"Ottawa, ON",https://github.com/robotic-gamer,https://www.linkedin.com/in/stephen-ward-robotic/,,,https://media-exp1.licdn.com/dms/image/C4D03AQGt5F2s9_ItAQ/profile-displayphoto-shrink_800_800/0/1640371681651?e=1646265600&v=beta&t=XEfOULaB39iKegauPEUSBJo4mYs_yMNQ91SncuMC6so`

    console.log("this is the raw csv")
    console.log(csv)

    console.log("this is papa parse with no added config:")
    let data = Papa.parse(csv);
    console.log(data)

    console.log("this is papa parse with headers true:")
    
    let config =  {
        header: true,
    }
    let dataWithHeaders = Papa.parse(csv, config);
    console.log(dataWithHeaders)

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