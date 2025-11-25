import logo from "./logo.png";
import logo2 from "./logo2.png";
import logobgwithout from "./logobgwithout.png";
import rider from "./rider.png";
import mxdriver from "./mxdriver.png";
import mxdriverbg from "./mxdriver-bg.png";
import del1 from "./del-1.png";
import del1rem from "./del-1-rem.png";
import del2 from "./del-2.png";
import del3 from "./del-3.jpg";
import del4 from "./del-4.png";
import del5 from "./del-5.png";
import del7 from "./del-7.jpeg";
import del9 from "./del-9.jpg";
import del10 from "./del-10.png";
import del15 from "./del-15.png";
import mxdriverlogo from "./mxdriver-logo.png";




interface ImageMap {
  [key: string]: string;
}

const IMAGES: ImageMap = {
  LOGO: logo,
  LOGO2: logo2,
  RIDER: rider,
  MXDRIVER: mxdriver,
  MXDRIVERBG: mxdriverbg,
  DEL1: del1,
  DEL1REM: del1rem,
  DEL2: del2,
  DEL3: del3,
  DEL4: del4,
  DEL5: del5,
  DEL7: del7,
  DEL9: del9,
  DEL10: del10,
  DEL15: del15,
  MXDRIVERLOGO: mxdriverlogo,  
  LOGOBGWITHOUT: logobgwithout,
};


export default IMAGES;
