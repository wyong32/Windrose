<template>
  <div class="wr-talent-planner" aria-label="Windrose talent builder">
    <header class="wr-talent-planner__bar">
      <div class="wr-talent-planner__points">
        <span class="wr-talent-planner__points-label">Talent points</span>
        <strong class="wr-talent-planner__points-value">{{ spentPoints }} / {{ maxTalentPoints }}</strong>
        <span v-if="spentPoints >= maxTalentPoints" class="wr-talent-planner__badge">Cap</span>
      </div>
      <div class="wr-talent-planner__level" aria-label="Hero level (sets talent point cap)">
        <label class="wr-talent-planner__level-label" for="wr-talent-level">Level</label>
        <input
          id="wr-talent-level"
          class="wr-talent-planner__level-range"
          type="range"
          :min="minCharacterLevel"
          max="50"
          step="1"
          :value="characterLevel"
          @input="onCharacterLevelInput"
        />
        <span class="wr-talent-planner__level-value" aria-live="polite">{{ characterLevel }}</span>
      </div>
      <div class="wr-talent-planner__actions">
        <button type="button" class="wr-talent-btn" @click="resetBuild">Reset</button>
        <button type="button" class="wr-talent-btn wr-talent-btn--primary" @click="copyShareLink">Copy link</button>
      </div>
      <p class="wr-talent-planner__hint">
        Left-click to add a rank, right-click or Shift-click to remove. Cap follows
        <a href="https://windrose.tools/talents" rel="noopener noreferrer" target="_blank">Windrose.tools</a>:
        <strong>max points = level − 1</strong> (levels 1–50; default 50 → 49 points). You cannot set level below
        <span class="wr-talent-planner__hint-mono">spent + 1</span> while a build is loaded.
      </p>
    </header>

    <div class="wr-talent-planner__body">
      <!-- 与 windrose.tools 一致：1200 逻辑单位 → %；背景图 scale(1.75)+cover；节点 7%×7% -->
      <div class="wr-talent-planner__frame" tabindex="0">
        <img
          class="wr-talent-planner__bg"
          :src="assets.backgroundPublicPath"
          alt=""
          width="1024"
          height="1024"
          decoding="async"
          fetchpriority="low"
        />
        <button
          v-for="node in tree.nodes"
          :key="node.id"
          type="button"
          class="wr-talent-node"
          :class="{
            'wr-talent-node--selected': selectedId === node.id,
            'wr-talent-node--locked': isLocked(node),
          }"
          :style="nodeStyle(node)"
          :aria-label="nodeLabel(node)"
          @click.prevent="onNodeClick(node, $event)"
          @contextmenu.prevent="onNodeRight(node, $event)"
        >
          <span
            class="wr-talent-node__slot"
            :style="{
              backgroundImage: `url(${slotImage(node)})`,
            }"
          />
          <img
            class="wr-talent-node__icon"
            :src="primaryPerk(node).iconPublicPath"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <img
            v-if="isLocked(node)"
            class="wr-talent-node__lock"
            :src="assets.lockIconPublicPath"
            width="20"
            height="20"
            alt=""
          />
          <span class="wr-talent-node__lvl">{{ levelOf(node) }}/{{ node.maxNodeLevel }}</span>
        </button>
      </div>

      <aside class="wr-talent-planner__aside" aria-live="polite">
        <template v-if="selectedNode">
          <h3 class="wr-talent-planner__aside-title">{{ branchName(selectedNode.branchTag) }}</h3>
          <div
            v-for="(perk, idx) in selectedPerkList"
            :key="perk.id"
            class="wr-talent-perk-block"
          >
            <div class="wr-talent-perk">
              <img class="wr-talent-perk__icon" :src="perk.iconPublicPath" width="48" height="48" alt="" />
              <div>
                <h4 class="wr-talent-perk__name">{{ perk.title }}</h4>
                <p class="wr-talent-perk__desc">{{ formatPerkDescription(perk, displayLevel(selectedNode)) }}</p>
              </div>
            </div>
            <div v-if="idx < selectedPerkList.length - 1" class="wr-talent-perk__sep" role="separator" />
          </div>
          <p class="wr-talent-planner__aside-meta">
            Node level <strong>{{ levelOf(selectedNode) }}</strong> · Cost per rank {{ selectedNode.pointCost }}
          </p>
        </template>
        <p v-else class="wr-talent-planner__aside-empty">Select a talent node on the tree to see descriptions and values.</p>
      </aside>

      <section class="wr-talent-planner__alloc" aria-labelledby="wr-talent-alloc-h">
        <h3 id="wr-talent-alloc-h" class="wr-talent-planner__alloc-title">Allocated talents</h3>
        <p v-if="spentPoints === 0" class="wr-talent-planner__alloc-empty">No points spent yet.</p>
        <ol v-else class="wr-talent-planner__alloc-list">
          <li
            v-for="(node, idx) in allocatedNodesSorted"
            :key="node.id"
            class="wr-talent-planner__alloc-item"
          >
            <span class="wr-talent-planner__alloc-idx" aria-hidden="true">{{ idx + 1 }}</span>
            <button
              type="button"
              class="wr-talent-planner__alloc-row"
              :class="{ 'wr-talent-planner__alloc-row--active': selectedId === node.id }"
              @click="selectNodeFromList(node)"
            >
              <img
                class="wr-talent-planner__alloc-icon"
                :src="primaryPerk(node).iconPublicPath"
                width="40"
                height="40"
                alt=""
              />
              <span class="wr-talent-planner__alloc-text">
                <span class="wr-talent-planner__alloc-branch">{{ branchName(node.branchTag) }}</span>
                <span class="wr-talent-planner__alloc-name">{{ primaryPerk(node).title }}</span>
              </span>
              <span class="wr-talent-planner__alloc-ranks">{{ levelOf(node) }}/{{ node.maxNodeLevel }}</span>
            </button>
          </li>
        </ol>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import talentTree from '@/data/talents/talentTree.json'
