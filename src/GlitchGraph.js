const { execSync } = require("child_process");

for (let i = 1; i < 2500; i++) {
    let rnd = Math.ceil(Math.random() * 24);

    for (let j = 1; j < rnd; j++) {
        execSync("git add .");
        execSync(
            `git commit --allow-empty --date="${new Date(
                Date.now() - i * 24 * 60 * 60 * 1000
            ).toISOString()}" -m "commit"`
        );
    }
    execSync("git push origin main"); // Moved outside of the write callback
}
