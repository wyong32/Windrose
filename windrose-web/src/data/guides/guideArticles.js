/**
 * Optional `head`: JSON string of extra schema.org nodes (e.g. VideoObject); merged with Article JSON-LD on guide routes.
 *
 * @typedef {{
 *   id: number
 *   title: string
 *   iframeUrl?: string
 *   description: string
 *   tags: string[]
 *   publishDate: string
 *   imageUrl: string
 *   imageAlt: string
 *   seo: { title: string, description: string, keywords?: string }
 *   addressBar: string
 *   detailsHtml: string
 *   head?: string
 *   isHome?: boolean
 * }} GuideArticle
 */

/** @type {GuideArticle[]} */
export default [
  {
    id: 1,
    title: 'How to Play Windrose Online with Friends — Co-op, Invite Codes & Joining',
    description:
      'Windrose supports solo or with friends on the official site—here is the player workflow: who hosts, sharing invite codes, Connect to Server, passwords, version checks, firewalls/UPnP, and when a dedicated server helps.',
    tags: ['Multiplayer', 'Co-op', 'Online', 'Early Access'],
    publishDate: '2026-04-25',
    imageUrl: '/images/bg.webp',
    imageAlt: 'Nautical night atmosphere behind Windrose Compass guides',
    seo: {
      title: 'Windrose Co-op Online — Friends, Invite Codes & Dedicated Servers',
      description:
        'Play Windrose online with friends: official solo-or-co-op pitch, invite codes, Play → Connect to Server, passwords, same-patch checks, UPnP and firewall tips, and when to use a dedicated server—all in plain language for crews.',
      keywords:
        'Windrose multiplayer, play Windrose online, Windrose co-op, Windrose with friends, invite code Windrose, connect to server Windrose, Windrose online guide, Early Access multiplayer, PvE co-op Windrose',
    },
    addressBar: 'play-windrose-online',
    isHome: false,
    detailsHtml: `
<p>
  Windrose is built as a <strong>survival adventure you can play solo or with friends</strong>—that is how the
  developers describe it on the
  <a href="https://playwindrose.com/" rel="noopener noreferrer" target="_blank">official Windrose site</a>
  (“Adventure alone or with friends”). This guide is for <em>players</em> who just want the crew online in the same
  world: what to expect, how joining works, and what to check when someone cannot get in. It is a fan summary; the game
  client and official pages stay the source of truth after patches.
</p>

<h2>What “playing online together” means in Windrose</h2>
<p>
  You share one persistent archipelago: quests, camps, ships, and world progress belong to that session’s world, not
  to each player’s separate offline copy. Everyone needs a normal copy of the game and a stable internet path to the
  matchmaking / connection services Windrose uses. Co-op is <strong>PvE-focused</strong>—you are sailing and fighting
  together against the world, not setting up player-versus-player arenas. When you are planning who brings which food or
  repair mats, the <a href="/wiki/resources">resources wiki</a> is a handy out-of-game checklist alongside voice chat.
</p>

<h2>The usual evening flow (no IT degree required)</h2>
<ol>
  <li>
    <strong>Pick a host world.</strong> One person is the “captain of the save”—their machine runs the world everyone
    joins, <em>unless</em> your group has already moved that world onto a dedicated server (see optional section below).
  </li>
  <li>
    <strong>Everyone launches Windrose</strong> on the same rough game version (same major patch / build). After a
    Steam or launcher update, wait until the whole crew has finished downloading before you try to connect.
  </li>
  <li>
    <strong>Host shares an invite code.</strong> Official documentation describes an <strong>invite code</strong> your
    friends paste in the client—short, shareable, and easier than trading raw IP addresses.
  </li>
  <li>
    <strong>Friends join from the main menu.</strong> Use <em>Play → Connect to Server</em> (wording may match your
    language), paste the invite code exactly, and add the password too if your host turned password protection on.
  </li>
  <li>
    <strong>Play like any other co-op session.</strong> Voice chat, map callouts, and our
    <a href="/map">interactive map</a> are optional—the game does not require this site. If you are comparing hull
    ideas or weapon tags between voyages, the <a href="/wiki">wiki hub</a> keeps the tables in one place so you do not
    have to tab out blind.
  </li>
</ol>
<p>
  Invite codes are <strong>case-sensitive</strong> and use letters and digits. Treat them like a private Discord
  invite—only share with people you trust. Official support will not ask you for passwords in DMs; ignore anyone who
  does.
</p>

<h2>If someone cannot connect</h2>
<p>Work through this list before you assume the save is broken:</p>
<ul>
  <li><strong>Same version everywhere.</strong> Mismatched client and world version is the most common “we see the code but nothing happens” culprit after a patch.</li>
  <li>
    <strong>Double-check the code and optional password.</strong> A single wrong character blocks the join; passwords
    are easy to mis-type in voice.
  </li>
  <li>
    <strong>Router and PC firewalls.</strong> Official dedicated-server documentation stresses <strong>UPnP</strong> on
    your router and allowing the game (and server executable, if you use one) through Windows Firewall / overzealous AV.
    Temporarily disable VPNs or proxies while testing a stubborn connection.
  </li>
  <li>
    <strong>Who is actually online?</strong> If the host closes the game or puts the PC to sleep, the world stops for
    everyone unless you have migrated to a 24/7 dedicated setup.
  </li>
</ul>

<h2>Optional: a world that stays up when the host is offline</h2>
<p>
  When your crew is in different time zones, it helps to run the world on a <strong>dedicated server</strong>—a
  separate install that keeps the archipelago running so people can drop in without the captain’s gaming PC being on.
  That path is more technical (install folder, JSON settings, updates). If you need it, follow the developers’
  <a href="https://playwindrose.com/dedicated-server-guide/" rel="noopener noreferrer" target="_blank">Dedicated Server Guide</a>
  step by step; this Windrose Compass article is intentionally about the normal “friends + invite code” loop first.
</p>

<h2>How many friends?</h2>
<p>
  Official server documentation discusses <strong>player caps</strong> you can configure and notes that very large
  groups stress performance more than tiny crews. For a smooth first co-op campaign, start with a small group, learn
  sailing and boarding together, then scale up if everyone’s machines and connections stay stable.
</p>

<h2>Where to get help</h2>
<p>
  For rules that change patch-to-patch, use the
  <a href="https://discord.gg/windrose" rel="noopener noreferrer" target="_blank">official Windrose Discord</a>
  and the game’s support channels. If you are experimenting with client-side tweaks, read author notes carefully on the
  <a href="/mods">mods list</a> here—never install anything you do not trust, especially on a shared world machine.
</p>

<h2>Fan disclaimer</h2>
<p>
  Windrose Compass is not affiliated with Windrose’s developers or publishers. Feature names and menu paths can shift in
  Early Access—if a label here no longer matches your build, trust what you see in game.
</p>
    `.trim(),
  },

  {
    id: 2,
    head: `{
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "How to Get and Use Quagmire Powder in Windrose",
    "description": "Hardcore SEO guide on how to get quagmire powder in windrose. Learn the fastest looting routes in the Cursed Swamps, chest drop rates, and how to use quagmire powder in windrose to smelt Mire Metal Ingots for late-game gear progression.",
    "thumbnailUrl": [
      "https://example.com/windrose-quagmire-powder-thumbnail.jpg"
    ],
    "uploadDate": "2024-05-20T08:00:00+08:00",
    "duration": "PT2M5S",
    "contentUrl": "https://www.youtube.com/watch?v=Fy8-mESI4L8",
    "embedUrl": "https://www.youtube.com/embed/Fy8-mESI4L8",
    "hasPart": [
      {
        "@type": "Clip",
        "name": "Unlock the Cursed Swamps Biome",
        "startOffset": 15,
        "endOffset": 33,
        "url": "https://example.com/windrose-quagmire-powder#video&t=15s"
      },
      {
        "@type": "Clip",
        "name": "Farm Plague Enemies and Swamp Chests",
        "startOffset": 33,
        "endOffset": 59,
        "url": "https://example.com/windrose-quagmire-powder#video&t=33s"
      },
      {
        "@type": "Clip",
        "name": "Smelt Mire Metal Ingots",
        "startOffset": 59,
        "endOffset": 125,
        "url": "https://example.com/windrose-quagmire-powder#video&t=59s"
      }
    ]
  }`,
    title: "Windrose Quagmire Powder Guide: How to Get & Use",
    description: "Discover exactly how to get quagmire powder in windrose and the best farming routes. Learn how to use quagmire powder in windrose to craft Mire Metal Ingots.",
    tags: ["windrose", "quagmire powder", "farming guide", "late-game resources", "mire metal ingot"],
    publishDate: "2026-04-25",
    imageUrl: "/images/guides/guide02.webp",
    imageAlt: "Player opening an Ancient Chest in a Swamp Crypt Tablet House in Windrose, obtaining Quagmire Powder.",
    isHome: false,
    seo: {
      title: 'Windrose Quagmire Powder — Swamp Farm, Mire Metal & Late Game',
      description: "Master Windrose's late-game with this Quagmire Powder guide. Learn efficient farming methods in Cursed Swamps and how to craft Mire Metal Ingots to unlock enchantments and advanced gear.",
      keywords: "windrose quagmire powder, windrose farming guide, get quagmire powder, use quagmire powder, mire metal ingot, cursed swamps, windrose late game, israel hands, ancient scraps"
    },
    addressBar: "windrose-quagmire-powder-guide-how-to-get-use",
    detailsHtml: `<h1>Windrose Quagmire Powder Guide
  </h1>
  <p>If you want to push your gear to the late-game level in Windrose, Quagmire Powder is the core resource you cannot bypass. Stop wasting time in low-tier zones. You need to push the main quest, defeat Israel Hands in the Foothills, and unlock the third biome: the Cursed Swamps. The most efficient farming method isn't bonking high-level Plague mobs one by one; it's straight-up looting Ancient Chests in Swamp Crypt Tablet Houses, which can pop up to 11 powders at once. Once you secure the powder, immediately head to a Large Smelting Furnace, combine it with Ancient Scraps, and smelt Mire Metal Ingots. This is your only bottleneck to unlocking the Enchanting Table and high-tier armor.
  </p>
  <iframe src="https://www.youtube.com/embed/Fy8-mESI4L8" class="ql-video" width="800" height="450" allowfullscreen="true" frameborder="0">
  </iframe>
  <p><br>
  
  </p>
  <p>Don't want to watch the full video? Jump straight to the key moments:
  </p>
  <ol>
  <li><a href="https://www.youtube.com/watch?v=Fy8-mESI4L8&amp;t=15s">00:15</a> - 🗺️ Prerequisites to defeat Israel Hands and unlock the Cursed Swamps area.
  </li>
  <li><a href="https://www.youtube.com/watch?v=Fy8-mESI4L8&amp;t=33s">00:33</a> - ⚔️ Real-test: Swamp crypt chest looting vs. Plague mob drop rates.
  </li>
  <li><a href="https://www.youtube.com/watch?v=Fy8-mESI4L8&amp;t=59s">00:59</a> - ⚒️ Core recipe: Smelting Mire Metal Ingots in the Large Smelting Furnace.
  </li>
  </ol>
  <h2>Get Quagmire Powder in Windrose: The Efficient Farm
  </h2>
  <p>A lot of rookies get hard-stuck on this resource because they are simply grinding in the wrong map. Quagmire Powder exclusively drops in the game's third biome: the Cursed Swamps.
  </p>
  <p><img src="/images/guides/guide02-01.webp" alt="the Cursed Swamps map entrance and surrounding environment" width="50%">
  </p>
  <p>The Unlock Requirement: You must first eliminate the local threat boss "Israel Hands" in the Foothills region. After taking him down, follow the system-assigned "The Forgotten Relics" quest to officially set foot in this mudland.
  </p>
  <p>Once inside the swamp, how do you actually get it? There are two playstyles, but I only recommend the first:
  </p>
  <p>Top Pick: The "Ultimate Looter" Route (Looting Focus)
  </p>
  <p> Don't sweat it out fighting those high-level swamp mobs. Beeline straight for Points of Interest (POIs) around the map, like Ruined Swamp Settlements, Priestess Huts, or Tablet Houses. Focus heavily on the Ancient Chests inside the Swamp Crypt Tablet Houses. These chests are the absolute jackpot right now. Opening just one guarantees a massive drop of up to 11 units of Quagmire Powder. This is dozens of times more efficient than grinding mobs manually.
  </p>
  <p>Backup Plan: Hardcore Clearing (Hunting Focus)
  </p>
  <p> If you're a combat junkie, or your chest routes are on cooldown, go hunt the Plague-series enemies. But pay attention: not all mobs have the same drop rates. Pick your targets wisely:
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-so77jl">Loot Source / Enemy Tier
  </td>
  <td data-row="row-so77jl">Quagmire Powder Drop Rate
  </td>
  <td data-row="row-so77jl">Yield Per Drop
  </td>
  </tr>
  <tr>
  <td data-row="row-qdpdgi">Swamp Crypt Ancient Chests
  </td>
  <td data-row="row-qdpdgi">100% Guaranteed
  </td>
  <td data-row="row-qdpdgi">Up to 11x
  </td>
  </tr>
  <tr>
  <td data-row="row-clybv8">Plague Hunters
  </td>
  <td data-row="row-clybv8">100% Guaranteed
  </td>
  <td data-row="row-clybv8">1x
  </td>
  </tr>
  <tr>
  <td data-row="row-ghmeso">Plague Thralls
  </td>
  <td data-row="row-ghmeso">100% Guaranteed
  </td>
  <td data-row="row-ghmeso">1x
  </td>
  </tr>
  <tr>
  <td data-row="row-euc76z">Plague Warriors
  </td>
  <td data-row="row-euc76z">75% Chance
  </td>
  <td data-row="row-euc76z">1x
  </td>
  </tr>
  <tr>
  <td data-row="row-uxn2ve">Plague Witches
  </td>
  <td data-row="row-uxn2ve">75% Chance
  </td>
  <td data-row="row-uxn2ve">1x
  </td>
  </tr>
  </tbody>
  </table>
  <p><img src="/images/guides/guide02-02.webp" alt="Ancient Chest in the swamp ruins to obtain powder" width="50%">
  </p>
  <h2>Use Quagmire Powder in Windrose: Advancing to Late-Game
  </h2>
  <p>Once you have the powder, don't just let it sit in your inventory. Quagmire Powder itself burns with an incredibly bright flame, and its sole core purpose in the game is acting as a catalyst for advanced smelting.
  </p>
  <p>[Insert image here: In-game screenshot of the Large Smelting Furnace crafting interface]
  </p>
  <p>You need to bring it back to your base and toss it into the Large Smelting Furnace.
  </p>
  <p> Core Recipe: 1x Quagmire Powder + 2x Ancient Scraps = 1x Mire Metal Ingot
  </p>
  <p>Why is the Mire Metal Ingot your lifeline?
  </p>
  <p> Without it, your tech tree is completely hard-locked. Only with Mire Metal Ingots can you unlock and build the following crucial mid-to-late game facilities:
  </p>
  <ol>
  <li>Enchanting Table: Mandatory for applying buffs to your weapons.
  </li>
  <li>Armor Upgrades: The qualitative leap required for mid-game defense.
  </li>
  <li>Jeweler's Workbench
  </li>
  <li>Distiller
  </li>
  <li>Ingot Arborum: Essential base material for the very late game.
  </li>
  </ol>
  <h3>FAQ: Hardcore Quagmire Powder Q&amp;A
  </h3>
  <p>Q: Can I farm Quagmire Powder at the spawn point or early-game islands?
  </p>
  <p> A: Absolutely not. This resource is strictly locked to the third biome (Cursed Swamps). You must first take down Israel Hands in the Foothills to even get the questline to enter that area.
  </p>
  <p>Q: Why didn't I get any powder drop after killing several swamp mobs?
  </p>
  <p> A: You probably picked the wrong targets. Only Plague Hunters and Plague Thralls have a 100% guaranteed drop. If you are fighting Plague Warriors or Plague Witches, they only have a 75% drop rate; you will inevitably get empty drops if RNG is against you. Looting crypt chests is the ultimate way to go.
  </p>
  <p>Q: I don't have enough Ancient Scraps. Can I craft anything using just the powder?
  </p>
  <p> A: Not under the current game mechanics. Quagmire Powder must be paired with Ancient Scraps to create a chemical reaction in the Large Smelting Furnace, producing the actually useful Mire Metal Ingot. These two items are bound together as upstream and downstream materials.
  </p>`.trim(),
  },

  {
    id: 3,
    head: `{
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Windrose Travelers Camp 1/2 Chest Location Guide",
    "description": "Stuck at 1/2 chests in Windrose's Traveler's Camp? This hardcore SEO guide shows you exactly how to find the hidden second chest in the Coastal Jungle. Learn to spot the red cloth tree, craft a shovel, and use the digging mechanic to unearth hidden loot.",
    "thumbnailUrl": [
      "https://example.com/windrose-travelers-camp-thumbnail.jpg"
    ],
    "uploadDate": "2024-05-20T10:00:00+08:00",
    "duration": "PT2M10S",
    "contentUrl": "https://www.youtube.com/watch?v=sx-PC9mzRwk",
    "embedUrl": "https://www.youtube.com/embed/sx-PC9mzRwk",
    "hasPart": [
      {
        "@type": "Clip",
        "name": "Looting the first tent chest",
        "startOffset": 10,
        "endOffset": 39,
        "url": "https://example.com/windrose-travelers-camp#video&t=10s"
      },
      {
        "@type": "Clip",
        "name": "Finding the red cloth tree",
        "startOffset": 39,
        "endOffset": 72,
        "url": "https://example.com/windrose-travelers-camp#video&t=39s"
      },
      {
        "@type": "Clip",
        "name": "Digging up the second chest",
        "startOffset": 72,
        "endOffset": 130,
        "url": "https://example.com/windrose-travelers-camp#video&t=72s"
      }
    ]
  }`,
    title: "Windrose Travelers Camp Guide: Find the Hidden Second Chest",
    description: "Stuck at 1/2 unique chests in Windrose? Learn how to locate the hidden second chest at the Traveler's Camp in the Coastal Jungle using the shovel digging mechanic.",
    tags: ["Windrose", "Travelers Camp", "Hidden Chest", "Exploration Guide", "Survival Game"],
    publishDate: "2026-04-25",
    imageUrl: "/images/guides/guide03.webp",
    imageAlt: "A map screenshot showing the Windrose Traveler's Camp icon with 1/2 unique chests looted progress, indicating a hidden second chest.",
    isHome: false,
    seo: {
      title: "Windrose Traveler's Camp — Hidden Chest, Shovel Digs & Exploration XP",
      description: "Master Windrose's Traveler's Camp by uncovering the hidden second chest. This in-depth guide reveals how to use a Shovel to find the secret loot and gain +50 exploration XP, bypassing misleading old strategies.",
      keywords: "windrose, travelers camp, hidden chest, second chest, shovel, exploration guide, survival game, unique chests, twist of fancy, red cloth tree, sparkling particles"
    },
    addressBar: "windrose-travelers-camp-hidden-second-chest-guide",
    detailsHtml: `<h1>Windrose Travelers Camp Guide
  </h1>
  <p>If you are clearing your starting island and getting hard-stuck at the "Unique chests looted: 1/2" tracker for the Traveler's Camp, stop running aimlessly around the bushes. The first Decrepit Chest is a freebie inside the tent, but the second one is buried underground. A lot of outdated forums claim you must carefully read the "Twist of Fancy" note to trigger the spawn—that's false. Mechanically, all you need to do is equip a Shovel, look for a dead tree marked with a red cloth (usually guarded by a boar nearby), and spam the dig action around its base until you see white sparkling particles in the dirt to unearth the final chest and claim your +50 exploration XP.
  </p>
  <iframe src="https://www.youtube.com/embed/sx-PC9mzRwk" class="ql-video" width="800" height="450" allowfullscreen="true" frameborder="0">
  </iframe>
  <p>Skip the fluff? Jump straight to the key moments:</p>
  <ol>
  <li><a href="https://www.youtube.com/watch?v=sx-PC9mzRwk&amp;t=10s">00:10</a> - ⛺ Looting the obvious first chest and obtaining the lore note.
  </li>
  <li><a href="https://www.youtube.com/watch?v=sx-PC9mzRwk&amp;t=39s">00:39</a> - 🌳 Visual anchor: Spotting the tree with the red cloth and the boar spawn.
  </li>
  <li><a href="https://www.youtube.com/watch?v=sx-PC9mzRwk&amp;t=72s">01:12</a> - ⛏️ How the digging mechanic actually works (look for the sparkles).
  </li>
  </ol>
  <h2>Coastal Jungle Spawn &amp; Prep
  </h2>
  <p>Don't bother searching Reddit for exact X/Y map coordinates. Windrose utilizes a procedurally generated map, meaning everyone's Traveler's Camp is located in a different spot. However, it will always spawn within your starting biome, the Coastal Jungle.
  </p>
  <p><img src="/images/guides/guide03-01.webp" alt="Windrose  the Traveler's Camp map icon stuck at 02 progression" width="50%">
  </p>
  <p>Hard Requirement: Do not go to this POI empty-handed. Extracting the second chest strictly requires you to equip a Shovel. If you are fresh off the boat and don't have one, you need to farm Clay near water sources, build a basic Smelter, and set up your workbench first. Slashing the ground with your cutlass will do absolutely nothing.
  </p>
  <h2>Solving the 1/2 Progression
  </h2>
  <p>Upon arriving at the camp, you'll immediately spot a dilapidated tent. Inside sits the first Decrepit Chest. Looting it provides basic supplies and usually a lore note titled "Twist of Fancy" (which goes straight into the Curios tab in your inventory).
  </p>
  <p>Once looted, your UI tracker maliciously updates to 1/2. 
  </p>
  <p> The intended roleplay path is to read the note to decipher the pirate's hidden stash location. But as a min-maxer, here is the objective truth: you can completely ignore reading the note. The chest is already spawned in the world; you just need to know the visual cue.
  </p>
  <p><img src="/images/guides/guide03-02.webp" alt="Windrose  opening the Curios tab to view the Twist of Fancy note" width="50%">
  </p>
  <h2>Locating the Hidden Second Chest
  </h2>
  <p>Walk out of the tent and scan the perimeter within a 50-meter radius. You are looking for a very specific environmental landmark: a large, dead tree with a distinct piece of Red Cloth wrapped around its trunk.
  </p>
  <p>This spot is usually guarded by a Boar patrolling the base of the tree. Dispatch the boar quickly so you can work in peace.
  </p>
  <p>The Digging Mechanic Explained:
  </p>
  <ol>
  <li>Equip your Shovel.
  </li>
  <li>Aim at the ground near the tree roots and use your secondary action to enter "Dig" mode.
  </li>
  <li>Start digging a hole.
  </li>
  <li>Here is the trick: Don't keep digging in the exact same spot if nothing happens. Move slightly and dig multiple holes in a radius around the tree. You are looking for glowing white sparkling particles to appear inside the freshly dug dirt.
  </li>
  <li>Once you spot the sparkles, dig exactly on that spot one more time. The second "Decrepit Chest" will literally pop out of the ground.
  </li>
  </ol>
  <p><img src="/images/guides/guide03-03.webp" alt="Windrose  the glowing  particles in the dirt right before the chest is unearthed" width="50%">
  </p>
  <p>Confirmed Loot Drops:
  </p>
  <p> While RNG plays a factor, cross-referencing multiple gameplay sessions reveals distinct loot pools for these two chests:
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-pauz6o">Chest Sequence
  </td>
  <td data-row="row-pauz6o">Typical Loot Pool
  </td>
  <td data-row="row-pauz6o">Confirmed High-Value Drops
  </td>
  </tr>
  <tr>
  <td data-row="row-kca2cl">Chest #1 (Inside Tent)
  </td>
  <td data-row="row-kca2cl">Quest Items, Low-tier Mats
  </td>
  <td data-row="row-kca2cl">"Twist of Fancy" (Lore Note)
  </td>
  </tr>
  <tr>
  <td data-row="row-8qub4w">Chest #2 (Buried underground)
  </td>
  <td data-row="row-8qub4w">Alchemy items, Consumables
  </td>
  <td data-row="row-8qub4w">10x Homemade Gunpowder, Great Healing Potion
  </td>
  </tr>
  </tbody>
  </table>
  <p>Looting this final chest will trigger the +50 Exploration XP reward, finally marking the Traveler's Camp as complete.
  </p>
  <h3>FAQ: Traveler's Camp Troubleshooting
  </h3>
  <p>Q: I searched for 10 minutes and cannot find the tree with the red cloth. Is my map bugged?
  </p>
  <p> A: It's extremely unlikely to be bugged; it's usually an elevation issue. Due to the procedural generation of the Coastal Jungle, the tree might spawn on a raised plateau slightly behind the tent or be obscured by dense foliage. Clear out the nearby enemies and widen your search radius slightly.
  </p>
  <p>Q: I dug up the entire area around the tree but didn't see any sparkles. What am I doing wrong?
  </p>
  <p> A: The hit detection radius for the buried chest is slightly larger than the immediate roots. Don't hug the trunk. Expand your digging circle to about 2 to 3 meters away from the tree base. If you found the red cloth, the chest is 100% there.
  </p>
  <p>Q: Is the loot from the second chest always the same?
  </p>
  <p> A: Not strictly fixed, but it heavily leans towards valuable mid-tier consumables. In documented gameplay (including German client tests), players consistently pulled stacks of Homemade Gunpowder (up to 10x) and high-tier healing potions, making this an excellent early-game boost for your combat reserves.
  </p>`.trim(),
  },

  {
    id: 4,
    head: `{
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "How to Get and Craft Hewn Stone in Windrose",
    "description": "Hardcore SEO guide explaining exactly how to get hewn stone in Windrose. Learn the Cursed Swamps location to mine Ancient Scraps, the Iron Pickaxe requirement, and how to upgrade your Workbench to Level 3 using a Sawhorse and Toolbox.",
    "thumbnailUrl": [
      "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777110044/cms-uploads/cms-1777110044431-338918537.png"
    ],
    "uploadDate": "2026-04-25T12:00:00+08:00",
    "duration": "PT1M17S",
    "contentUrl": "https://www.youtube.com/watch?v=COk3Bf44GtA",
    "embedUrl": "https://www.youtube.com/embed/COk3Bf44GtA",
    "hasPart": [
      {
        "@type": "Clip",
        "name": "Map Location: Ancient Debris Site in Cursed Swamps",
        "startOffset": 8,
        "endOffset": 29,
        "url": "https://windrosegame.net/guides/windrose-hewn-stone-guide-unlock-crafting-explained#video&t=8s"
      },
      {
        "@type": "Clip",
        "name": "Mining Ancient Scraps with Iron Pickaxe to Unlock Schematic",
        "startOffset": 29,
        "endOffset": 50,
        "url": "https://windrosegame.net/guides/windrose-hewn-stone-guide-unlock-crafting-explained#video&t=29s"
      },
      {
        "@type": "Clip",
        "name": "Upgrading Workbench to Level 3 (Sawhorse + Toolbox)",
        "startOffset": 50,
        "endOffset": 77,
        "url": "https://windrosegame.net/guides/windrose-hewn-stone-guide-unlock-crafting-explained#video&t=50s"
      }
    ]
  }`,
    title: "Windrose Hewn Stone Guide: Unlock & Crafting Explained",
    description: "Stop banging rocks at level 1. Discover how to get hewn stone in Windrose by finding Ancient Scraps in the Cursed Swamps and upgrading your Workbench to Level 3.",
    tags: ["Windrose", "Hewn Stone", "Crafting Guide", "Unlock Schematic", "Base Building"],
    isHome: false,
    publishDate: "2026-04-25",
    imageUrl: "/images/guides/guide04.webp",
    imageAlt: "Windrose Hewn Stone crafting guide, showing unlock steps and workbench upgrades",
    seo: {
      title: "Windrose Hewn Stone Guide: Unlock Crafting & Base Upgrades Explained",
      description: "Master Hewn Stone crafting in Windrose. Discover how to unlock the schematic by finding Ancient Scraps in Cursed Swamps and upgrade your workbench to Level 3 for efficient production.",
      keywords: "Windrose Hewn Stone, crafting guide, unlock schematic, Ancient Scraps, Cursed Swamps, Iron Pickaxe, workbench upgrade, Level 3, base building, survival game"
    },
    addressBar: "windrose-hewn-stone-guide-unlock-crafting-explained",
    detailsHtml: `<h1>Windrose Hewn Stone Guide
  </h1>
  <p>Stop hitting normal rocks at your starter base wondering why the Hewn Stone recipe won't appear. This schematic is NOT unlocked by simply leveling up your character. A lot of generic wikis will tell you to "just craft it with 3 stones," which is completely misleading for new players. The objective reality of the game's tech tree is this: You must push into the 3rd biome (Cursed Swamps), use an Iron Pickaxe to mine infected "Ancient Debris" to obtain "Ancient Scraps." Only looting this specific scrap will trigger the schematic unlock. After that, you still can't craft it until you return to base and force your Workbench to Level 3 by placing a Sawhorse and a Toolbox right next to it.
  </p>
  <iframe src="https://www.youtube.com/embed/COk3Bf44GtA" class="ql-video" width="800" height="450" allowfullscreen="true" frameborder="0">
  </iframe>
  <p><br>
  
  </p>
  <p>Skip the fluff? Jump straight to the key moments:
  </p>
  <ol>
  <li><a href="https://www.youtube.com/watch?v=COk3Bf44GtA&amp;t=8s">00:08</a> - 🗺️ Map positioning: Finding the "Ancient Debris Site" in the Cursed Swamps.
  </li>
  <li><a href="https://www.youtube.com/watch?v=COk3Bf44GtA&amp;t=29s">00:29</a> - ⛏️ Tool requirement: Mining Ancient Scraps with an Iron Pickaxe to trigger the schematic.
  </li>
  <li><a href="https://www.youtube.com/watch?v=COk3Bf44GtA&amp;t=50s">00:50</a> - 🔨 Base setup: Pushing the Workbench to Level 3 using a Sawhorse and Toolbox.
  </li>
  </ol>
  <h2>Step-by-Step Acquisition
  </h2>
  <p>In Windrose, Hewn Stone is the mandatory bottleneck resource for transitioning your base from a thatched-roof shack into a mid-game stone fortress. However, because the game uses a "loot-to-discover" schematic system, the vast majority of players get hard-stuck here.
  </p>
  <p>Do not waste time scouring the starting Coastal Jungle. The underlying logic to acquire this is: Push main quest -&gt; Enter high-tier biome -&gt; Mine specific node -&gt; Upgrade base stations -&gt; Mass produce.
  </p>
  <p><img src="/images/guides/guide04-01.webp" alt="Windrose Ancient Debris Site map" width="50%">
  </p>
  <h2>Unlocking the Schematic: The Swamp Run
  </h2>
  <p>The most frustrating part for beginners is that the recipe list is hidden by default. To make Hewn Stone appear in your crafting UI, you are forced to extract a resource called Ancient Scraps.
  </p>
  <ol>
  <li>Access the Swamps: You cannot do this until you have defeated the second local threat boss, Israel Hands, in the Foothills, which unlocks the Cursed Swamps biome.
  </li>
  <li>Locate the Node: Open your map in the swamp and look for a ruined pillar icon labeled Ancient Debris Site.
  </li>
  <li>Hardcore Mining: Upon arrival, you'll see glowing, infected rock formations. Warning! A normal stone pickaxe will bounce right off this. You are strictly required to have an Iron Pickaxe equipped.
  </li>
  <li>Trigger the Blueprint: The moment you shatter the node and the Ancient Scraps enter your inventory, a bright notification will pop up on the right side of your screen: New schematics obtained: Hewn Stone. The tech lock is now removed.
  </li>
  </ol>
  <p><img src="/images/guides/guide04-02.webp" alt="Windrose Ancient Debris Site 2" width="50%">
  </p>
  <h2>Sourcing the Raw Materials
  </h2>
  <p>The irony of this game's progression design is wild: unlocking the recipe requires a dangerous trek into a high-level infected zone, but the actual material needed to craft it is the most common trash item in the game—Stone.
  </p>
  <p>You can find regular Stone literally anywhere: beaches, forests, or right outside your front door. There are no biome restrictions for gathering the raw crafting material. One swing at a generic grey rock pile will yield dozens.
  </p>
  <h2>Level 3 Workbench Upgrades
  </h2>
  <p>Many rookies grab the schematic, farm 500 stones, run back to base, and open their Workbench only to find the Hewn Stone text is greyed out with a glaring red warning: Level 3 station is required.
  </p>
  <p>A vanilla Level 1 Workbench is only good for bandages and ropes. You have to install "add-ons" to increase its Comfort Level/Station Tier.
  </p>
  <ol>
  <li>Reaching Level 2: Usually achieved just by building a roof and basic walls around the bench.
  </li>
  <li>Forcing Level 3: You must craft and place two specific utility structures in extremely close proximity to the Workbench: a Sawhorse and a Toolbox.
  </li>
  </ol>
  <p>Placement matters. Drop them close and check the top of your Workbench UI. Once it reads [Lv. 3], the recipe will light up green.
  </p>
  <p><img src="/images/guides/guide04-03.webp" alt="Windrose Hewn Stone " width="50%">
  </p>
  <h2>Crafting Costs &amp; Tier Requirements
  </h2>
  <p>Once you overcome the brutal unlocking phase, the actual production cost is practically free. Here is the hardcore data breakdown:
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-l8fd7d">Item / Facility Name
  </td>
  <td data-row="row-l8fd7d">Category
  </td>
  <td data-row="row-l8fd7d">Unlock Prerequisite
  </td>
  <td data-row="row-l8fd7d">Crafting Cost
  </td>
  <td data-row="row-l8fd7d">Station Level Required
  </td>
  </tr>
  <tr>
  <td data-row="row-f3hhu9">Hewn Stone
  </td>
  <td data-row="row-f3hhu9">Building Material
  </td>
  <td data-row="row-f3hhu9">Mine 'Ancient Scraps'
  </td>
  <td data-row="row-f3hhu9">3x Stone
  </td>
  <td data-row="row-f3hhu9">Workbench (Level 3)
  </td>
  </tr>
  <tr>
  <td data-row="row-nxyocf">Sawhorse
  </td>
  <td data-row="row-nxyocf">Base Upgrade
  </td>
  <td data-row="row-nxyocf">Basic Carpentry progression
  </td>
  <td data-row="row-nxyocf">Wood Planks, Nails, etc.
  </td>
  <td data-row="row-nxyocf">None
  </td>
  </tr>
  <tr>
  <td data-row="row-u4g947">Toolbox
  </td>
  <td data-row="row-u4g947">Base Upgrade
  </td>
  <td data-row="row-u4g947">Basic Blacksmithing progression
  </td>
  <td data-row="row-u4g947">10x Nails, 5x Tumbaga Iron Ingot
  </td>
  <td data-row="row-u4g947">None
  </td>
  </tr>
  </tbody>
  </table>
  <h3>FAQ: Hewn Stone Troubleshooting
  </h3>
  <p>Q: I found Ancient Debris in the Cursed Swamps, but my character does 0 damage to it. Why?
  </p>
  <p> A: You are using the wrong tool tier. Windrose enforces strict material hardness checks. A Stone Pickaxe or Copper Pickaxe will not scratch Ancient Debris. You must upgrade to an Iron Pickaxe via your blacksmithing station before attempting this run.
  </p>
  <p>Q: My Workbench is Level 3 and I have a chest full of stone, but the recipe is entirely missing. What gives?
  </p>
  <p> A: Did you sequence-break or join a friend's world? If your specific character's inventory has never physically picked up "Ancient Scraps," the schematic will remain hidden forever, regardless of your base level. You must go to the swamp and mine the scrap yourself to flip the hidden progression switch.
  </p>
  <p>Q: Do the Sawhorse and Toolbox have to be physically touching the Workbench?
  </p>
  <p> A: They don't need to clip into each other, but the game uses a very tight proximity radius (usually within the same 1x1 or 2x2 foundation block). If you place the Toolbox on the opposite side of a large room, the Workbench will not register the +1 level buff.
  </p>`.trim(),
  },

  {
    id: 5,
    head: `{
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Windrose Fishing Guide & Rod Crafting",
    "description": "Hardcore SEO guide on windrose fishing. Learn exactly how to craft the fishing rod by finding Divi-Divi hardwood in the Foothills, the best fishing mechanics for deep water, and the meta Seafood Platter recipe for massive Vitality buffs.",
    "thumbnailUrl": [
      "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777111580/cms-uploads/cms-1777111580649-334899069.webp"
    ],
    "uploadDate": "2026-04-25T14:00:00+08:00",
    "duration": "PT8M10S",
    "contentUrl": "https://www.youtube.com/watch?v=f4ubyXc7xx8",
    "embedUrl": "https://www.youtube.com/embed/f4ubyXc7xx8",
    "hasPart": [
      {
        "@type": "Clip",
        "name": "Finding Divi-Divi Hardwood in the Foothills",
        "startOffset": 21,
        "endOffset": 66,
        "url": "https://windrosegame.net/guides/windrose-fishing-guide-rod-crafting-best-food-meta#video&t=21s"
      },
      {
        "@type": "Clip",
        "name": "Crafting the Fishing Rod at Level 2 Workbench",
        "startOffset": 66,
        "endOffset": 169,
        "url": "https://windrosegame.net/guides/windrose-fishing-guide-rod-crafting-best-food-meta#video&t=66s"
      },
      {
        "@type": "Clip",
        "name": "Fishing Mechanics and Water Types",
        "startOffset": 169,
        "endOffset": 250,
        "url": "https://windrosegame.net/guides/windrose-fishing-guide-rod-crafting-best-food-meta#video&t=169s"
      }
    ]
  }`,
    title: "Windrose Fishing Guide: Rod Crafting & Best Food Meta",
    description: "Stop wasting time looking for a rod early. This hardcore windrose fishing guide shows you where to find Divi-Divi hardwood to craft the rod, catch mechanics, and cook the +20 Vitality Seafood Platter.",
    tags: ["Windrose", "Fishing Guide", "Rod Crafting", "Survival Game", "Food Meta", "Boss Strategy"],
    publishDate: "2026-04-25",
    imageUrl: "/images/guides/guide05.webp",
    imageAlt: "A player character in Windrose standing on a boat, fishing in deep water with a successful 'Flat Splash' visual effect.",
    seo: {
      title: "Windrose Fishing Guide: Master Rod Crafting & Unlock +20 Vitality Food Meta",
      description: "Unravel the secrets of fishing in Windrose! This guide covers essential mid-game rod crafting, finding Divi-Divi hardwood, simple fishing mechanics, and the game-changing Seafood Platter for +20 Vitality to dominate boss fights.",
      keywords: "Windrose fishing, rod crafting, Divi-Divi hardwood, fishing guide, seafood platter, vitality food, boss meta, survival game tips"
    },
    isHome: true,
    addressBar: "windrose-fishing-guide-rod-crafting-best-food-meta",
    detailsHtml: `<h1>Windrose Fishing Guide
  </h1>
  <p>Many assume fishing is just a casual side activity, which is a massive misconception. In Windrose, fishing is an absolute mid-to-late game requirement for bossing. Stop searching the starter Coastal Jungle for a recipe. You must defeat the first boss, unlock the Foothills biome, and farm Iron Ingots alongside Hardwood from Divi-Divi trees just to craft the rod at a Level 2 Workbench. Unlike games with overly complex bait mechanics, catching fish here is a simple reaction test. The real endgame lies in the kitchen: processing hundreds of Fish Fillets at a Level 3 Cooking Pot to mass-produce the Seafood Platter. That +20 Vitality buff is the definitive meta that prevents you from getting one-shot by late-game enemies.
  </p>
  <iframe src="https://www.youtube.com/embed/f4ubyXc7xx8" class="ql-video" width="800" height="450" allowfullscreen="true" frameborder="0">
  </iframe>
  <p><br>
  
  </p>
  <p>Skip the fluff? Jump straight to the key moments:
  </p>
  <ol>
  <li><a href="https://www.youtube.com/watch?v=f4ubyXc7xx8&amp;t=21s">00:21</a> - 🪓 Identifying and chopping the curly Divi-Divi trees for Hardwood.
  </li>
  <li><a href="https://www.youtube.com/watch?v=f4ubyXc7xx8&amp;t=66s">01:06</a> - 🔨 The exact material cost for crafting the Rod at a Lv.2 Workbench.
  </li>
  <li><a href="https://www.youtube.com/watch?v=f4ubyXc7xx8&amp;t=169s">02:49</a> - 🎣 Execution: Waiting for the "flat splash" to reel in perfectly.
  </li>
  </ol>
  <h2>Fishing Rod: Mid-Game Crafting Prerequisites
  </h2>
  <p>Do not attempt to craft a fishing rod on the starting beach. The game's progression system strictly gates this activity: Fishing is a designated mid-game mechanic.
  </p>
  <p>Players get hard-stuck because two core ingredients do not exist in the initial spawn zones. You must journey to the Foothills:
  </p>
  <ol>
  <li>Iron Ingots: Mine iron nodes scattered across the rocky elevations (requires a Copper Pickaxe or better) and smelt them.
  </li>
  <li>Hardwood: This is the real bottleneck. You must locate a highly specific tree called the Divi-Divi. Look for trunks with a strange, bendy, swirly shape. They are often guarded by goats or pirate camps. Chop them down with a Copper Axe.
  </li>
  </ol>
  <p><img src="/images/guides/guide05-01.webp" alt="windrose divdiv-divdiv tree" width="50%">
  </p>
  <p>Counter-Intuitive Check: Even with the materials in your bag, you cannot craft it at a vanilla station. You are forced to upgrade your Workbench to Level 2 by placing a Sawhorse nearby. Only then will the recipe for the Simple Fishing Rod (2x Iron Ingots, 3x Crude Rope, 5x Hardwood) become available.
  </p>
  <h2>Complete Fishing Guide: Mechanics and Cooking Meta
  </h2>
  <p>Once you have the rod, how do you optimize your time? Some generic guides will tell you to hunt for specific bait or secret biomes. Ignore that. In the current Early Access build, Windrose fishing is brutally simplified. Stand on the deck of your ship or a coastal peninsula, and cast directly into deep water.
  </p>
  <p>The Hardcore Catch Mechanic:
  </p>
  <p> Stop squinting at the bobber's micro-movements. Cast your line and watch the water surface. The moment you see a large, flat white splash accompanied by a distinct sound cue, instantly left-click to reel it in. It is a 100% catch rate if you nail this timing.
  </p>
  <p><img src="/images/guides/guide05-02.webp" alt="windrose fishing rod" width="50%">
  </p>
  <p>Fish Tiers and Fillet Yields:
  </p>
  <p> Don't discard "low-tier" catches. Your sole objective is hoarding Fish Fillets. Epic quality fish are walking meat-stashes.
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-045kqm">Fish Rarity
  </td>
  <td data-row="row-045kqm">Notable Examples
  </td>
  <td data-row="row-045kqm">Fish Fillet Yield Per Catch
  </td>
  </tr>
  <tr>
  <td data-row="row-dhqcys">Uncommon (Green)
  </td>
  <td data-row="row-dhqcys">Pink Wrasse, Emerald Bluefish
  </td>
  <td data-row="row-dhqcys">2 to 4 Fillets
  </td>
  </tr>
  <tr>
  <td data-row="row-zeln1p">Rare (Blue)
  </td>
  <td data-row="row-zeln1p">Reef Snapper, Red Snapper
  </td>
  <td data-row="row-zeln1p">4 to 12 Fillets
  </td>
  </tr> 
  <tr>
  <td data-row="row-psdntn">Epic (Purple)
  </td>
  <td data-row="row-psdntn">Giant Mackerel, Large Barracuda
  </td>
  <td data-row="row-psdntn">Up to 20 Fillets
  </td>
  </tr>
  </tbody>
  </table>
  <p>Warning: Tooltips lie. The in-game text for the Moon Angelfish claims it is caught in "shallow waters," but actual gameplay confirms it frequently bites in the deep ocean. Just cast deep to maximize large fillet yields.
  </p>
  <p>The Ultimate Goal: Why bother?
  </p>
  <p> Is it for the Master Fisherman achievement? No. Catching all 10 fish grants the Minor Fisherman Ring (+15% chance to catch extra fish), which is just a nice quality-of-life tool.
  </p>
  <p> The true power spike is the kitchen. Upgrade your cooking station to Level 3 (Cookware Shelf). Do NOT waste your Crab Legs on the Level 1 Seafood Skewer (+5 Strength). Save them, combine them with Limes (found under tall Foothill trees), looted Salt, and your Fish Fillets to craft the Seafood Platter. This masterpiece grants a staggering +20 Vitality for 30 minutes. This health buffer is the absolute meta for surviving late-game pirate encounters.
  </p>
  <p><img src="/images/guides/guide05-03.webp" alt="windrose fish cooking" width="50%">
  </p>
  <h3>FAQ: Hardcore Fishing Truths
  </h3>
  <p>Q: I've been fishing in the starting Coastal Jungle, why am I only getting low-yield fish?
  </p>
  <p> A: While you *can* fish from the starter shores, the Deep Ocean drop table has a significantly higher chance of spawning Epic-tier giants like the Giant Mackerel. Sail your ship into open water to exponentially increase your Fillet-per-minute ratio.
  </p>
  <p>Q: Is grinding for the Minor Fisherman Ring worth my time early on?
  </p>
  <p> A: Only passively. The ring provides a 15% chance for bonus fish drops, which is great when you are mass-producing food late game. However, grinding for it immediately upon getting the rod is a waste of progression time. Catch them naturally as you explore.
  </p>
  <p>Q: The Seafood Platter requires a ton of Salt. Can I mine it or gather it from seawater?
  </p>
  <p> A: No, Windrose doesn't feature seawater distillation for salt yet. Salt is strictly a lootable resource. You must farm it by cracking open pirate loot crates on land or successfully boarding and looting enemy ships marked with the "golden chest" icon. Treat salt as a premium combat resource.
  </p>`.trim(),
  },

  {
    id: 6,
    title: "Best Windrose Rapier Build: The S+ Tier Precision Setup",
    description: "Master the S+ Tier Rapier Precision build in Windrose. Stop splitting stats. Learn the 4k damage Plague combo, exact gear progression from Thousand Cuts to Devastation, and the 0 Endurance coffee trick.",
    tags: ["Windrose", "Windrose Rapier Build"],
    publishDate: "2026-04-29",
    imageUrl: "/images/guides/guide06.webp",
    imageAlt: "windrose-best-builds-rapier-build-set-up",
    isHome: true,
    seo: {
      title: "Best Windrose Rapier Build: The S+ Tier Precision Setup",
      description: "Master the S+ Tier Rapier Precision build in Windrose. Stop splitting stats. Learn the 4k damage Plague combo, exact gear progression from Thousand Cuts to Devastation, and the 0 Endurance coffee trick.",
      keywords: "Windrose Rapier Build"
    },
    addressBar: "windrose-best-builds-rapier-build",
    detailsHtml: `
  <p>Many generalized guides will tell you to balance your stats between Strength, Agility, and Vitality to survive in Windrose. That is a massive trap. The Rapier Precision build is an S+ Tier meatgrinder because it exploits a fundamental mechanic: both Rapiers and Pistols/Muskets scale exclusively with the Precision stat. By dumping every point into Precision and relying on the "Rapier Of Devastation" Epic effect to literally eat Plague Marks for huge self-heals, you bypass the need for tank stats. If you can land your Perfect Blocks, this build will let you nuke late-game Plague Crushers for 4,000+ damage in a single Heavy Attack.
  </p>
  <p><strong>Tip:</strong> Dry-run the talent order below on our <a href="/talents">Windrose Talent Builder</a>—same four-branch tree as in-game, and you can paste the link to your crew before you respec.
  </p>
  <h2>Gear Progression: From Bleed DoT to Plague Nuke
  </h2>
  <p>You can't just spawn in and magically have the best build. Your gear dictates your playstyle. A critical mistake rookies make is trying to force the late-game burst playstyle while still using mid-game weapons.
  </p>
  <p>This build has a strict, non-negotiable two-phase transition. You will start with a Damage-over-Time (DoT) setup and eventually transition into a raw burst/lifesteal god.
  </p>
  <p>[Insert image here: In-game screenshot comparing the stats and Epic effects of the Rapier Of A Thousand Cuts alongside the Rapier Of Devastation]
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-wscuv3">Gear Slot
  </td>
  <td data-row="row-wscuv3">Mid-Game Setup (Bleed Focus)
  </td>
  <td data-row="row-wscuv3">Late-Game Setup (Burst &amp; Heal)
  </td>
  </tr>
  <tr>
  <td data-row="row-io6hh9">Main Weapon
  </td>
  <td data-row="row-io6hh9">Rapier Of A Thousand Cuts (Random POI Drop)
  </td>
  <td data-row="row-io6hh9">Rapier Of Devastation (Cursed Swamps)
  </td>
  </tr>
  <tr>
  <td data-row="row-yu3102">Ranged Weapon
  </td>
  <td data-row="row-yu3102">Reliable Pistol
  </td>
  <td data-row="row-yu3102">Drake's Double-Barreled Pistol
  </td>
  </tr>
  <tr>
  <td data-row="row-9t06mr">Armor Set
  </td>
  <td data-row="row-9t06mr">Conquistador's (2x) + Pikeman's (2x)
  </td>
  <td data-row="row-9t06mr">Flibustier's (4x)
  </td>
  </tr>
  <tr>
  <td data-row="row-wzd1de">Ring
  </td>
  <td data-row="row-wzd1de">Major Spear-Thrower's Ring (+Pierce Dmg)
  </td>
  <td data-row="row-wzd1de">Major Warrior Ring (+Special Wep Dmg)
  </td>
  </tr>
  <tr>
  <td data-row="row-jnur59">Necklace
  </td>
  <td data-row="row-jnur59">Major Necklace Of Precision
  </td>
  <td data-row="row-jnur59">Major Necklace Of Precision
  </td>
  </tr>
  </tbody>
  </table>
  <p>Why the specific Armor swap? In the mid-game, you need the Pikeman's 2-piece set for raw survivability because your self-sustain is low. In the late game, the Rapier Of Devastation heals you when consuming Plague Marks, allowing you to drop defensive armor entirely and run the 4-piece Flibustier's set for maximum offensive output.
  </p>
  <h2>Stat Allocation &amp; The Zero-Endurance "Coffee Bypass"
  </h2>
  <p>If you look at the stats below and think "0 Endurance is suicide for a melee build," you haven't understood the consumable meta in Windrose.
  </p>
  <ol>
  <li>Precision: 35
  </li>
  <li>Vitality: 10 (Bump this up slightly when you lose the Pikeman's 2P armor bonus).
  </li>
  <li>Endurance: 0 (+20 from Coffee)
  </li>
  </ol>
  <p>The Diminishing Returns (DR) Reality: Hardcore data testing proves that once you push Precision past 20 points, the actual damage gain per point drops by roughly 50%. However, because we are "cheating" the system by using the Coffee consumable to grant us a free 20 Endurance, and Swamp Pie for extra Precision, dumping points into a heavily diminished Precision stat is still mathematically superior to putting points into Mastery.
  </p>
  <p>Never fight a boss without Coffee and the Elixir Of Cruelty (+8% Damage) active.
  </p>
  <p><img src="/images/guides/guide06-01.webp" alt="windrose-best-builds-rapier-build-stats" width="80%">
  </p>
  <h2>Playstyle Execution: The 4,000 Damage Combo
  </h2>
  <p>This is where the build separates the veterans from the floor-huggers. Your playstyle drastically changes based on your weapon phase.
  </p>
  <p>Phase 1: Thousand Cuts (Mid-Game)
  </p>
  <p> The epic effect of this rapier applies a bleeding DoT that stacks up to 5 times. 
  </p>
  <p> The Rule: Never let the stacks drop. If the DoT is about to expire, land a single light attack to refresh all 5 stacks. Let the bleed melt the enemy's health bar while you play safely behind Perfect Blocks. Fire your Pistol only when the passive reload finishes; do NOT manually reload.
  </p>
  <p>Phase 2: Devastation (Late-Game)
  </p>
  <p> This weapon applies Plague Marks. Consuming 5 or more marks with a Heavy Attack heals you massively.
  </p>
  <p> The Absolute Combo against Bosses/Plague Crushers:
  </p>
  <ol>
  <li>Light attack until the enemy has exactly 8 stacks of Plague Marks.
  </li>
  <li>Immediately swap to Drake's Double-Barreled Pistol and fire. (This pistol's epic effect applies the Vulnerability debuff).
  </li>
  <li>Execute a Heavy Attack.
  </li>
  </ol>
  <p>Because the target has Vulnerability and 8 Plague Marks, this specific sequence will easily result in almost 4,000 damage while simultaneously healing your character to full. If you master this, you do not need healing potions.
  </p>
  <p><img src="/images/guides/guide06-02.webp" alt="windrose-best-builds-rapier-build-consuming-plague-marks" width="80%">
  </p>
  <h2>Exact Talent Tree Sequences
  </h2>
  <p>Don't guess your talents. The synergy between the weapons and the cheat-death mechanics is tightly tuned. Apply your points in this exact order based on your current weapon.
  </p>
  <p>For Rapier Of A Thousand Cuts:
  </p>
  <ol>
  <li>Marathon Runner (3/3)
  </li>
  <li>Just A Flesh Wound (3/3)
  </li>
  <li>Stout Frame (3/3)
  </li>
  <li>Too Angry To Die (1/3) -&gt; Your cheat death safety net.
  </li>
  <li>You Will Answer For This (2/3) -&gt; Insane synergy with the Bleed DoT passive.
  </li>
  </ol>
  <p><img src="/images/guides/guide06-03.webp" alt="windrose-best-builds-rapier-build-rapier-of-a-thousand-cuts-talents" width="80%">
  </p>
  <p>For Rapier Of Devastation (The Final Form):
  </p>
  <ol>
  <li>Marathon Runner (3/3)
  </li>
  <li>Just A Flesh Wound (2/3)
  </li>
  <li>Outnumbered (1/3)
  </li>
  <li>Stout Frame (2/3)
  </li>
  <li>Too Angry To Die (1/3)
  </li>
  <li>Deep Impact (3/3) -&gt; Massive boost to your Pierce Damage for the heavy attack nuke.
  </li>
  </ol>
  <p><img src="/images/guides/guide06-04.webp" alt="windrose-best-builds-rapier-build-rapier-of-devastation-talents" width="80%">
  </p>
  <h3>FAQ: Rapier Build Troubleshooting
  </h3>
  <p>Q: I'm using the Rapier of Devastation, but I keep dying before I can get my Heavy Attack heal off. What's wrong?
  </p>
  <p> A: You are likely failing your Perfect Blocks. This build is extremely fragile because we allocate only 10 points to Vitality. If you just hold block, enemies will shatter your posture. Efficiency with this build 100% relies on hitting Perfect Blocks so you can stack Plague Marks quickly without being interrupted.
  </p>
  <p>Q: Where exactly do I farm the Rapier of A Thousand Cuts? I've cleared the starting island and found nothing.
  </p>
  <p> A: It is a random RNG drop from POI (Point of Interest) chests scattered throughout the game. You won't find it crafted at a bench. Just keep exploring ruins and camps; you will usually obtain it naturally during the mid-game progression.
  </p>
  <p>Q: Why use Drake's Double-Barreled Pistol instead of the Reliable Musket for late game?
  </p>
  <p> A: Because of debuff synergy. Drake's Pistol has an Epic effect that applies Vulnerability. The entire Rapier of Devastation combo relies on stacking 8 Plague Marks, applying Vulnerability with Drake's, and then landing the heavy attack. The Musket deals more raw ranged damage, but fails to provide the debuff needed to amplify your melee nuke.
  </p>`,
  },

  {
    id: 7,
    title: "Windrose Best Boarding Build: Plague Halberd AoE Cleave (S Tier)",
    description: "Dominate ship boarding in Windrose with the Plague Halberd AoE Cleave build. Learn how to bypass the lack of Perfect Block, melt enemy posture, and utilize the 35% massive self-heal Special Attack.",
    tags: ["Windrose Best Boarding Build"],
    publishDate: "2026-04-29",
    imageUrl: "/images/guides/guide07.webp",
    imageAlt: "windrose-best-builds-rapier-build-set-up",
    isHome: true,
    seo: {
      title: "Windrose Best Boarding Build: Plague Halberd AoE Cleave",
      description: "Dominate ship boarding in Windrose with the Plague Halberd AoE Cleave build. Learn how to bypass the lack of Perfect Block, melt enemy posture, and utilize the 35% massive self-heal Special Attack.",
      keywords: "Windrose Best Boarding Build;Plague Build"
    },
    addressBar: "windrose-best-builds-plague-halberd-boarding",
    detailsHtml: `
  <p>If you are using a 1-Handed weapon to board enemy pirate ships, you are doing it wrong. The cramped decks of a Brig or Frigate demand massive AoE damage, making the Plague Halberd the ultimate "Boarding Meatgrinder." Standard halberds in Windrose are clunky and weak, but the Plague Halberd's unique Special Attack transforms the weapon type. Be warned: You CANNOT Perfect Block with a halberd. If you try to play this like a Rapier build, your Posture will shatter instantly. But if you weave your dodges and abuse the sweeping heavy attacks, you will completely melt enemy Posture, cleave through groups, and instantly self-heal for 35% of your max HP.
  </p>
  <p><strong>Tip:</strong> Map the Crusher path on the <a href="/talents">Windrose Talent Builder</a> before you commit points—share the URL when your boarding party is theorycrafting loadouts.
  </p>
  <h2>Late-Game Gear: The Cursed Swamps Loadout
  </h2>
  <p>This is not a starter build. The core weapon, the Plague Halberd, is exclusively looted from Crypts or Ruins deep within the Cursed Swamps. Do not bother running the Sturdy Halberd or the Executioner; their lack of a killer Special Attack makes the halberd's slow animation a pure liability.
  </p>
  <p><img src="/images/guides/guide07-01.webp" alt="windrose-best-builds-plague-halberd-on-pirate ship-deck " width="80%">
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-6pmzpc">Gear Slot
  </td>
  <td data-row="row-6pmzpc">Best in Slot (BiS) Item
  </td>
  <td data-row="row-6pmzpc">Why It's Mandatory
  </td>
  </tr>
  <tr>
  <td data-row="row-is4up5">Melee Weapon
  </td>
  <td data-row="row-is4up5">Plague Halberd
  </td>
  <td data-row="row-is4up5">Exclusive Special Attack: Massive AoE damage + 35% Max HP heal.
  </td>
  </tr>
  <tr>
  <td data-row="row-7aznn6">Ranged Weapon
  </td>
  <td data-row="row-7aznn6">Plague Pistol (or Drake's Double-Barreled)
  </td>
  <td data-row="row-7aznn6">Provides extra sustain when closing the gap on enemy ships.
  </td>
  </tr>
  <tr>
  <td data-row="row-30hbzv">Armor Set
  </td>
  <td data-row="row-30hbzv">Pikeman's (4x) OR Conquistador's (4x)
  </td>
  <td data-row="row-30hbzv">Pikeman gives +15% Damage &amp; Health. Conquistador gives Bulwark (uninterruptible attacks).
  </td>
  </tr>
  <tr>
  <td data-row="row-g9gge1">Ring
  </td>
  <td data-row="row-g9gge1">Major Warrior Ring OR Major Capricorn Ring
  </td>
  <td data-row="row-g9gge1">Warrior = +30% Special Attack Dmg. Capricorn = +12% overall Crude Dmg.
  </td>
  </tr>
  <tr>
  <td data-row="row-96xhr1">Necklace
  </td>
  <td data-row="row-96xhr1">Major Necklace Of Strength
  </td>
  <td data-row="row-96xhr1">Flat +15 Strength boost for heavy weapon scaling.
  </td>
  </tr>
  </tbody>
  </table>
  <p>Armor Choice Argument: Many players blindly run Pikeman's for the raw damage. However, when boarding a ship surrounded by 4 enemies, getting staggered mid-swing is a death sentence. Running the 4-piece Conquistador's set grants you the Bulwark effect, allowing you to tank hits without animation interruption, guaranteeing your massive Special Attack lands.
  </p>
  <h2>Stats &amp; The Heavy Consumable Tax
  </h2>
  <p>Swinging a massive polearm drains Stamina fast. Because you cannot rely on Perfect Blocks, you will take chip damage and burn Stamina dodging. This makes your consumable loadout just as important as your weapon.
  </p>
  <ol>
  <li>Strength: 20 (Your primary damage scaler).
  </li>
  <li>Vitality: 15 (Higher than 1H builds to survive the lack of Perfect Block).
  </li>
  <li>Endurance: 10 (You MUST supplement this with Coffee for extra Stamina).
  </li>
  <li>Mastery/Precision: 0 (Completely useless for this weapon type).
  </li>
  </ol>
  <p>The Boarding Diet: Before you throw your grappling hooks to board an enemy ship, you must eat a Meaty Croc Kebab (Strength food) and drink the Elixir Of Firm Hand (+13% Melee Damage). Without these, your cleave won't hit the critical threshold to one-shot low-tier pirate deckhands.
  </p>
  <p><img src="/images/guides/guide07-02.webp" alt="windrose-best-builds-plague-halberd-stats" width="80%">
  </p>
  <h2>The Anti-Block Playstyle: "If-Then" Execution
  </h2>
  <p>If you play this like a Rapier, you will die. The Halberd is slow and clunky. Master these absolute rules:
  </p>
  <ol>
  <li>The Posture Rule: Do NOT sleep on the Heavy Attack. If you use a Heavy Attack, then you gain a massive +70% damage modifier, and the animation is surprisingly only slightly slower than a light attack. It will instantly shatter enemy shields.
  </li>
  <li>The No-Block Reality: If you just hold the block button against a group, then your Posture will break immediately. You MUST weave: swing -&gt; dodge away -&gt; swing -&gt; dodge away.
  </li>
  <li>The Nuke Strategy: The Plague Halberd's Special Attack buff does NOT expire once you hit 5 stacks. If you have 5 stacks, then hold onto it! Wait until 3 or 4 enemies swarm you on the deck, then unleash it. It will hit all of them and instantly heal you for 35% of your health.
  </li>
  <li>The Interruption Warning: Your Special Attack has a wind-up. If you activate it while a Plague Crusher is already mid-swing, then you will be interrupted, the ability will cancel, and you will lose your heal. (This is why Conquistador's armor is highly recommended).
  </li>
  </ol>
  <p>[Insert image here: In-game action shot showing the massive AoE swing of the Special Attack hitting 3 enemies at once, with a green +35% healing number popping up on the player]
  </p>
  <h2>The Bonecrusher Talent Tree
  </h2>
  <p>This talent path ignores finesse and focuses entirely on raw survival and brute force. Apply your points in this exact order:
  </p>
  <ol>
  <li>Marathon Runner (2/3) -&gt; Mandatory for Dodge stamina.
  </li>
  <li>Stitches and Rum (1/3)
  </li>
  <li>Just a Flesh Wound (1/3)
  </li>
  <li>Outnumbered (2/3) -&gt; Perfect for boarding scenarios.
  </li>
  <li>Too Angry to Die (1/3) -&gt; Your cheat-death.
  </li>
  <li>Stout Frame (1/3)
  </li>
  <li>Bonecrusher (3/3) -&gt; The core damage engine for 2-Handed Heavy Attacks.
  </li>
  <li>Massive (1/3)
  </li>
  </ol>
  <p><img src="/images/guides/guide07-03.webp" alt="windrose-best-builds-plague-halberd-talents" width="80%">
  </p>
  <h3>FAQ: Halberd Build Troubleshooting
  </h3>
  <p>Q: I pressed my Special Attack at 5 stacks, but nothing happened and it went on cooldown. Is it a bug?
  </p>
  <p> A: It's not a bug; it's a harsh mechanic. The Special Attack animation takes time to execute. If you take a heavy hit or get staggered during the wind-up, the action is canceled but the stacks are still consumed. You must time it during enemy recovery frames or wear the Conquistador's armor set for uninterruptible attacks.
  </p>
  <p>Q: Why no points in Agility? Doesn't that make me attack faster?
  </p>
  <p> A: Attack speed scaling in Windrose is tied strictly to weapon type and specific weapon buffs, not the raw Agility stat. Agility scales weapons like the Saber. Putting points into Agility while holding a Strength-scaling Halberd is a complete waste of your stat pool.
  </p>
  <p>Q: Is this build viable for fighting agile bosses?
  </p>
  <p> A: It is viable, but extremely difficult. The Halberd shines in AoE situations (like clearing PoIs or boarding ships). Against fast, single-target bosses who attack relentlessly, the lack of a Perfect Block means you will spend most of your stamina dodging, leaving very few openings to actually swing your weapon. Swap to a Rapier or Saber for duels.
  </p>`,
  },

  {
    id: 8,
    title: "Windrose Best Ranged Build: The Reliable Musketeer (A Tier)",
    description: "Think guns are just secondary weapons? Wrong. Master the Reliable Musketeer build in Windrose. Learn the 0 Stamina stat exploit, sub-2-second reload trick, and the ultimate FPS headshot playstyle.",
    tags: ["Windrose Best Ranged Build"],
    publishDate: "2026-04-29",
    imageUrl: "/images/guides/guide08.webp",
    imageAlt: "windrose-best-builds-best-ranged-build",
    isHome: true,
    seo: {
      title: "Windrose Best Ranged Build: Reliable Musketeer",
      description: "Hardcore breakdown of the ultimate pure ranged build in Windrose. Learn how to exploit the zero-stamina shooting mechanic, combine the Reliable Musket with the Quick Hand talent for sub-2-second reloads, and stack 30% Crit Damage for massive headshots.",
      keywords: "windrose best ranged build, windrose reliable musket, windrose marksman build"
    },
    addressBar: "windrose-best-builds-best-ranged-build",
    detailsHtml: `
  <p>If you read on Reddit that firearms in Windrose are only useful for pulling aggro or opening fights, you've been reading garbage advice from bad players. The Reliable Musketeer is, factually, the highest sustained DPS build currently in the game. It completely breaks normal combat rules because ranged attacks consume exactly ZERO Stamina, allowing you to dump everything into Precision. By combining the "Reliable Musket" Rare effect with the "Quick Hand" talent, you bypass the agonizingly slow vanilla reload animations, dropping them to under 2 seconds. However, be warned: this is an extreme Glass Cannon. You have zero self-heals, and if you cannot consistently click heads (Headshots), or if you run out of gunpowder, this build is completely useless.
  </p>
  <p><strong>Tip:</strong> Preview Marksman picks (reload and crit nodes) on the <a href="/talents">interactive talent tree</a> so you know exactly how many points the full Musketeer line needs.
  </p>
  <p><br>
  
  </p>
  <h2>Gear &amp; The Bullet Economy
  </h2>
  <p>Do not attempt this build with a generic starting musket. The entire playstyle hinges on a specific weapon drop: the Reliable Musket. It drops randomly from POIs in the Coastal Jungle and Foothills. Without its inherent reload speed buff, you will be swarmed and killed between shots.
  </p>
  <p><img src="/images/guides/guide08-01.webp" alt="windrose-best-builds-best-ranged-build-reliable-musket" width="80%">
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-xqkfof">Gear Slot
  </td>
  <td data-row="row-xqkfof">Best in Slot (BiS) Item
  </td>
  <td data-row="row-xqkfof">Why It's Mandatory
  </td>
  </tr>
  <tr>
  <td data-row="row-krn421">Melee Weapon
  </td>
  <td data-row="row-krn421">None (Leave empty)
  </td>
  <td data-row="row-krn421">You don't want to accidentally swap to melee.
  </td>
  </tr>
  <tr>
  <td data-row="row-pw4gxe">Ranged Weapon
  </td>
  <td data-row="row-pw4gxe">Reliable Musket
  </td>
  <td data-row="row-pw4gxe">Massive reload speed reduction via its Rare effect.
  </td>
  </tr>
  <tr>
  <td data-row="row-h1brzn">Armor Set
  </td>
  <td data-row="row-h1brzn">Marksman's (4x)
  </td>
  <td data-row="row-h1brzn">Provides a flat +15% Ranged Damage bonus.
  </td>
  </tr>
  <tr>
  <td data-row="row-zug1mv">Ring
  </td>
  <td data-row="row-zug1mv">Major Cutthroat Ring
  </td>
  <td data-row="row-zug1mv">Grants +30% Critical Damage (Mandatory for Headshots).
  </td>
  </tr>
  <tr>
  <td data-row="row-ewtoiq">Necklace
  </td>
  <td data-row="row-ewtoiq">Major Necklace Of Precision
  </td>
  <td data-row="row-ewtoiq">Flat +15 Precision for pure damage scaling.
  </td>
  </tr>
  </tbody>
  </table>
  <p>The Bullet Economy Tax: You cannot run this build if you are poor. Iron Bullets are fine for trash mobs, but you MUST hoard Bullet Arborum for bosses. You will be burning through hundreds of rounds and gunpowder. Farm efficiently before committing to this as your main setup.
  </p>
  <h2>The Zero-Stamina Exploit &amp; Stat Dump
  </h2>
  <p>This is where the build breaks the game. For reasons unknown (perhaps an Early Access oversight), firing a gun in Windrose consumes absolutely no Stamina. This allows us to completely ignore the Endurance stat.
  </p>
  <ol>
  <li>Precision: 35 (The absolute hard cap for your damage output).
  </li>
  <li>Vitality: 10 (You are a glass cannon. You rely on dodging, not tanking).
  </li>
  <li>Endurance: 0 (Completely unnecessary).
  </li>
  </ol>
  <p>The "Double Food" Buff: To push your Precision beyond normal limits, you must double-stack food buffs. Eat a Swamp Pie (+20 Precision) and follow it immediately with a Banana Muffin (+10 Precision). Combine this with the Elixir Of Concentration (+30% Critical Damage), and your headshots will instantly delete anything short of a boss.
  </p>
  <p><img src="/images/guides/guide08-02.webp" alt="windrose-best-builds-best-ranged-build-stats" width="80%">
  </p>
  <h2>The Glass Cannon Playstyle: "If-Then" Execution
  </h2>
  <p>You have no self-heals and terrible Vitality. If you get cornered, you die. Memorize these combat rules:
  </p>
  <ol>
  <li>The Engagement Rule: If you see a group of enemies, then you must initiate from maximum draw distance. Never walk into aggro range before firing your first shot.
  </li>
  <li>Target Prioritization: If the enemy group has ranged units (like Plague Witches), then they must die first. They are the only enemies that can trade damage with you reliably.
  </li>
  <li>The Swarm Protocol: If 1 or 2 melee enemies survive the barrage and reach your face, then DO NOT panic reload. Dodge backwards, let your "Passive Reload" mechanic finish in the background, and then turn and fire.
  </li>
  <li>The Ammo Saver: If an enemy has only a sliver of HP left, then do not waste a bullet. Left-click to perform a melee bash with the butt of your musket; the damage is surprisingly high and costs zero ammo.
  </li>
  </ol>
  <h2>The Sniper's Talent Tree
  </h2>
  <p>The talent tree is the glue that holds this fragile build together. Your primary goal is rushing down the reload and damage nodes. Apply your points in this order:
  </p>
  <ol>
  <li>Bull's Eye (3/3)
  </li>
  <li>Quick Hand (3/3) -&gt; Combines with Reliable Musket to achieve sub-2-second reloads.
  </li>
  <li>Bulletstorm (3/3) -&gt; Arguably the most broken ranged talent in the game for sustained DPS.
  </li>
  <li>Sniper's Focus (2/3)
  </li>
  <li>Firearm Training (1/3)
  </li>
  </ol>
  <p><img src="/images/guides/guide08-03.webp" alt="windrose-best-builds-best-ranged-build-talents" width="80%">
  </p>
  <h3>FAQ: Musketeer Build Troubleshooting
  </h3>
  <p>Q: I'm running out of Gunpowder way too fast. How do I sustain this build?
  </p>
  <p> A: Welcome to the ranged tax. You cannot sustain this build purely through passive looting. You must actively farm Quagmire Powder in the Cursed Swamps (to craft into gunpowder) or set up dedicated resource routes for Saltpeter and Sulfur. Use a melee build to farm materials, and switch to this build for Bossing or high-tier Crypt clearing.
  </p>
  <p>Q: Why does the guide recommend leaving the Melee Weapon slot completely empty?
  </p>
  <p> A: It's an optimization trick. In panic situations when dodging and clicking rapidly, accidentally hitting your weapon swap key will pull out a sword you have zero stats for, canceling your passive reload and locking you in an animation. Emptying the slot ensures the musket's melee bash is your only close-combat action.
  </p>
  <p>Q: I can't find the Reliable Musket. Can I use the Dragon's Breath Blunderbuss instead?
  </p>
  <p> A: No. The Blunderbuss is a close-range burst weapon that scales entirely differently (Agility) and plays like a shotgun. The Reliable Musket is a Precision-scaling, long-range sniper rifle. If you don't have the Reliable Musket yet, use the highest tier standard Musket you can craft, but expect your reload times to be significantly clunkier.
  </p>`,
  },

  {
    id: 9,
    title: "Windrose Best Crit Build: Saber & Dragon's Breath (A Tier)",
    description: "Hardcore breakdown of the ultimate Agility Crit build in Windrose. Learn the exact math to reach 50.2% Crit Chance, how to perfectly weave Blunderbuss shots into Saber combos, and the punishing reality of maintaining the Deadly Finale buff.",
    tags: ["Windrose Best Crit Build"],
    publishDate: "2026-04-29",
    imageUrl: "/images/guides/guide09.webp",
    imageAlt: "windrose-best-builds-saber-dragon-set-up",
    isHome: true,
    seo: {
      title: "Windrose Saber & Dragon's Breath Crit Build Guide",
      description: "Master the highest auto-attack DPS build in Windrose. Learn how to stack over 50% Crit Chance with the Saber and Dragon's Breath Blunderbuss, the hybrid combat rotation, and the strict Perfect Block requirements.",
      keywords: "windrose saber build, windrose dragon's breath build, windrose crit build"
    },
    addressBar: "windrose-best-builds-saber-dragon",
    detailsHtml: `<h1>Windrose A Tier Build: Saber Dragon Crit Setup
  </h1>
  <p>If you want the highest raw auto-attack DPS in the game and love an aggressive "hybrid" playstyle, this is your build. The Saber Dragon Crit setup completely abandons heavy weapons and precision rifles. Instead, it weaponizes the Agility stat to create a hyper-fast, high-risk duelist. By combining the Privateer armor set with specific talents, we can mathematically push your Crit Chance past 50%. However, be warned: this is not a brainless button-mashing build. You have zero passive damage reduction. Every single buff in this build—including your only source of healing—is instantly wiped out if you take damage. If you cannot consistently hit your Perfect Blocks, this build will feel incredibly weak.
  </p>
  <p><strong>Tip:</strong> The Fencer sequence below fits the <a href="/talents">Windrose Talent Builder</a> one-to-one—use it to compare against your current build without spending a respec.
  </p>
  <h2>Gear Overview: The Agility Arsenal
  </h2>
  <p>This build requires a massive shift in gear philosophy. We are abandoning Strength and Precision entirely. Both our melee and ranged weapons scale exclusively with Agility.
  </p>
  <p><img src="/images/guides/guide09-01.webp" alt="windrose-best-builds-saber-dragon-weapons" width="80%">
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-xj3egz">Gear Slot
  </td>
  <td data-row="row-xj3egz">Best in Slot (BiS) / Alternatives
  </td>
  <td data-row="row-xj3egz">Why It's Mandatory
  </td>
  </tr>
  <tr>
  <td data-row="row-gv9cl3">Melee Weapon
  </td>
  <td data-row="row-gv9cl3">Dueling Saber (High Risk/Reward) OR Razor (Safer)
  </td>
  <td data-row="row-gv9cl3">Fast 5-hit combos; innate +10% Crit Chance.
  </td>
  </tr>
  <tr>
  <td data-row="row-pahouf">Ranged Weapon
  </td>
  <td data-row="row-pahouf">Dragon's Breath &gt; Reliable Blunderbuss
  </td>
  <td data-row="row-pahouf">Scales with Agility; massive point-blank burst damage to trigger passive reloads.
  </td>
  </tr>
  <tr>
  <td data-row="row-2tdn09">Armor Set
  </td>
  <td data-row="row-2tdn09">Privateer (4x)
  </td>
  <td data-row="row-2tdn09">The 2-piece gives +10% Crit Chance. The 4-piece gives massive Crit Damage. Non-negotiable.
  </td>
  </tr>
  <tr>
  <td data-row="row-ggha9c">Ring
  </td>
  <td data-row="row-ggha9c">Major Cutthroat Ring
  </td>
  <td data-row="row-ggha9c">Grants +30% Critical Damage.
  </td>
  </tr>
  <tr>
  <td data-row="row-b0gxje">Necklace
  </td>
  <td data-row="row-b0gxje">Major Necklace Of Agility
  </td>
  <td data-row="row-b0gxje">Flat +15 Agility for pure scaling on both weapons.
  </td>
  </tr>
  </tbody>
  </table>
  <p>The Early Game Substitute: You can start this build relatively early in the Coastal Jungle just by obtaining the 2-piece Privateer set and a basic Razor saber. If you don't have Dragon's Breath (a late-game Cursed Swamp drop), the Reliable Blunderbuss works perfectly fine as a placeholder.
  </p>
  <h2>The Hard Math: Reaching 50.2% Crit Chance
  </h2>
  <p>We don't deal in generic terms like "high crit rate." Here is the exact mathematical breakdown of how you turn every second swing into a critical hit, alongside a staggering +90% Crit Damage modifier.
  </p>
  <ol>
  <li>Base Weapon (Dueling Saber/Razor): 10%
  </li>
  <li>Privateer Set (2-Piece Bonus): 10%
  </li>
  <li>Mastery Stat (Boosted to 20 via Food): 9.2%
  </li>
  <li>Surgical Cuts Talent: 9%
  </li>
  <li>Perfect Counter Talent: 12% (Requires a Perfect Block)
  </li>
  </ol>
  <p>Total Effective Crit Chance: 50.2%
  </p>
  <p>The Consumable Tax: Notice the Mastery stat? Do NOT hard-level Mastery. The Diminishing Returns (DR) curve heavily penalizes Mastery after 20 points. We leave our base Mastery at 0 and eat a Taco (+20 Mastery) to hit the sweet spot. Pair this with Gazpacho (+20 Agility) and the Elixir Of Concentration (+30% Critical Damage).
  </p>
  <h2>The Hybrid Playstyle: "If-Then" Execution
  </h2>
  <p>This build operates on a strict sequence. You are not a mindless hacker. You are a hybrid duelist.
  </p>
  <ol>
  <li>The Opener Rule: If you initiate combat, then you MUST start by sprinting into point-blank range and firing your Blunderbuss into their face. This instantly chunks their health and starts the "passive reload" timer in the background while you draw your Saber.
  </li>
  <li>The Perfect Block Requirement: If you block an attack, then it MUST be a Perfect Block. A Perfect Block triggers Perfect Counter (+12% Crit) and Retaliation (+24% Damage).
  </li>
  <li>The Glass Cannon Penalty: If you miss a block and take actual damage, then you instantly lose your Deadly Finale buff, your Retaliation buff, AND your Executioner's Grace heal-over-time. Your DPS will crash. You must dodge unblockable/ranged attacks at all costs.
  </li>
  <li>The Finisher: If your passive reload clicks (you will hear a sound cue), then weave the Blunderbuss shot into the end of your 5-hit Saber combo for a massive burst execution.
  </li>
  </ol>
  <h2>Stat Allocation &amp; Talent Path
  </h2>
  <p>Because we have no inherent tankiness and lose our only heal when damaged, we cannot go 0 Vitality like the pure Ranged build.
  </p>
  <ol>
  <li>Agility: 15 (+20 from Gazpacho)
  </li>
  <li>Vitality: 20 (Necessary buffer for missed blocks).
  </li>
  <li>Endurance: 10 (The Saber has a long 5-hit combo; you need this stam to dodge afterward).
  </li>
  <li>Mastery: 0 (+20 from Taco)
  </li>
  </ol>
  <p><img src="/images/guides/guide09-02.webp" alt="windrose-best-builds-saber-dragon-stats" width="80%">
  </p>
  <p>The Talent Sequence:
  </p>
  <ol>
  <li>Surgical Cuts (3/3) -&gt; Mandatory raw crit increase.
  </li>
  <li>Perfect Counter (3/3) -&gt; Mandatory +12% crit upon perfect blocking.
  </li>
  <li>Deadly Finale (3/3) -&gt; Up to +25% ramping damage on consecutive hits.
  </li>
  <li>Quick Strikes (1/3)
  </li>
  <li>Deep Cuts (1/3)
  </li>
  <li>Executioner's Grace (1/3) -&gt; Your ONLY source of self-sustain (Heals over 20s on kill, lost on taking damage).
  </li>
  </ol>
  <p><img src="/images/guides/guide09-03.webp" alt="windrose-best-builds-saber-dragon-talents" width="80%">
  </p>
  <h3>FAQ: Saber Crit Build Troubleshooting
  </h3>
  <p>Q: I have all the gear, but my damage drops off randomly during fights. Why?
  </p>
  <p> A: Read the fine print on your Talents. The core buffs of this build (Retaliation, Deadly Finale, Executioner's Grace) all share the same brutal penalty: "Lost on damage taken." If you are getting clipped by a stray pirate bullet or failing a Perfect Block, you are resetting your damage multipliers to zero.
  </p>
  <p>Q: Why use the Blunderbuss instead of a normal Pistol?
  </p>
  <p> A: Scaling and Combat Range. The Blunderbuss scales with Agility, perfectly matching your Saber. Pistols scale with Precision, which you have 0 points in. Furthermore, this is a melee-range build; the Blunderbuss acts as a devastating shotgun blast right before you start swinging, whereas a Pistol is meant for kiting.
  </p>
  <p>Q: Is the Dueling Saber really better than the Razor? The Razor seems safer.
  </p>
  <p> A: The Dueling Saber has a higher damage ceiling if you play perfectly, making it the BiS (Best in Slot) for veterans. However, the Razor is much more forgiving. If you are still learning enemy attack patterns and missing your Perfect Blocks frequently, stick with the Epic Razor. Only transition to the Dueling Saber when you are confident in your defensive timing.
  </p>`,
  },

  {
    id: 10,
    title: "Windrose Best Talents & Stats Guide for Beginners",
    description: "Hardcore breakdown of the windrose character build system. Learn how to allocate your max talent points, avoid splitting weapon stats, and why the Rapier double-dips the Precision stat. Complete windrose leveling guide for early game.",
    tags: ["windrose Talents build"],
    publishDate: "2026-04-29",
    imageUrl: "/images/guides/guide10.webp",
    imageAlt: "best-talents-and-stats-windrose-talents",
    isHome: true,
    seo: {
      title: "Windrose Talents Build & Stats Guide: Early Game Progression",
      description: "Stop building weak characters. This hardcore Windrose progression guide explains the exact stats guide, weapon scaling, and the best survival talents to level up first. Free respec mechanics explained.",
      keywords: "windrose Talents build, windrose stats guide, windrose progression guide"
    },
    addressBar: "windrose-best-talents-and-stats-guide",
    detailsHtml: `
  <p>Stop stressing over creating the "perfect" Windrose character build at level 5, and absolutely stop splitting your points between Strength and Agility. In Windrose, spreading your damage stats is a death sentence for your DPS. The most important mechanic you need to understand is that you can reset your stats and talents at ANY time for completely free. Treat your character UI as a built-in Windrose talent calculator. For early game progression, ignore the offensive talent trees entirely; dump your points into the left-side survival tree for the "Too Angry to Die" cheat-death mechanic, and allocate your stats to exclusively match your single primary weapon type.
  </p>
  <p><strong>Tip:</strong> Our <a href="/talents">Windrose Talent Builder</a> mirrors the in-game four branches (Fencer, Crusher, Marksman, Toughguy)—use it alongside this guide to click the same survival picks before you touch the respec screen.
  </p>
  <h2>Windrose Stats Guide: Never Split Your Damage
  </h2>
  <p>A major trap for new players looking up a windrose leveling guide is misunderstanding how the six core stats work. Three of them are strictly for damage scaling, and three are supportive utility. You must pick ONE damage stat and ignore the other two.
  </p>
  <p><img src="/images/guides/guide10-01.webp" alt="the Windrose Character Stat screen highlighting the 6 core attributes" width="80%">
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-ynq5gl">Stat Name
  </td>
  <td data-row="row-ynq5gl">Core Function / Scaling Math
  </td>
  <td data-row="row-ynq5gl">Tied Weapon Types
  </td>
  </tr>
  <tr>
  <td data-row="row-r245gk">Strength
  </td>
  <td data-row="row-r245gk">Scales Heavy Melee. No ranged options exist for this stat.
  </td>
  <td data-row="row-r245gk">Club, Halberd
  </td>
  </tr>
  <tr>
  <td data-row="row-gij4sw">Agility
  </td>
  <td data-row="row-gij4sw">Scales Fast/Sweeping combat &amp; AoE clearing.
  </td>
  <td data-row="row-gij4sw">Saber, Greatsword, Blunderbuss
  </td>
  </tr>
  <tr>
  <td data-row="row-o29w2p">Precision
  </td>
  <td data-row="row-o29w2p">Scales Technical &amp; Ranged combat. (Single-target focus).
  </td>
  <td data-row="row-o29w2p">Rapier, Pistol, Musket
  </td>
  </tr>
  <tr>
  <td data-row="row-buoyhf">Endurance
  </td>
  <td data-row="row-buoyhf">+5 Stamina per point. Essential for early game dodging/blocking.
  </td>
  <td data-row="row-buoyhf">Buffs 'Bonebreaker' (2H Club)
  </td>
  </tr>
  <tr>
  <td data-row="row-3tmf24">Vitality
  </td>
  <td data-row="row-3tmf24">+13 Maximum Health per point.
  </td>
  <td data-row="row-3tmf24">All Builds
  </td>
  </tr>
  <tr>
  <td data-row="row-kxv48f">Mastery
  </td>
  <td data-row="row-kxv48f">+0.5% Critical Hit Chance per point.
  </td>
  <td data-row="row-kxv48f">All Builds (Low priority early)
  </td>
  </tr>
  </tbody>
  </table>
  <p>The "Double-Dip" Pro Tip: If you are theorycrafting the best windrose character build, notice the anomaly in the Precision stat. If you use a Rapier, then your melee attacks scale with Precision. This is the only 1-Handed melee weapon that does this, allowing you to run a Rapier + Pistol loadout where BOTH weapons reach maximum damage by dumping points into a single stat (Precision).
  </p>
  <h2>Strength Build vs. Agility Build: Early Allocation
  </h2>
  <p>Because you can freely reset, your stat allocation should fluidly change based on the weapons you currently have equipped.
  </p>
  <p>The Early Game Stat Split Rule:
  </p>
  <ol>
  <li>If you are playing a Windrose Strength Build (holding a Halberd), then put equal points into Endurance and Vitality to survive, and dump the rest into Strength.
  </li>
  <li>If you are playing a Windrose Agility Build (holding a Saber), then put equal points into Endurance and Vitality, and dump the rest into Agility.
  </li>
  </ol>
  <p>Do NOT hard-level Mastery early on. 0.5% crit per point is a terrible return on investment when you have low base damage. Rely on gear (like the Privateer's set) for early crit.
  </p>
  <h2>The Reddit Meta: The Best Early Game Talents
  </h2>
  <p>If you search for windrose best talents reddit, the consensus among hardcore players is unanimous: early boss fights are entirely gated by Stamina management and not getting one-shot. You do not need +5% sword damage at level 10; you need to stay alive.
  </p>
  <p>If you want the smoothest progression, then prioritize the Left Talent Tree (Survival) in this exact sequence until you hit your max talent points for the early tier:
  </p>
  <ol>
  <li>Marathon Runner: Grants +20/35/50 Stamina. Stamina dictates your ability to sprint, swing, and dodge. Max this first.
  </li>
  <li>Just a Flesh Wound: Grants 6%/9%/12% Melee Damage Resistance. Since ranged enemies are easily dodged early game, this raw melee mitigation is huge.
  </li>
  <li>Too Angry to Die: The absolute best 1-point wonder in the game. Upon taking a killing blow, you instantly revive at 30% health. (16-minute cooldown).
  </li>
  <li>Stout Frame: Grants +120/180/240 Health. At rank 3, this gives 240 HP, which is mathematically equivalent to wasting almost 20 points in Vitality. Take this to free up your stat points for pure damage.
  </li>
  </ol>
  <p><img src="/images/guides/guide10-02.webp" alt="best-talents-and-stats-windrose-talents-picks" width="80%">
  </p>
  <p>Once you secure these core survival nodes, you have built the ultimate safety net. From there, use the free respec system to tailor the rest of your points toward your specific weapon mastery.
  </p>
  <h3>FAQ: Progression &amp; Build Troubleshooting
  </h3>
  <p>Q: Does it cost gold or resources to use the Windrose talent calculator to reset my points?
  </p>
  <p> A: No. The respec system is 100% free and can be done at any time. Do not be afraid to test a Strength Halberd build for an hour, wipe your points, and swap to a Precision Rapier build if you find a better weapon.
  </p>
  <p>Q: Should I put points into Vitality if I have "Stout Frame" maxed out?
  </p>
  <p> A: In the early game, you still need a modest baseline of Vitality so you don't get one-shot by heavy boss attacks before your mitigation applies. However, your primary source of Health should come from Food Buffs and the Stout Frame talent, allowing you to heavily bias your points into your weapon stat (Str/Agi/Pre) and Endurance.
  </p>
  <p>Q: I have a Blunderbuss and a Rapier. How do I stat this?
  </p>
  <p> A: You don't. This is a mathematically broken loadout. The Blunderbuss requires Agility, and the Rapier requires Precision. If you split your points 50/50, both weapons will hit like wet noodles. Always pair weapons that share the same scaling stat (e.g., Saber + Blunderbuss = Pure Agility).
  </p>`,
  },

  {
    id: 11,
    title: "Windrose Advanced Fish Guide: Secret Weapon & Collection",
    description: "Hardcore advanced windrose fishing guide. Learn the exact loot pool for all 10 fish, how to exploit the shallow water spawn bug, and the reality of the secret Smasher fish weapon.",
    tags: ["Windrose Advanced Fish Guide"],
    publishDate: "2026-04-30",
    imageUrl: "/images/guides/guide11.webp",
    imageAlt: "windrose-fishing-guide-all-fish",
    seo: {
      title: "Windrose Fish Guide: The Secret Weapon, Collection & Ring",
      description: "Advanced Windrose fishing guide. Discover how to fish up the secret Smasher weapon, exploit the collection bug to get the Fisherman's Ring, and cook advanced Fillet recipes.",
      keywords: "windrose fish weapon,windrose fish sword,windrose fish collection,windrose all fish,windrose fishing ring"
    },
    addressBar: "windrose-advanced-fish-guide-secret-weapon-collection",
    detailsHtml: `
  <p>If you already know how to craft a fishing rod and reel in the basics, it's time to talk about the endgame of Windrose fishing. This isn't just about farming fillets anymore. By mindlessly casting your line, you can randomly hook a secret weapon called the "Smasher"—which the community falsely calls a sword, but is actually a 1-Handed Mace with massive knockback. Furthermore, you need to exploit the current "shallow water bug" to quickly complete your 10-fish collection before the devs patch it. Doing so unlocks the Fisherman's Ring, though mathematically, the sheer act of grinding for this ring will leave you with so many Fish Fillets that the ring's buff becomes instantly obsolete.
  </p>
  <h2>The Secret Windrose Fish Weapon: Smasher
  </h2>
  <p>Let's clear up the Reddit rumors immediately. Many players search for a windrose fish sword because of leaked screenshots. The item exists, but its official name is the Smasher, and mechanically, it is a One-handed Rare Mace.
  </p>
  <p>You cannot craft this. It is a pure RNG drop obtained exclusively by fishing. It does not matter if you fish in Shallow or Deep waters; every successful catch has a fractional chance to pull up the Smasher instead of a fish.
  </p>
  <p>Is it actually good?
  </p>
  <p> No. In terms of raw stats, it sits firmly in the D-Tier of weapon tier lists. 
  </p>
  <p> If you are looking for a weapon to push Cursed Swamp crypts, then throw this in your stash immediately. It cannot be ascended to Epic tier. However, its "Fun Level" is S-Tier because it possesses a hidden modifier that applies a massive knockback effect on hit, making it hilarious for knocking pirates off their ships during boarding.
  </p>
  <p><img src="/images/guides/guide11-01.webp" alt="windrose-how-to-get-smasher-secret-weapon-loot" width="80%">
  </p>
  <h2>Windrose All Fish: The Collection Exploit
  </h2>
  <p>To fully complete your windrose fish collection, you need to catch 10 distinct species. By design, the game splits these into two loot tables: Shallows and Deep Waters.
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-jijbv0">Fish Species
  </td>
  <td data-row="row-jijbv0">Intended Water Type
  </td>
  <td data-row="row-jijbv0">Rarity
  </td>
  </tr>
  <tr>
  <td data-row="row-3w1qr1">Blue Tang
  </td>
  <td data-row="row-3w1qr1">Shallows
  </td>
  <td data-row="row-3w1qr1">Uncommon
  </td>
  </tr>
  <tr>
  <td data-row="row-vddd2u">Moon Angelfish
  </td>
  <td data-row="row-vddd2u">Shallows
  </td>
  <td data-row="row-vddd2u">Uncommon
  </td>
  </tr>
  <tr>
  <td data-row="row-blqjuw">Queen Angelfish
  </td>
  <td data-row="row-blqjuw">Shallows
  </td>
  <td data-row="row-blqjuw">Uncommon
  </td>
  </tr>
  <tr>
  <td data-row="row-z44g4e">Pink Wrasse
  </td>
  <td data-row="row-z44g4e">Shallows
  </td>
  <td data-row="row-z44g4e">Uncommon
  </td>
  </tr>
  <tr>
  <td data-row="row-thzj47">Sapphire Wrasse
  </td>
  <td data-row="row-thzj47">Shallows
  </td>
  <td data-row="row-thzj47">Uncommon
  </td>
  </tr>
  <tr>
  <td data-row="row-iw2v8b">Reef Snapper
  </td>
  <td data-row="row-iw2v8b">Shallows
  </td>
  <td data-row="row-iw2v8b">Rare
  </td>
  </tr>
  <tr>
  <td data-row="row-xcku2a">Emerald Bluefish
  </td>
  <td data-row="row-xcku2a">Deep Waters
  </td>
  <td data-row="row-xcku2a">Rare
  </td>
  </tr>
  <tr>
  <td data-row="row-k904ko">Red Snapper
  </td>
  <td data-row="row-k904ko">Deep Waters
  </td>
  <td data-row="row-k904ko">Rare
  </td>
  </tr>
  <tr>
  <td data-row="row-wivf57">Giant Mackerel
  </td>
  <td data-row="row-wivf57">Deep Waters
  </td>
  <td data-row="row-wivf57">Epic
  </td>
  </tr>
  <tr>
  <td data-row="row-i2nwg7">Large Barracuda
  </td>
  <td data-row="row-i2nwg7">Deep Waters
  </td>
  <td data-row="row-i2nwg7">Epic
  </td>
  </tr>
  </tbody>
  </table>
  <p>The Early Access Bug: Currently, there is a recognized bug in the build. If you stand on the starting beach (Shallows), then you can still randomly pull up Deep Water Epics like the Giant Mackerel. Exploit this oversight to finish your collection quickly before it gets patched, saving you from having to sail your ship into the open ocean just to fish.
  </p>
  <h2>The Windrose Fishing Ring Paradox
  </h2>
  <p>Once you catch all 10 fish at least once, the Collection UI will award you the Fisherman's Ring. Equipping this ring grants a 15% base chance to catch an extra fish per cast. You can even upgrade it at the Jeweler's Bench to the Major Fisherman's Ring for a 30% chance.
  </p>
  <p>The Hardcore Reality: This ring is a completionist trap. The RNG required to catch all 10 distinct fish means you will pull up hundreds of duplicates along the way. By the time the game finally hands you this ring, you will have processed so many Fish Fillets that you won't need to fish again for the rest of your playthrough. Only wear this if you are feeding a 4-player dedicated server.
  </p>
  <p><img src="/images/guides/guide11-02.webp" alt="windrose-fishing-guide-fishermans-ring" width="80%">
  </p>
  <h2>Advanced Processing: Beyond the Skewer
  </h2>
  <p>In our basic windrose fishing guide, we covered the Seafood Platter. But once you start processing Rare and Epic fish, you'll be swimming in Fillets. Here is how you should categorize your cooking based on the stats you need:
  </p>
  <ol>
  <li>Need Agility? Craft Chowder (Rare): 3x Fish Fillet, 3x Sweet Potato, 2x Salt = +10 Agility.
  </li>
  <li>Need raw Tankiness? Craft Fish and Tostones (Rare): 3x Fish Fillet, 3x Banana, 2x Nuts = +10 Vitality.
  </li>
  <li>Boss Fight Prep: Seafood Platter (Epic): 7x Fish Fillet, 4x Lime, 3x Crab Meat, 4x Salt = +20 Vitality.
  </li>
  </ol>
  <p>Pro Tip: Running out of Salt for Chowder? Don't grind crates. Sail to the Brethren of the Coast Provisioner; you can just buy Salt in bulk for a mere 2 Piastre per piece.
  </p>
  <h3>FAQ: Advanced Fish &amp; Weapons
  </h3>
  <p>Q: Can the Smasher weapon roll with different stats or Epic effects?
  </p>
  <p> A: No. The Smasher is a fixed-stat Rare drop. Because it explicitly "cannot be ascended" at the crafting bench, what you pull out of the water is exactly what you get permanently. It is a novelty item, not a late-game carry.
  </p>
  <p>Q: I've caught 9/10 fish but the Large Barracuda won't drop in the shallows anymore. Was it patched?
  </p>
  <p> A: While the bug allows deep fish to spawn in shallows, the drop rate for Epics in the wrong biome is abysmally low. If you are stuck on the last Epic fish, stop relying on the bug. Take your ship into the Deep Ocean and cast there to force the correct loot table.
  </p>
  <p>Q: Do larger fish take longer to reel in?
  </p>
  <p> A: No. Windrose does not use a tension or stamina mini-game for reeling. Whether you hook an Uncommon Blue Tang or the Secret Smasher weapon, the mechanic is identical: wait for the flat splash, click once, and instantly loot it.
  </p>`,
  },

  {
    id: 12,
    title: "Windrose Secret Weapon Guide: How to Get the Smasher",
    description: "Hardcore deep dive into the Windrose secret weapon, Smasher. Learn the agonizing fishing RNG required to obtain it, the Weaponsmith crafting costs, and the truth about its A-Tier Strength scaling but terrible proc rates.",
    tags: ["Windrose Secret Weapon","windorse fish weapon"],
    publishDate: "2026-04-30",
    imageUrl: "/images/guides/guide12.webp",
    imageAlt: "windrose-how-to-get-smasher-secret-weapon-crafting",
    seo: {
      title: "Windrose Secret Weapon Guide: How to Get the Smasher",
      description: "Looking for the secret fish sword in Windrose? Learn how to get the Smasher via fishing, its actual combat stats, the massive knockback effect, and why it's a D-Tier meme weapon.",
      keywords: "windrose smasher, windrose secret weapon, how to get smasher windrose"
    },
    addressBar: "smasher-secret-weapon",
    detailsHtml: `
  <p>Forget the Reddit rumors of an overpowered "Fish Sword" or a massive two-handed club that will carry you through the endgame. The secret aquatic weapon in Windrose is called "Smasher," and mechanically, it is a 1-Handed Mace. You obtain it through sheer, agonizing fishing RNG. While it boasts an A-Tier Strength scaling and can be upgraded to Level 15 at your Weaponsmith Workshop, it is permanently locked at Rare quality. Competitively, it is absolute garbage (firmly sitting in D-Tier for pure DPS). However, you don't farm this for damage. You farm it because its unique passive gives you a chance to send enemies hurtling backward through space and time, making it the ultimate meme weapon for knocking pirates off their ships.
  </p>
  <h2>How To Get Smasher: The Brutal RNG
  </h2>
  <p>There is no secret boss, no hidden puzzle, and no dedicated questline. Smasher is obtained exclusively by fishing.
  </p>
  <p>If you are looking for an optimized farming location, then stop stressing. Hardcore testing confirms that water depth does not matter. While some players pull it from the deep High Seas, others have caught it in the shallow waters right outside their coastal base. The drop rate is exceptionally low. Expect to loot over 500 generic fish before you see this item.
  </p>
  <p>The Ultimate Farming Bypass: Do not attempt to actively farm this with a basic rod. If you want to preserve your sanity, then you must first complete the 10-fish collection challenge to obtain and ascend the Major Fisherman's Ring. That massive +30% chance to catch an extra fish applies to the loot table rolls, significantly cutting down the time it takes to brute-force the Smasher drop.
  </p>
  <p><img src="/images/guides/guide12-01.webp" alt="windrose-how-to-get-smasher-secret-weapon-stats" width="80%">
  </p>
  <h2>Crafting &amp; Stat Breakdown
  </h2>
  <p>Getting the Smasher from the water is only step one. It doesn't instantly become a god-tier weapon in your hands. You must treat it like any other weapon schematic.
  </p>
  <p>Take it to your Weaponsmith Workshop. It is crafted and upgraded using standard mid-to-late game materials.
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-ghwby1">Weapon Attribute
  </td>
  <td data-row="row-ghwby1">Confirmed Data
  </td>
  </tr>
  <tr>
  <td data-row="row-9cyj3q">Weapon Class
  </td>
  <td data-row="row-9cyj3q">1-Handed Mace
  </td>
  </tr>
  <tr>
  <td data-row="row-vor4gf">Max Upgrade Level
  </td>
  <td data-row="row-vor4gf">Level 15
  </td>
  </tr>
  <tr>
  <td data-row="row-ujpk4r">Ascension Limit
  </td>
  <td data-row="row-ujpk4r">Cannot be ascended to Epic (Locked at Rare)
  </td>
  </tr>
  <tr>
  <td data-row="row-t1ngtv">Stat Scaling
  </td>
  <td data-row="row-t1ngtv">A-Tier in Strength
  </td>
  </tr>
  <tr>
  <td data-row="row-0sjm4y">Base Output (Upgraded)
  </td>
  <td data-row="row-0sjm4y">225 Crude Damage
  </td>
  </tr>
  <tr>
  <td data-row="row-5cf31u">Crafting Materials Required
  </td>
  <td data-row="row-5cf31u">Ingots, Smithing Flux, etc. (Standard Weaponsmith costs)
  </td>
  </tr>
  </tbody>
  </table>
  <p><img src="/images/guides/guide12-02.webp" alt="windrose-how-to-get-smasher-secret-weapon-crafting" width="80%">
  </p>
  <h2>Combat Viability: The "Fish Ro Dah" Effect
  </h2>
  <p>Let's rip the band-aid off: How good is Smasher in Windrose? It is awful.
  </p>
  <p>Because it is hard-locked at Rare quality, its base damage simply cannot compete with Epic weapons. Furthermore, its unique ability reads: "Hits have a small chance to knock enemies down, the higher your Strength, the higher the chance."
  </p>
  <p>The 60 Strength Reality Check: Our testers pushed their character to an aggressive 60 Strength purely to test this weapon's scaling. The result? The knockback effect only procs roughly 1 in every 5 or 6 hits. For a slow 1-Handed Mace, relying on a 15-20% chance to CC an enemy during a lethal Cursed Swamp fight is a guaranteed way to get yourself killed.
  </p>
  <p>So why use it?
  </p>
  <p> For the sheer disrespect. When the ability actually procs, the visual effect is spectacular. It temporarily staggers enemies and launches them backward. Because the game engine recognizes it as a Mace, it naturally deals excellent Posture damage to shields. Using it to violently bat Plague Thralls off narrow cliffs or launching rival pirates into the ocean during a boarding sequence is undeniably the most fun you will have in the game.
  </p>
  <p><img src="/images/guides/guide12-03.webp" alt="windrose-how-to-get-smasher-secret-weapon-knockback" width="80%">
  </p>
  <h3>FAQ: Smasher Truths
  </h3>
  <p>Q: Is there any hidden material to upgrade the Smasher to Epic tier?
  </p>
  <p> A: No. The game code explicitly locks this weapon at Rare. Do not waste time searching for a secret "Legendary Fish Scale" to ascend it. What you see is what you get.
  </p>
  <p>Q: Does my Fishing level or the type of Fishing Rod affect the drop rate?
  </p>
  <p> A: Currently, rod tiers only dictate what type of fish you can reliably catch without snapping lines, but the global loot pool trigger for the Smasher seems entirely RNG-based. Your only real mathematical advantage is equipping the Major Fisherman's Ring.
  </p>
  <p>Q: Does the Smasher deal Water/Magic damage?
  </p>
  <p> A: No. Despite being a giant fish, it deals purely physical 225 Crude damage. It acts exactly like an iron club wrapped in scales.
  </p>`,
  },

  {
    id: 13,
    title: "Windrose Ships Guide: Unlocks, Frigate Materials & Best Variants",
    description: "Comprehensive SEO guide on all windrose ships. Learn the exact windrose brig materials and windrose frigate materials required. Discover why the Blackbeard Frigate with 36lb cannons dominates the Brethren HP trap, and how to get a 100% material refund on ship disassembly.",
    tags: ["Windrose All Ships"],
    publishDate: "2026-04-30",
    imageUrl: "/images/guides/guide13.webp",
    imageAlt: "windrose-all-ships-and-how-to-unlock-them",
    seo: {
      title: "Windrose Ships Guide: Unlocks, Frigate Materials & Best Variants",
      description: "Hardcore Windrose ships guide. Stop building the wrong ships. Learn how to unlock the Brig and Frigate, the exact materials required, and why the Blackbeard variants are the absolute meta.",
      keywords: "windrose ships,windrose brig, windrose frigate, windrose brig materials, windrose frigate materials"
    },
    addressBar: "windrose-all-ships-and-how-to-unlock-them",
    detailsHtml: `
  <p>If you are hoarding resources because you are afraid of building the "wrong" ship in Windrose, stop worrying. A core mechanic that the game poorly explains is that disassembling a ship refunds 100% of your materials. This means you should always upgrade the moment you can. However, picking the right variant is a matter of life and death. Do NOT fall into the trap of building the "Brethren" ships just because they have the highest Health pools. In advanced naval combat, speed and heavy artillery win out. You want to rush the Blackbeard Brig and eventually the Blackbeard Frigate, as it is currently the only ship in the game capable of mounting devastating 36lb cannons. Be prepared: the progression is heavily gated by Piastre costs and your Faction Reputation.
  </p>
  <h2>Early Game: The Boat &amp; The Ketch
  </h2>
  <p>Before we dive into the massive warships, we need to establish the baseline. You get the basic sailboat automatically.
  </p>
  <p>The "Recall Exploit" (If-Then Logic): If your main warship is destroyed or you just need to fast travel via recall, then ALWAYS recall the basic Boat instead of your massive Brig. The tiny Boat physically spawns much closer to the shore, saving you an agonizing swim.
  </p>
  <p>Your first real crafted vessel is the Ketch (Unlocked via the 'Need A Bigger Boat' quest). There are three variants, but at this stage of the game, do not waste extra resources min-maxing. Build the Stock Ketch (50,000 HP, 19kn). It perfectly balances health and speed to clear the Coastal Jungle zones. The Blackbeard Ketch is fast, but 35,000 HP is too squishy for beginners learning naval combat.
  </p>
  <p><img src="/images/guides/guide13-01.webp" alt="windrose-all-ships-and-how-to-unlock-them-brig" width="80%">
  </p>
  <h2>Windrose Brig: The Mid-Game Power Spike
  </h2>
  <p>This is where the training wheels come off. The Windrose Brig (Brigantine) represents a massive leap in firepower, doubling your broadside capacity.
  </p>
  <p>The Unlock Wall: You cannot simply farm materials and build this. You MUST raise your Reputation Level to 2 with the Brethren Of The Coast Faction. Only then will the Provisioner sell you the blueprints for a hefty 1,000 Piastre.
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-qtjs1l">Windrose Brig Variant
  </td>
  <td data-row="row-qtjs1l">Health Pool
  </td>
  <td data-row="row-qtjs1l">Speed
  </td>
  <td data-row="row-qtjs1l">Cannon Loadout
  </td>
  </tr>
  <tr>
  <td data-row="row-kx377i">Stock Brig
  </td>
  <td data-row="row-kx377i">70,000
  </td>
  <td data-row="row-kx377i">20kn
  </td>
  <td data-row="row-kx377i">6 x 12lb
  </td>
  </tr>
  <tr>
  <td data-row="row-rqehdk">Brethren Brig
  </td>
  <td data-row="row-rqehdk">90,000
  </td>
  <td data-row="row-rqehdk">18kn
  </td>
  <td data-row="row-rqehdk">6 x 12lb
  </td>
  </tr>
  <tr>
  <td data-row="row-punk9l">Blackbeard Brig (Meta)
  </td>
  <td data-row="row-punk9l">50,000
  </td>
  <td data-row="row-punk9l">22kn
  </td>
  <td data-row="row-punk9l">6 x 12lb or 24lb
  </td>
  </tr>
  </tbody>
  </table>
  <p>The Meta Choice: Build the Blackbeard Brig. Yes, it has 40,000 less HP than the Brethren version. But it moves at a blistering 22kn and, critically, it allows you to mount 24lb cannons. Equipping 6x Perfectly Ordered 24-Pounders gives you the DPS to annihilate enemies before they can chew through your low health pool.
  </p>
  <h3>Windrose Brig Materials Breakdown
  </h3>
  <p>The sticker shock is real. Alongside the 1,000 Piastre blueprint cost, you must buy 30x Shipwright's Tools from the Provisioner (10 Piastre each = 300 Piastre). Total cash needed: 1,300 Piastre.
  </p>
  <ol>
  <li>200x Nails (Requires 40 Copper Ingots or 20 Iron Ingots)
  </li>
  <li>80x Copper Ingots (240 Copper Ore + 80 Charcoal)
  </li>
  <li>40x Timber (120 Hardwood)
  </li>
  <li>200x Wooden Planks (400 Wood)
  </li>
  <li>160x Fabric (40 Linen Fabric + 120 Coarse Fabric)
  </li>
  <li>40x Rope
  </li>
  </ol>
  <h2>Windrose Frigate: The Ultimate Glass Cannon Meta
  </h2>
  <p>The Windrose Frigate is the undisputed king of the Early Access build. To unlock it, you must grind your Brethren Faction Reputation to Level 4 and pay an absurd 3,000 Piastre for the blueprints.
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-l6ur2a">Windrose Frigate Variant
  </td>
  <td data-row="row-l6ur2a">Health Pool
  </td>
  <td data-row="row-l6ur2a">Speed
  </td>
  <td data-row="row-l6ur2a">Cannon Loadout
  </td>
  </tr>
  <tr>
  <td data-row="row-4achgl">Stock Frigate
  </td>
  <td data-row="row-4achgl">160,000
  </td>
  <td data-row="row-4achgl">18kn
  </td>
  <td data-row="row-4achgl">12 x 24lb + 6 x 12lb
  </td>
  </tr>
  <tr>
  <td data-row="row-zivwor">Brethren Frigate
  </td>
  <td data-row="row-zivwor">200,000
  </td>
  <td data-row="row-zivwor">16kn
  </td>
  <td data-row="row-zivwor">12 x 24lb + 6 x 12lb
  </td>
  </tr>
  <tr>
  <td data-row="row-er71jr">Blackbeard Frigate (Meta)
  </td>
  <td data-row="row-er71jr">110,000
  </td>
  <td data-row="row-er71jr">20kn
  </td>
  <td data-row="row-er71jr">12 x 24lb/36lb + 6 x 12lb/24lb
  </td>
  </tr>
  </tbody>
  </table>
  <p>The Glass Cannon Argument: 200k HP sounds amazing on paper, but the Brethren Frigate is an unmaneuverable brick. You absolutely must build the Blackbeard Frigate. Why? It is the ONLY ship in the game that can equip 36lb cannons. The stopping power of twelve 36-pounders is unmatched. You compensate for the lower 110k HP by combining the Hull Bracing: Keelhold gear with Naval Tactics III: Stretch The Supply, giving you uninterruptible +60% Repair Kit durations.
  </p>
  <p><img src="/images/guides/guide13-02.webp" alt="windrose-all-ships-and-how-to-unlock-them-frigate" width="80%">
  </p>
  <h3>Windrose Frigate Materials (The Heavy Grind)
  </h3>
  <p>You need an extra 50x Shipwright's Tools (500 Piastre) on top of the 3,000 Piastre blueprint. This is an industrial-level grind:
  </p>
  <ol>
  <li>300x Nails
  </li>
  <li>120x Foothills Iron Ingots (Requires 360 Iron Ore)
  </li>
  <li>320x Wooden Planks
  </li>
  <li>160x Timber (480 Hardwood)
  </li>
  <li>80x Tarred Planks (80 Planks + 80 Tar)
  </li>
  <li>240x Linen Fabric (720 Flax Fiber)
  </li>
  <li>80x Tarred Fabric (80 Linen + 80 Tar)
  </li>
  <li>80x Rope
  </li>
  </ol>
  <p>The Ultimate Farming Bypass: If you are losing your mind farming 480 Hardwood and 720 Flax Fiber manually, then stop swinging your axe. Once you defeat the boss "Israel Hands" in the Foothills, you unlock Merchant Contracts. Use these contracts to passively farm Hardwood and Flax, saving yourself dozens of hours.
  </p>
  <h3>FAQ: Ship Unlocks &amp; Costs
  </h3>
  <p>Q: If I disassemble my Brig to build the Frigate, do I lose the Shipwright's Tools?
  </p>
  <p> A: No. Disassembling a ship refunds 100% of the materials used in its construction, including the expensive Piastre-bought Shipwright's Tools. You will not be penalized for stepping up through the ship tiers.
  </p>
  <p>Q: Can I put 36lb cannons on the Stock or Brethren Frigate?
  </p>
  <p> A: Absolutely not. This is why the Blackbeard variant is highly recommended. The Stock and Brethren Frigates are hard-capped at 24lb cannons for their main batteries. If you want max DPS, Blackbeard is the only option.
  </p>
  <p>Q: Where do I get Tar for the Tarred Planks and Fabric?
  </p>
  <p> A: Tar is an advanced resource primarily obtained by processing Quagmire Powder and other materials from the Cursed Swamps biome. You will need to heavily farm the Swamp Crypts to supply a Frigate build.
  </p>`,
  },

  {
    id: 14,
    title: "Windrose Wharf Guide: Equipping Cannons & Ship Building",
    description: "Hardcore Windrose base building guide. Learn the exact main quests required to unlock the Wharf, its cheap construction costs, and the critical difference between equipping cannons here versus upgrading them at the Shipwright's Workshop",
    tags: ["Windrose Wharf"],
    publishDate: "2026-04-30",
    imageUrl: "/images/guides/guide14.webp",
    imageAlt: "windrose-wharf-how-to-build-it-and-what-it-does-ship-building-menu",
    seo: {
      title: "Windrose Wharf Guide: How to Build & Add Cannons",
      description: "Stop sailing to Tortuga to find a shipwright. Learn how to unlock and build the Wharf in Windrose, how to add cannons to your ship, and how to customize sails",
      keywords: "windrose wharf,"
    },
    addressBar: "windrose-wharf-equipping-cannons-ship-building",
    detailsHtml: `
  <p>If you just built your first Ketch, received a quest to sink three enemy ships, and are currently sailing to Tortuga hoping to find an NPC to install your cannons—turn around immediately. You are wasting your time. In Windrose, you do not visit an NPC shipyard to arm your vessel. The Wharf is a player-constructed utility building that you must place on the coastline of your own base. You cannot build it until you push the main storyline past the "I Need A Bigger Boat" quest. Once placed, this single table becomes your absolute hub for dragging and dropping cannons onto your ship, customizing sails, and eventually spending Piastre to construct massive Frigates. Just remember the golden rule: The Wharf is for EQUIPPING gear; you cannot upgrade the stats of your cannons here.
  </p>
  <h2>How to Unlock &amp; Build the Wharf
  </h2>
  <p>Many new players open their Build menu (B), check the Utilities tab next to the Fast Travel Bell, and see absolutely nothing. This is because the Wharf schematic is hard-locked behind the early-game progression.
  </p>
  <p>The Quest Prerequisites: You must complete the following Main Quests before the game trusts you with naval infrastructure:
  </p>
  <ol>
  <li>Rescuing The Crew
  </li>
  <li>I Need A Bigger Boat
  </li>
  <li>How My Sea Adventure Began (Specifically, you must progress this until you are explicitly tasked to "Craft 12-pounder cannons for your ship").
  </li>
  </ol>
  <p>Once unlocked, the construction is laughably cheap, but placement is strict. Like the Fast Travel Bell, it must be built along the coastline, near the water. You cannot build this in the middle of a forest base.
  </p>
  <p>Cost: 10x Wood, 10x Coarse Fabric.
  </p>
  <p><img src="/images/guides/guide14-01.webp" alt="windrose-wharf-how-to-build-it-and-what-it-does-ship-building-customization" width="80%">
  </p>
  <h2>Equipping Cannons: The Drag-and-Drop Mechanic
  </h2>
  <p>This is where 90% of the confusion happens. Having 12-pounder cannons in your character's backpack does not magically make them appear on your ship's broadside.
  </p>
  <p>The "Equip vs. Upgrade" Reality Check:
  </p>
  <p> If you interact with the Wharf table (press E), then navigate to the "Ship Selection" menu. Hit 'Manage Ship'. This opens the Cargo and Gear UI. Here, you physically drag your Cannons, Hull Bracing, and Naval Tactics from your inventory into the 'Ship Gear' slots.
  </p>
  <p>However, if you want to make your 12lb cannons hit harder, the Wharf is useless. The Wharf only mounts the hardware. To actually upgrade the tier/damage of Ship Gear, you must take the items out of the ship and process them at a completely different base station: the Shipwright's Workshop.
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-u5vq7i">Base Station
  </td>
  <td data-row="row-u5vq7i">Core Naval Function
  </td>
  </tr>
  <tr>
  <td data-row="row-7xg1c3">The Wharf
  </td>
  <td data-row="row-7xg1c3">Equip/Unequip Cannons &amp; Hull Gear, Customize Sails, Build New Ships.
  </td>
  </tr>
  <tr>
  <td data-row="row-lmo71u">Shipwright's Workshop
  </td>
  <td data-row="row-lmo71u">Craft Cannons/Hull Bracing from raw materials, Upgrade Gear Tiers.
  </td>
  </tr>
  </tbody>
  </table>
  <p><img src="/images/guides/guide14-02.webp" alt="windrose-wharf-how-to-build-it-and-what-it-does-ship-management" width="80%">
  </p>
  <h2>Customization &amp; The Shipyard
  </h2>
  <p>The Wharf isn't just for guns. It contains two other vital tabs for your fleet progression:
  </p>
  <ol>
  <li>Customization (Cosmetics): Located near the 'Cargo and Gear' tab. This is where you flex your pirate identity. You can change your ship's sails, flags, and alter the vessel's name.
  </li>
  <li>Shipyard (Progression): This is the second main menu at the Wharf. As you grind Reputation with the four main Factions (like the Brethren Of The Coast), this tab is where you will physically spend your Piastre and massive piles of resources to construct Brigs and Frigates. (Check our comprehensive Windrose Ships Guide for exact Frigate material costs).
  </li>
  </ol>
  <p><img src="/images/guides/guide14-03.webp" alt="windrose-wharf-how-to-build-it-and-what-it-does-ship-building-shipbuilding" width="80%">
  </p>
  <h3>FAQ: Wharf Troubleshooting
  </h3>
  <p>Q: I built the Wharf, but it says my ship is "Out of Range" to manage. Why?
  </p>
  <p> A: You can only manage the gear of ships that are physically docked near the Wharf's radius. If you parked your ship on the other side of the island, you must sail it back or use the Recall function (at the Fast Travel Bell or Wharf) to summon it to your current location before the 'Manage Ship' button will activate.
  </p>
  <p>Q: Can I build multiple Wharfs on different islands?
  </p>
  <p> A: Yes. Because the crafting cost is incredibly cheap (10 Wood, 10 Coarse Fabric), it is highly recommended to drop a Wharf at any major outpost you construct across the map. This prevents you from having to sail all the way back to your starter base just to swap out a broken cannon.
  </p>
  <p>Q: I bought a ship blueprint, but it's not showing up in the Shipyard tab.
  </p>
  <p> A: Check your inventory. When you buy blueprints from a Faction Provisioner, they usually exist as a consumable item in your bag. You must right-click to "learn" or "read" the schematic first before the Shipyard UI registers that you have unlocked the vessel.
  </p>`,
  },

  {
    id: 15,
    title: "Windrose Best Base Location: Where to Build & Fast Travel Strategy",
    iframeUrl: "",
    description: "Hardcore base building guide for Windrose. Learn why you shouldn't build massive stone castles on the starter island, how to exploit Faction hubs to save your 10 fast travel bell limits, and the importance of flat terrain and biome borders.",
    tags: ["Windrose Best Base Location"],
    publishDate: "2026-04-30",
    imageUrl: "/images/guides/guide15.webp",
    imageAlt: "windrose best base location",
    seo: {
      title: "Windrose Best Base Location: Where to Build & Fast Travel Strategy",
      description: "Stop looking for map coordinates. Windrose is procedurally generated. Learn the hardcore strategy for choosing the best base location by saving fast travel bells and exploiting biome borders.",
      keywords: "Windrose Best Base Location,Windrose Fast Travel"
    },
    addressBar: "windrose-best-base-location",
    detailsHtml: `
  <p>If you are searching Reddit or YouTube for exact map coordinates to build your ultimate base, stop right now. Windrose features a procedurally generated map; no two worlds are identical, and "centralized islands" do not exist. Furthermore, do not build a massive, permanent fortress on the first beach you wash up on. You will unlock significantly better building materials (like Hewn Stone) later, and trying to remodel a thatched-roof starter shack is a nightmare. Instead of looking for pretty scenery, hardcore players choose their main base location based on strict functional criteria: flat coastal terrain to avoid roofing bugs, proximity to heavy metal nodes (Copper and Iron), and strategic exploitation of the 10-Fast-Travel-Bell limit by nesting near Faction Hubs.
  </p>
  <p><img src="/images/guides/guide15-01.webp" alt="windrose best base location map" width="50%">
  </p>
  <h2>The Fast Travel Bell Economy (Saving Slots)
  </h2>
  <p>The single biggest mistake new players make is ignoring the Fast Travel limit. You are only allowed to place exactly 10 Fast Travel Bells across the entire map. In the late game, when you need bells at specific swamps and deep-ocean fishing spots, this 10-slot limit is suffocating.
  </p>
  <p>The "Faction Hub" Exploit:
  </p>
  <p> If you build your main base deep in the wilderness, then you are forced to waste 1 of your precious 10 bells just to travel home. 
  </p>
  <p> The Solution: Major POIs (Points of Interest) like the Buccaneer's Camp or the People of Tortuga HQ feature integral, pre-placed fast travel points (often indicated by a cookpot over a fire). Build your main base on the outskirts of these Faction Hubs. You can use the game's built-in teleport to travel to the Faction Hub, and simply walk 30 seconds to your front door. You just saved a Fast Travel Bell.
  </p>
  <h2>The Ideal Location Checklist
  </h2>
  <p>Because the map is randomized, you must sail around and physically scout for an island that ticks these three hardcore criteria:
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-53dss2">Location Criteria
  </td>
  <td data-row="row-53dss2">Why It's Mandatory
  </td>
  </tr>
  <tr>
  <td data-row="row-9fy8mq">1. Flat Coastal Terrain
  </td>
  <td data-row="row-9fy8mq">Windrose's building system struggles with uneven ground. If you build on a slope, laying foundations and snapping roofs will bug out, driving you insane. You also need a gentle beach slope to easily dock ships and place the Wharf.
  </td>
  </tr>
  <tr>
  <td data-row="row-8qb7bc">2. The "Two-fer" Biome Border
  </td>
  <td data-row="row-8qb7bc">Look for an island that sits on the border of the Coastal Jungle and the Foothills. Your goal is to have walking access to both Copper veins (Jungle) and Iron/Hardwood nodes (Foothills). Ores respawn, so having both nearby eliminates the need for annoying mining outposts.
  </td>
  </tr>
  <tr>
  <td data-row="row-2153wc">3. High Tree Density
  </td>
  <td data-row="row-2153wc">You will burn through thousands of wood planks just building basic walls and fueling smelters. Settle on an island choked with palm trees so you can farm 500 wood within minutes of your front door.
  </td>
  </tr>
  </tbody>
  </table>
  <p><img src="/images/guides/guide15-02.webp" alt="windrose best base location 2" width="50%">
  </p>
  <h2>The Starter Island Trap
  </h2>
  <p>Almost everyone builds their first shack right where they wash up. That is fine for survival, but do not upgrade it to stone.
  </p>
  <p>The starter islands only contain a fraction of the tier-1 biome resources. Furthermore, the game is in Early Access, meaning major updates could wipe or alter terrain. Build a minimal wooden structure, place a few storage chests, craft your first Ketch, and immediately set sail to find a proper "Two-fer" island (Jungle/Foothill border) for your permanent stone fortress.
  </p>
  <p>The Ship Recall Mechanic: Don't worry about stranding your massive warship if you teleport. If you fast travel home without your ship, then you can simply interact with your Fast Travel Bell or Wharf and summon your boat directly to your location (as long as you are near water).
  </p>
  <h3>FAQ: Base Building Realities
  </h3>
  <p>Q: I built on a hill and now my roof tiles won't snap together. How do I fix it?
  </p>
  <p> A: You can't easily. The structural integrity system demands flat foundations. You either have to manually level the ground (which is tedious) or, more practically, tear it down and move to a flat sandy beach. Always prioritize flat land over a "cool view."
  </p>
  <p>Q: I reached my 10 Fast Travel limit. Do I have to permanently delete one to explore?
  </p>
  <p> A: Yes, but there's a workaround. Hardcore explorers always keep 1 Bell active in their inventory. When they reach a new island, they drop the bell, throw down a chest, explore, and then pick the bell back up when leaving. Treat your 10th bell as a "mobile checkpoint" rather than a permanent fixture.
  </p>
  <p>Q: Can I build multiple bases across the map?
  </p>
  <p> A: Yes, there is no hard limit on structures. However, moving fully stocked chests of heavy ore between bases is a logistical nightmare. It is highly recommended to maintain ONE massive, centralized warehouse base, and just build tiny "tent + campfire" outposts in dangerous zones like the Cursed Swamps.
  </p>`,
  }

]
