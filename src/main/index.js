/**
 * Created by masaakieda on 2017/05/29.
 */
import { app } from "electron";
import createWindow from "./createWindow";
import setApMenu from "./setAppMenu";

app.on("ready", () => {
  setApMenu();
  createWindow();
});

app.on("window-all-closed", () =>{
  if(process.platform !== "darwin") {
    app.quit();
  }
});

app.on("active", (_e, hasVisibleWindows) => {
  if(!hasVisibleWindows) {
    createWindow();
  }

});