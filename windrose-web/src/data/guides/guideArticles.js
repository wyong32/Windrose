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
    isHome: true,
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
    imageUrl: "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777105662/cms-uploads/cms-1777105662173-881866006.webp",
    imageAlt: "Player opening an Ancient Chest in a Swamp Crypt Tablet House in Windrose, obtaining Quagmire Powder.",
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
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777105662/cms-uploads/cms-1777105662173-881866006.webp" alt="the Cursed Swamps map entrance and surrounding environment" width="50%">
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
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777105732/cms-uploads/cms-1777105732639-411539755.webp" alt="Ancient Chest in the swamp ruins to obtain powder" width="50%">
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
  </p>`,
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
    iframeUrl: "https://www.youtube.com/embed/sx-PC9mzRwk",
    description: "Stuck at 1/2 unique chests in Windrose? Learn how to locate the hidden second chest at the Traveler's Camp in the Coastal Jungle using the shovel digging mechanic.",
    tags: ["Windrose","Travelers Camp","Hidden Chest","Exploration Guide","Survival Game"],
    publishDate: "2026-04-25",
    imageUrl: "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777107374/cms-uploads/cms-1777107374896-953265952.webp",
    imageAlt: "A map screenshot showing the Windrose Traveler's Camp icon with 1/2 unique chests looted progress, indicating a hidden second chest.",
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
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777107374/cms-uploads/cms-1777107374896-953265952.webp" alt="Windrose  the Traveler's Camp map icon stuck at 02 progression" width="50%">
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
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777107405/cms-uploads/cms-1777107405083-362258592.webp" alt="Windrose  opening the Curios tab to view the Twist of Fancy note" width="50%">
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
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777107432/cms-uploads/cms-1777107432351-488767366.webp" alt="Windrose  the glowing  particles in the dirt right before the chest is unearthed" width="50%">
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
  </p>`,
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
    tags: ["Windrose","Hewn Stone","Crafting Guide","Unlock Schematic","Base Building"],
    publishDate: "2026-04-25",
    imageUrl: "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777110044/cms-uploads/cms-1777110044431-338918537.png",
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
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777110457/cms-uploads/cms-1777110457462-440608789.webp" alt="Windrose Ancient Debris Site map" width="50%">
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
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777110482/cms-uploads/cms-1777110482131-440120267.webp" alt="Windrose Ancient Debris Site 2" width="50%">
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
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777110512/cms-uploads/cms-1777110512647-745756596.webp" alt="Windrose Hewn Stone " width="50%">
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
  </p>`,
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
    tags: ["Windrose","Fishing Guide","Rod Crafting","Survival Game","Food Meta","Boss Strategy"],
    publishDate: "2026-04-25",
    imageUrl: "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777111580/cms-uploads/cms-1777111580649-334899069.webp",
    imageAlt: "A player character in Windrose standing on a boat, fishing in deep water with a successful 'Flat Splash' visual effect.",
    seo: {
      title: "Windrose Fishing Guide: Master Rod Crafting & Unlock +20 Vitality Food Meta",
      description: "Unravel the secrets of fishing in Windrose! This guide covers essential mid-game rod crafting, finding Divi-Divi hardwood, simple fishing mechanics, and the game-changing Seafood Platter for +20 Vitality to dominate boss fights.",
      keywords: "Windrose fishing, rod crafting, Divi-Divi hardwood, fishing guide, seafood platter, vitality food, boss meta, survival game tips"
    },
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
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777113932/cms-uploads/cms-1777113932162-175136626.webp" alt="windrose divdiv-divdiv tree" width="50%">
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
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777113903/cms-uploads/cms-1777113903294-236656430.webp" alt="windrose fishing rod" width="50%">
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
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777113849/cms-uploads/cms-1777113849216-563738810.webp" alt="windrose fish cooking" width="50%">
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
  </p>`,
  }



]