import { formatPerkDescription } from '@/utils/talentFormat.js'

/** 与 windrose.tools 一致：默认等级 50、可用天赋点 = clamp(等级,1..50) − 1 */
const DEFAULT_CHARACTER_LEVEL = 50

/**
 * windrose.tools 将 JSON position 映射到正方形容器内的百分比：
 * left = 50 + x/1200*100, top = 50 + y/1200*100（见站点打包脚本中的内联 style）。
 */
const POSITION_DIVISOR = 1200
/** 主天赋槽按钮宽高均为容器的 7%（与 windrose.tools 一致）。 */
const NODE_SIZE_PCT = 7

const tree = talentTree
const assets = tree.assets

const perkById = new Map(tree.perks.map((p) => [p.id, p]))

const route = useRoute()
const router = useRouter()

/** @type {Record<string, number>} */
const levels = reactive({})
const selectedId = ref(null)
const characterLevel = ref(DEFAULT_CHARACTER_LEVEL)

function clampCharacterLevel(n) {
  const x = Number(n)
  if (!Number.isFinite(x)) return DEFAULT_CHARACTER_LEVEL
  return Math.min(50, Math.max(1, Math.floor(x)))
}

const maxTalentPoints = computed(() => Math.max(0, clampCharacterLevel(characterLevel.value) - 1))

/** 已投入点数需要至少「spent+1」级才有足够点数槽位（与 windrose 滑条下限一致） */
const minCharacterLevel = computed(() =>
  spentPoints.value <= 0 ? 1 : Math.min(50, spentPoints.value + 1),
)

function onCharacterLevelInput(ev) {
  characterLevel.value = clampCharacterLevel(/** @type {HTMLInputElement} */ (ev.target).value)
  syncQuery()
}

function levelOf(node) {
  return levels[node.id] ?? 0
}

const spentPoints = computed(() => tree.nodes.reduce((s, n) => s + (levels[n.id] ?? 0), 0))

function branchSpent(branchTag) {
  return tree.nodes.filter((n) => n.branchTag === branchTag).reduce((s, n) => s + (levels[n.id] ?? 0), 0)
}

function requirementMet(node) {
  for (const r of node.requirements || []) {
    if (branchSpent(r.nodeTag) < r.requiredPoints) return false
  }
  return true
}

function isLocked(node) {
  return levelOf(node) === 0 && (node.requirements?.length ?? 0) > 0 && !requirementMet(node)
}

function canIncrease(node) {
  if (levelOf(node) >= node.maxNodeLevel) return false
  if (spentPoints.value >= maxTalentPoints.value) return false
  return requirementMet(node)
}

function canDecrease(node) {
  return levelOf(node) > 0
}

function slotImage(node) {
  const lv = levelOf(node)
  if (selectedId.value === node.id) return assets.slotSelectPublicPath
  if (lv > 0) return assets.slotLearnPublicPath
  if (isLocked(node)) return assets.slotNonLearnPublicPath
  return assets.slotDefaultPublicPath
}

