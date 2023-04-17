// I am sure, here is not best place for this code, but I don't know where to put it
import { boot } from "quasar/wrappers";

class BLE {
  constructor() {
    this.PRIMARY_SERVICE = "0de1fa51-7504-44e5-95f4-9e791515f55a";
    this.CHARACTERISTIC_STATUS = "de1fa512-7504-44e5-95f4-9e791515f55a";
    this.device = null;
    this.server = null;
    this.service = null;
    this.characteristic = null;
  }

  // API
  async connect() {
    console.log("Connecting...", this);
    this.device = await navigator.bluetooth.requestDevice({
      //filters: [{ services: [this.PRIMARY_SERVICE] }],
      filters: [{ namePrefix: "pc_" }],
    });
    this.server = await this.device.gatt.connect();
    this.service = await this.server.getPrimaryService(this.PRIMARY_SERVICE);
    this.characteristic = await this.service.getCharacteristic(
      this.CHARACTERISTIC_STATUS
    );
  }

  async disconnect() {
    if (this.device) {
      await this.device.gatt.disconnect();
    }
  }

  async write(value) {
    await this.characteristic.writeValue(value);
  }
}

console.log("BLE boot script loaded");

export default boot(({ app }) => {
  console.log("BLE boot script started");
  app.config.globalProperties.$ble = new BLE();
});
