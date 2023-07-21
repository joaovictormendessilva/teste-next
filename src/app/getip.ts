const os = require('os');
const networkInfo = os.networkInterfaces();
// console.log(networkInfo) // objeto
// console.log(networkInfo.Ethernet[3].address) // ip

export default function GetIp() {

  return networkInfo.Ethernet[3].address

}