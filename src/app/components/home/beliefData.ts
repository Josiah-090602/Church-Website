export type BeliefsProps = {
  title: string;
  text: string;
  verse: string;
  image: string;
};

const beliefs: BeliefsProps[] = [
  {
    title: 'JESUS IS SAVIOR',
    text: 'Matthew 1:21',
    verse:
      'She will bear a Son; and you shall call His name Jesus, for He will save His people from their sins.”',
    image: '/savior.png',
  },
  {
    title: 'JESUS IS BAPTIZER',
    text: 'John 1:33',
    verse: `I myself did not know him, but he who sent me to baptize with water said to me, He on whom you see the Spirit descend and remain, this is he who baptizes with the Holy Spirit.`,
    image: '/baptizer.png',
  },
  {
    title: 'JESUS IS HEALER',
    text: 'Matthew 9:35',
    verse:
      '“Jesus went through all the towns and villages, teaching in their synagogues, proclaiming the good news of the kingdom and healing every disease and sickness.”',
    image: '/healer.png',
  },
  {
    title: 'JESUS IS COMING KING',
    text: 'Acts 1:11',
    verse:
      '“…why do you stand here looking into the sky? This same Jesus, who has been taken from you into heaven, will come back in the same way you have seen him go into heaven.”',
    image: '/king.png',
  },
];

export default beliefs;
