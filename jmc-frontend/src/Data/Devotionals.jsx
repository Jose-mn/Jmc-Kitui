export const devotionals = [
  {
    id: 1,
    title: "Walking in Faith",
    date: "2026-02-08",
    scripture: "Hebrews 11:1",
    excerpt: "Discover what it means to truly trust God in every season of life and let faith guide your steps.",
    content: `Faith isn't just believing in what we can see, but trusting God even when the path ahead is unclear. Today, let us remember that our faith is not based on our circumstances, but on the unchanging character of God.

When we walk by faith, we acknowledge that God's ways are higher than our ways. We trust that He is working all things together for our good, even when we cannot see the full picture.

In every season of life, whether in abundance or in lack, in joy or in sorrow, our faith remains anchored in the One who never changes. God's promises are yes and amen, and His faithfulness endures forever.

Prayer: Lord, strengthen my faith today. Help me to trust You completely, even when I cannot see the way forward. Let my life be a testimony of unwavering faith in Your goodness. Amen.`,
    author: "Bishop Elijah Mutua",
    category: "Faith"
  },
  {
    id: 2,
    title: "The Power of Prayer",
    date: "2026-02-05",
    scripture: "James 5:16",
    excerpt: "Unlock the transformative power of consistent prayer and communion with God in your daily walk.",
    content: `Prayer is not just a religious duty, but a powerful conversation with our Heavenly Father. When we pray, we align ourselves with God's will and invite His power into our situations.

Today, let us approach God's throne with confidence, knowing that He hears every word we speak. Our prayers have the power to change circumstances, heal relationships, and transform lives.

The effectual fervent prayer of a righteous person accomplishes much. It moves the hand of God and releases His supernatural intervention into our natural circumstances. Don't underestimate the power of your prayers.

Prayer: Father, teach me to pray with faith and expectation. Let my prayers be aligned with Your will, and may I see Your hand move mightily in response to my petitions. Amen.`,
    author: "Pastor Bernard Nderitu",
    category: "Prayer"
  },
  {
    id: 3,
    title: "Living in Purpose",
    date: "2026-02-01",
    scripture: "Jeremiah 29:11",
    excerpt: "God has a unique calling for your life. Learn how to discover and walk in your divine purpose.",
    content: `Before you were formed in your mother's womb, God knew you. He has ordained a specific purpose and calling for your life that no one else can fulfill.

Your purpose is not found in what the world values or what society expects. It's discovered in intimate relationship with God, in the quiet moments where He reveals His plans for you.

Don't waste your life chasing after things that don't align with God's purpose for you. Seek first His kingdom and His righteousness, and watch as He orders your steps and opens doors that no man can shut.

Prayer: Lord, reveal Your purpose for my life. Help me to walk in the calling You have placed upon me, and give me the courage to pursue it wholeheartedly. May my life bring glory to Your name. Amen.`,
    author: "Pastor Josphat Musee",
    category: "Purpose"
  }
];

export const getLatestDevotionals = (count = 3) => {
  return devotionals
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

export const getDevotionalById = (id) => {
  return devotionals.find(d => d.id === parseInt(id));
};