function primaryPerk(node) {
  const id = node.perkIds[0]
  return perkById.get(id) ?? tree.perks[0]
}

function perksFor(node) {
  return node.perkIds.map((id) => perkById.get(id)).filter(Boolean)
}

function branchName(branchTag) {
  const b = tree.branches.find((x) => x.branchTag === branchTag)
  return b?.displayName ?? branchTag
}

const selectedNode = computed(() => tree.nodes.find((n) => n.id === selectedId.value) ?? null)

const selectedPerkList = computed(() => (selectedNode.value ? perksFor(selectedNode.value) : []))

/** 与 windrose.tools 相同：branch → tier → slot，只列 level > 0 的节点 */
function compareNodesByTreeOrder(a, b) {
  if (a.branchIndex !== b.branchIndex) return a.branchIndex - b.branchIndex
  if (a.tierIndex !== b.tierIndex) return a.tierIndex - b.tierIndex
  if (a.slotIndex !== b.slotIndex) return a.slotIndex - b.slotIndex
  return String(a.id).localeCompare(String(b.id))
}

const allocatedNodesSorted = computed(() => {
  const rows = tree.nodes.filter((n) => (levels[n.id] ?? 0) > 0)
  rows.sort(compareNodesByTreeOrder)
  return rows
})

function selectNodeFromList(node) {
  selectedId.value = node.id
}

function displayLevel(node) {
  const L = levelOf(node)
  return L > 0 ? L : 1
}

function nodeStyle(node) {
  const { x, y } = node.position
  const left = 50 + (x / POSITION_DIVISOR) * 100
  const top = 50 + (y / POSITION_DIVISOR) * 100
  return {
    left: `${left}%`,
    top: `${top}%`,
    width: `${NODE_SIZE_PCT}%`,
    height: `${NODE_SIZE_PCT}%`,
    transform: 'translate(-50%, -50%)',
  }
}

function nodeLabel(node) {
  const p = primaryPerk(node)
  return `${p.title}, rank ${levelOf(node)} of ${node.maxNodeLevel}`
}

function onNodeClick(node, ev) {
  selectedId.value = node.id
  if (ev.shiftKey) {
    if (canDecrease(node)) levels[node.id] = levelOf(node) - 1
    if (levels[node.id] === 0) delete levels[node.id]
    syncQuery()
    return
  }
  if (canIncrease(node)) {
    levels[node.id] = levelOf(node) + 1
    syncQuery()
  }
}

function onNodeRight(node) {
  selectedId.value = node.id
  if (canDecrease(node)) {
    levels[node.id] = levelOf(node) - 1
    if (levels[node.id] === 0) delete levels[node.id]
    syncQuery()
  }
}

function resetBuild() {
  for (const k of Object.keys(levels)) delete levels[k]
  selectedId.value = null
  characterLevel.value = DEFAULT_CHARACTER_LEVEL
  syncQuery()
}

function utf8ToB64(str) {
  const bytes = new TextEncoder().encode(str)
  let bin = ''
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i])
  return btoa(bin)
}

function b64ToUtf8(b64) {
  const bin = atob(b64)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return new TextDecoder().decode(bytes)
}

function encodeBuild() {
  const o = {}
  for (const n of tree.nodes) {
    const v = levels[n.id] ?? 0
    if (v > 0) o[n.id] = v
  }
  if (Object.keys(o).length === 0) return ''
  return utf8ToB64(JSON.stringify(o))
}

function decodeBuild(s) {
  if (!s || typeof s !== 'string') return
  try {
    const o = JSON.parse(b64ToUtf8(s))
    for (const k of Object.keys(levels)) delete levels[k]
    for (const [id, v] of Object.entries(o)) {
      if (typeof v === 'number' && v >= 0 && v <= 3) levels[id] = v
    }
  } catch {
    /* ignore */
  }
}

function parseLevelQuery(raw) {
  if (raw === undefined || raw === null || raw === '') return DEFAULT_CHARACTER_LEVEL
  const s = Array.isArray(raw) ? raw[0] : raw
  return clampCharacterLevel(s)
}

