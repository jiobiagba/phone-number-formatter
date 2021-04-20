const fs = require("fs");

// Supply the path to the file with untrimmed phone numbers and the name of the file to save it in
// as the third and fourth parameters of the argv array respectively

// Check for sufficient input paraneters
if (process.argv.length !== 4) {
    console.error("Too few or too many input parameters!");
    process.exit(1);
}

// Allow only txt files as input and output
if (
    process.argv[2].split(".").pop() !== "txt" ||
    process.argv[3].split(".").pop() !== "txt"
) {
    console.error("Only .txt files are allowed for input and output");
    process.exit(1);
}

fs.readFile(process.argv[2], "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // First remove all leading, trailing and in-between whitespaces
    // Then put \n after every comma
    const trimmedData = data
        .trim()
        .replace(/[\n\r\s]+/g, "")
        .replace(/[,]{1}/g, "," + "\n");

    // Write this to a file
    fs.writeFile(process.argv[3], trimmedData, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Writing trimmed Data to File Successful!");
    });
});
