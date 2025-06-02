//src/utils/address.ts
import base58 from "base-58";
import sha256 from "crypto-js/sha256";
import { Buffer } from "buffer";

export function ValidateAddress(address: string): boolean {
    try {
        const decoded = Buffer.from(base58.decode(address));

        const gndPrefix = Buffer.from([0x47, 0x4E, 0x44]); // "GND"
        const gnPrefix = Buffer.from([0x47, 0x4E, 0x5F]); // "GN_" в ASCII

        let payload: Buffer;
        if (decoded.slice(0, 3).equals(gndPrefix) && decoded.length === 27) {
            payload = decoded.slice(0, 23);
        } else if (decoded.slice(0, 3).equals(gnPrefix) && decoded.length === 27) {
            payload = decoded.slice(0, 22);
        } else {
            return false;
        }

        const checksum = decoded.slice(-4);
        const hash = sha256(sha256(payload).toString()).toString();
        const calculatedChecksum = Buffer.from(hash, 'hex').slice(0, 4);

        return checksum.equals(calculatedChecksum);
    } catch {
        return false;
    }
}
