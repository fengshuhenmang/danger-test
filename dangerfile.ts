import {message, danger} from "danger"
import * as fs from "fs"
const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)
