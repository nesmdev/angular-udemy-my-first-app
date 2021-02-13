var args = process.argv.slice(2);
const { execSync } = require("child_process");
var options = {
  encoding: 'utf8'
};

for (let arg of args) {
	let cmd = execSync(`ng g c ${arg} --skip-tests true`, options);
	console.log(cmd.error || cmd.success || cmd || "Success!!");
}
