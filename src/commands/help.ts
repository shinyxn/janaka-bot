import { IWebMessageInfoExtended } from '../lib/types.js';
import utils from '../lib/utils.js';

export async function helpCommand(
  senderNumber: string,
  m: IWebMessageInfoExtended,
) {
  const helpCmd = '*Janaka-bot* - Staging version';
  const prefix = '/';
  const commandList = [
    'help',
    'ip',
    'speedtest',
    'forward',
    'hidetag',
    'test',
    'shell',
    'sticker',
    'tiktok',
    'aimode',
    'play',
  ];

  const thumbnail =
    'https://cdn.jsdelivr.net/gh/shinyxn/janaka-bot@master/src/assets/tribot.jpg';
  const sourceurl = 'https://tribone.my.id';
  const usage = `*Usage*\n[prefix](command)\n\n-- _Example_ --:\n\`\`\`${prefix}${commandList[2]}\`\`\`\n`;
  const text = `Hello, ${m.pushName}! 🔖\nWhat can i do for you today?\n\n${helpCmd}\n\n*Commands List*\n\`\`\`${commandList}\`\`\`\n\n${usage}\n\n\`\`\`Developed by tribone23\`\`\`\n`;

  utils.sendLink(text, senderNumber, thumbnail, sourceurl);
}
