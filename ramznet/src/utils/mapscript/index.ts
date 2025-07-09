import { part1 } from './part1';
import { part2 } from './part2';
import { part3 } from './part3';

function decodePart(part: string): string {
  if (typeof window === 'undefined') {
    return Buffer.from(part, 'base64').toString('utf8');
  } else {
    const binary = atob(part);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }
}

const scriptBody = decodePart(part1) + decodePart(part2) + decodePart(part3);

export const mapScript: (
  setLocation?: any,
  loadLocation?: any,
  multiLocation?: any,
  getDistance?: any,
  getAllDistance?: any
) => any = new Function(
  'setLocation',
  'loadLocation',
  'multiLocation',
  'getDistance',
  'getAllDistance',
  scriptBody
) as any;
