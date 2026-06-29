import papa from "papaparse"

function CSV2CSS(themeCSV){
    array = papa.parse("https://nv7haven.nv7haven.com/get_file/5455",{
        download: true,
        header: true
    })
    console.log(array.errors)
    console.log(array.data)
}
//async function loadCSV(url) {
//    try {
//        const response = await fetch(url)
//        if (!response.ok){
//            throw new Error(`Could not load from url: ${response.status}`)
//        }
//    }
//}
CSV2CSS()