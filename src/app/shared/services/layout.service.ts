import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

/* standdard 
public config = {
  settings: {
    layout: "Dubai",
    layout_type: "ltr",
    layout_version: "light-only",
    icon: "stroke-svg",
  },
  color: {
    primary_color: "#7366ff",
    secondary_color: "#f73164",
  },
  */

export class LayoutService {

  public config = {
    settings: {
      layout: "Singapore",
      layout_type: 'ltr',

      layout_version: "light-only",
      icon: "stroke-svg",
   },
   color: {
    layout_version: 'light', 
      primary_color: '#2F9599', //'#2F9599',
      secondary_color: '#F26B38', // '#f73164'
   },

  };

  constructor() {

    if (this.config.settings.layout_type == "rtl") document.getElementsByTagName("html")[0].setAttribute("dir", this.config.settings.layout_type);

    document.documentElement.style.setProperty("--theme-deafult", localStorage.getItem("primary_color"));
    document.documentElement.style.setProperty("--theme-secondary", localStorage.getItem("secondary_color"));
    var primary = localStorage.getItem("primary_color") || this.config.color.secondary_color;
    var secondary = localStorage.getItem("secondary_color") || this.config.color.secondary_color;
    this.config.color.primary_color = primary;
    this.config.color.secondary_color = secondary;
    localStorage.getItem("primary_color") || this.config.color.primary_color;
    localStorage.getItem("secondary_color") || this.config.color.secondary_color;
  }

  setColor(primary_color, secondary_color) {

    this.config.color.primary_color = primary_color;
    this.config.color.secondary_color = secondary_color;
    localStorage.setItem("primary_color", this.config.color.primary_color);
    localStorage.setItem("secondary_color", this.config.color.secondary_color);
    window.location.reload();

  }

  resetColor() {

    console.log('color=>'+this.config.color.primary_color)

    document.documentElement.style.setProperty("--theme-deafult", this.config.color.primary_color);
    document.documentElement.style.setProperty("--theme-secondary",this.config.color.secondary_color);
    (<HTMLInputElement>document.getElementById("ColorPicker1")).value = this.config.color.primary_color;
    (<HTMLInputElement>document.getElementById("ColorPicker2")).value = this.config.color.secondary_color;
    localStorage.setItem("primary_color", this.config.color.primary_color);
    localStorage.setItem("secondary_color", this.config.color.secondary_color);
    window.location.reload();

  }
}
