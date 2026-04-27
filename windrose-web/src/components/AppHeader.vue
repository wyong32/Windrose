<template>
  <header class="site-header" role="banner">
    <div class="container header-inner">
      <RouterLink class="brand" to="/" aria-label="Windrose Compass home">
        <img
          class="brand-logo"
          src="/images/logo.png"
          width="36"
          height="36"
          alt=""
          loading="eager"
          decoding="async"
        />
        <span class="brand-title">Windrose Compass</span>
      </RouterLink>

      <button
        type="button"
        class="nav-toggle"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        aria-controls="site-nav"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">Toggle navigation</span>
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path
            v-if="!menuOpen"
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
          />
          <path v-else d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
        </svg>
      </button>

      <nav id="site-nav" class="site-nav" :class="{ 'is-open': menuOpen }" aria-label="Primary">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          class="nav-link"
          :to="item.to"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
    <div class="header-ink" aria-hidden="true" />
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { PRIMARY_NAV } from '@/data/siteNav.js'

const navItems = PRIMARY_NAV

const menuOpen = ref(false)
const route = useRoute()

function closeMenu() {
  menuOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* Leaflet 控件常用 400–600+，须高于地图层以免滚动时被盖住 */
  z-index: 8000;
  border-bottom: 1px solid rgba(160, 188, 210, 0.2);
  /* 不用 backdrop-filter：固定顶栏 + 模糊在滚动时会反复合成整页，极易卡顿 */
  background:
    linear-gradient(180deg, rgba(10, 14, 22, 0.98), rgba(8, 10, 16, 0.96)),
    repeating-linear-gradient(0deg, transparent 0, transparent 11px, rgba(160, 188, 210, 0.04) 11px, rgba(160, 188, 210, 0.04) 12px),
    repeating-linear-gradient(90deg, transparent 0, transparent 11px, rgba(160, 188, 210, 0.04) 11px, rgba(160, 188, 210, 0.04) 12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
}

.header-ink {
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-brass), var(--color-sea), transparent);
  opacity: 0.9;
}

.header-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 4.25rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--color-parchment);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}

.brand:hover {
  color: var(--color-brass);
}

.brand-logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid rgba(160, 188, 210, 0.22);
  background: rgba(8, 10, 16, 0.85);
}

.brand-title {
  font-family: var(--font-heading);
  font-size: 1.02rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1.2;
  white-space: nowrap;
}

.nav-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  border-radius: 0.25rem;
  border: 1px solid var(--color-border);
  background: rgba(8, 9, 12, 0.85);
  color: var(--color-parchment);
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}

.nav-toggle:hover {
  border-color: var(--color-blood);
}

.nav-toggle:focus-visible {
  outline: 2px solid var(--color-brass);
  outline-offset: 2px;
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem 0.65rem;
}

.nav-link {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: var(--color-text-muted);
  padding: 0.45rem 0.35rem;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-brass);
}

.nav-link.router-link-active {
  color: var(--color-parchment);
  border-color: var(--color-sea);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ≤1024：平板与手机共用抽屉导航（汉堡） */
@media (max-width: 1024px) {
  .nav-toggle {
    display: inline-flex;
  }

  .site-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 0.75rem 1.25rem 1rem;
    background: rgba(6, 7, 10, 0.98);
    border-bottom: 1px solid var(--color-border);
    display: none;
  }

  .site-nav.is-open {
    display: flex;
  }

  .nav-link {
    padding: 0.65rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .nav-link.router-link-active {
    border-color: rgba(255, 255, 255, 0.06);
    border-left: 3px solid var(--color-blood);
    padding-left: 0.5rem;
  }
}

@media (min-width: 1025px) {
  .nav-toggle {
    display: none;
  }
}

/* ≤768：窄屏顶栏与触控目标 */
@media (max-width: 768px) {
  .header-inner {
    min-height: 3.85rem;
    gap: 0.65rem;
  }

  .brand-title {
    font-size: 0.82rem;
    letter-spacing: 0.07em;
  }

  .nav-toggle {
    min-width: 2.75rem;
    min-height: 2.75rem;
    padding: 0.45rem;
  }

  .site-nav {
    padding: 0.65rem 1rem 0.9rem;
  }

  .nav-link {
    padding: 0.7rem 0;
    font-size: 0.8rem;
  }
}
</style>
