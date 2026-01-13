console.log("Starting the callback example.");

function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        callback(data);
    }, 1500);
}

fetchData((data) => {
    console.log("Data fetched:", data);
});

console.log("This message is displayed immediately after calling fetchData.");

//function call inside another function
function processData(data, callback) {
    console.log("Processing data:", data);
    setTimeout(() => {
        const processedData = { ...data, processed: true };
        callback(processedData);
    }, 1000);
}  

fetchData((data) => {
    processData(data, (processedData) => {
        console.log("Processed Data:", processedData);
    });
});