function syncQuery() {
  const t = encodeBuild()
  const lvl = clampCharacterLevel(characterLevel.value)
  const q = { ...route.query }
  if (t) q.talents = t
  else delete q.talents
  if (lvl === DEFAULT_CHARACTER_LEVEL) delete q.lvl
  else q.lvl = String(lvl)

  const prevT = typeof route.query.talents === 'string' ? route.query.talents : ''
  const prevLvl = parseLevelQuery(route.query.lvl)

  if (prevT === (t || '') && prevLvl === lvl) return
  router.replace({ path: route.path, query: q })
}

function adjustCharacterLevelToSpent() {
  const minL = minCharacterLevel.value
  if (characterLevel.value < minL) characterLevel.value = minL
}

async function copyShareLink() {
  const url = new URL(window.location.origin + route.path)
  for (const [k, v] of Object.entries(route.query)) {
    if (typeof v === 'string' && k !== 'talents' && k !== 'lvl') url.searchParams.set(k, v)
  }
  const t = encodeBuild()
  if (t) url.searchParams.set('talents', t)
  else url.searchParams.delete('talents')
  const lvl = clampCharacterLevel(characterLevel.value)
  if (lvl === DEFAULT_CHARACTER_LEVEL) url.searchParams.delete('lvl')
  else url.searchParams.set('lvl', String(lvl))
  try {
    await navigator.clipboard.writeText(url.toString())
  } catch {
    window.prompt('Copy build URL:', url.toString())
  }
}

watch(
  () => route.query.lvl,
  () => {
    characterLevel.value = parseLevelQuery(route.query.lvl)
    adjustCharacterLevelToSpent()
    syncQuery()
  },
  { immediate: true },
)

watch(
  () => (typeof route.query.talents === 'string' ? route.query.talents : ''),
  (tKey) => {
    if (tKey) decodeBuild(tKey)
    else if (route.query.talents === undefined || route.query.talents === null) {
      for (const k of Object.keys(levels)) delete levels[k]
    }
    adjustCharacterLevelToSpent()
    syncQuery()
  },
  { immediate: true },
)

watch(
  () => JSON.stringify(levels),
  () => {
    adjustCharacterLevelToSpent()
    syncQuery()
  },
)
</script>

<style scoped>
.wr-talent-planner {
  --wr-talent-bg: #0b0d11;
  --wr-talent-border: rgba(255, 255, 255, 0.08);
  --wr-talent-muted: rgba(226, 232, 240, 0.65);
  background: var(--wr-talent-bg);
  border: 1px solid var(--wr-talent-border);
  border-radius: 12px;
  overflow: hidden;
  color: #e8edf5;
}

.wr-talent-planner__bar {
  padding: 0.85rem 1rem 1rem;
  border-bottom: 1px solid var(--wr-talent-border);
  display: grid;
  gap: 0.65rem;
}

@media (min-width: 720px) {
  .wr-talent-planner__bar {
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
  }
}

.wr-talent-planner__level {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  min-width: 0;
}

