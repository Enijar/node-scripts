const fs = require('fs');
const path = require('path');
const dir = process.cwd();

fs.readdir(dir, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach(file => {
        // Replace one or more spaces with a single underscore
        // and change all characters to lowercase.
        let newFile = file.split(/\s+/).join('_');
        newFile = newFile.toLowerCase();

        // Rename file to new file name.
        fs.rename(path.join(dir, file), path.join(dir, newFile), (err) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log(`Renamed ${file} to ${newFile}`);
        });
    });
});
