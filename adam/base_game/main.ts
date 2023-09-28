import { fight, hpDisplay, inputMenu } from "./fight";

let i = 0;
while (i < 100) {
    hpDisplay()
    fight()
    inputMenu()
    i = i + 1;
}