.wr-talent-planner__level-label {
  flex: 0 0 auto;
  width: 2.75rem;
  font-size: 0.8rem;
  color: var(--wr-talent-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.wr-talent-planner__level-range {
  flex: 1 1 6rem;
  min-width: 5rem;
  max-width: 16rem;
  accent-color: #38bdf8;
}

.wr-talent-planner__level-value {
  flex: 0 0 auto;
  min-width: 1.35rem;
  font-size: 0.9rem;
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.wr-talent-planner__hint-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.88em;
}

.wr-talent-planner__points {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.wr-talent-planner__points-label {
  font-size: 0.8rem;
  color: var(--wr-talent-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.wr-talent-planner__points-value {
  font-size: 1.15rem;
  font-variant-numeric: tabular-nums;
}

.wr-talent-planner__badge {
  font-size: 0.7rem;
  padding: 0.12rem 0.45rem;
  border-radius: 999px;
  background: rgba(251, 191, 36, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.35);
}

.wr-talent-planner__actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.wr-talent-btn {
  font: inherit;
  font-size: 0.85rem;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  border: 1px solid var(--wr-talent-border);
  background: rgba(255, 255, 255, 0.04);
  color: #e8edf5;
  cursor: pointer;
}

.wr-talent-btn:hover {
  background: rgba(255, 255, 255, 0.08);
}

.wr-talent-btn--primary {
  border-color: rgba(56, 189, 248, 0.45);
  background: rgba(56, 189, 248, 0.12);
  color: #7dd3fc;
}

.wr-talent-planner__hint {
  grid-column: 1 / -1;
  margin: 0;
  font-size: 0.78rem;
  color: var(--wr-talent-muted);
  line-height: 1.45;
}

.wr-talent-planner__hint a {
  color: #7dd3fc;
}

.wr-talent-planner__body {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* 与 windrose.tools：正方形容器 + 背景图 scale(1.75) + cover，节点用 % 叠在上面 */
.wr-talent-planner__frame {
  position: relative;
  width: 100%;
  max-width: 1024px;
  margin-inline: auto;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  outline: none;
}

.wr-talent-planner__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  margin: 0;
  border: 0;
  border-radius: 0;
  display: block;
  object-fit: cover;
  object-position: center;
  transform: scale(1.75);
  transform-origin: center center;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

.wr-talent-node {
  position: absolute;
  z-index: 1;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  box-sizing: border-box;
}

.wr-talent-node__slot {
  position: absolute;
  inset: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
}

.wr-talent-node__icon {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 52%;
  height: auto;
  max-height: 58%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  object-fit: contain;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.65));
}

.wr-talent-node__lock {
  position: absolute;
  right: 4px;
  top: 4px;
  pointer-events: none;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.9));
}

.wr-talent-node__lvl {
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  font-size: 0.65rem;
  font-weight: 600;
  color: #f8fafc;
  text-shadow: 0 1px 2px #000;
  pointer-events: none;
}

.wr-talent-node--selected .wr-talent-node__lvl {
  color: #7dd3fc;
}

.wr-talent-planner__aside {
  border-top: 1px solid var(--wr-talent-border);
  padding: 1rem 1rem 1.15rem;
  background: rgba(0, 0, 0, 0.25);
  overflow: visible;
  color-scheme: dark;
}

.wr-talent-planner__aside-title {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  font-weight: 600;
}

.wr-talent-perk-block {
  margin-bottom: 0.25rem;
}

.wr-talent-perk {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 0.65rem;
}

.wr-talent-perk__sep {
  grid-column: 1 / -1;
  height: 1px;
  background: var(--wr-talent-border);
  margin: 0.25rem 0;
}

.wr-talent-perk__icon {
  border-radius: 8px;
  object-fit: contain;
}

.wr-talent-perk__name {
  margin: 0 0 0.35rem;
  font-size: 0.95rem;
}

.wr-talent-perk__desc {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--wr-talent-muted);
}

.wr-talent-planner__aside-meta {
  margin: 0.75rem 0 0;
  font-size: 0.78rem;
  color: var(--wr-talent-muted);
}

.wr-talent-planner__aside-empty {
  margin: 0;
  font-size: 0.85rem;
  color: var(--wr-talent-muted);
  line-height: 1.5;
}

.wr-talent-planner__alloc {
  border-top: 1px solid var(--wr-talent-border);
  padding: 0.9rem 1rem 1.1rem;
  background: rgba(0, 0, 0, 0.2);
}

.wr-talent-planner__alloc-title {
  margin: 0 0 0.65rem;
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #e8edf5;
}

.wr-talent-planner__alloc-empty {
  margin: 0;
  font-size: 0.82rem;
  color: var(--wr-talent-muted);
  line-height: 1.45;
}

.wr-talent-planner__alloc-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.wr-talent-planner__alloc-item {
  display: flex;
  align-items: stretch;
  gap: 0.45rem;
  margin: 0;
}

.wr-talent-planner__alloc-idx {
  flex: 0 0 1.35rem;
  font-size: 0.72rem;
  font-variant-numeric: tabular-nums;
  color: var(--wr-talent-muted);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 0.55rem;
}

.wr-talent-planner__alloc-row {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.35rem 0.5rem;
  border: 1px solid transparent;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    background 0.12s ease,
    border-color 0.12s ease;
}

.wr-talent-planner__alloc-row:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.06);
}

.wr-talent-planner__alloc-row--active {
  border-color: rgba(56, 189, 248, 0.45);
  background: rgba(56, 189, 248, 0.08);
}

.wr-talent-planner__alloc-icon {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: contain;
}

.wr-talent-planner__alloc-text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.wr-talent-planner__alloc-branch {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--wr-talent-muted);
}

.wr-talent-planner__alloc-name {
  font-size: 0.86rem;
  font-weight: 600;
  color: #f1f5f9;
  line-height: 1.25;
  word-break: break-word;
}

.wr-talent-planner__alloc-ranks {
  flex: 0 0 auto;
  font-size: 0.8rem;
  font-variant-numeric: tabular-nums;
  color: #94a3b8;
  padding-left: 0.25rem;
}
</style>
