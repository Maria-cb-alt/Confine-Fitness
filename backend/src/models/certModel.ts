// Libs
import path from "path";
import * as fs from "fs";

import LoggerFactory from "@loggerFactory";


// Classes
/**
 * A model to get the certs
 */
class CertModel {
  private static logger = LoggerFactory.createLogger('SERVER');
  private static keyPath: string = path.join("certs", "key.pem");
  private static certPath: string = path.join("certs", "cert.pem");

  /**
   * A method to get the key from https.
   */
  public static getKey(): Buffer | undefined {
    this.logger.info("Reading the key file...");

    if (!fs.existsSync(this.keyPath)) {
      this.logger.error("The key path is not valid.");
      return;
    }
    return fs.readFileSync(this.keyPath);
  }

  /**
   * A method to get the cert from https.
   */
  public static getCert(): Buffer | undefined {
    this.logger.info("Reading the cert file...");

    if (!fs.existsSync(this.certPath)) {
      this.logger.error("The cert path is not valid.");
      return;
    }
    return fs.readFileSync(this.certPath);
  }
}

// Code
export default CertModel;