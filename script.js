/* ═══════════════════════════════════════════════════
   ICTech.pk — script.js
   Features:
     • Product data & rendering
     • Category filter
     • Live search with dropdown + full-grid filtering
     • Mobile nav toggle
═══════════════════════════════════════════════════ */

// ─── Product Data ─────────────────────────────────
const PRODUCTS = [
  { name: "BNC Cable",                              price: 150,  stock: true,  icon: "./images/product1.jpg", cat: "connectors", wa: "BNC Cable, Price: 150 PKR" },
  { name: "Cleaver Fiber Optic",                    price: 5000, stock: false, icon: "./images/product2.jpg", cat: "fiber",       wa: "Cleaver Fiber Optic, Price: 5000 PKR" },
  { name: "USB Cable Printer",                      price: 300,  stock: true,  icon: "./images/product1.jpg", cat: "computer",    wa: "USB Cable Printer, Price: 300 PKR" },
  { name: "GM220-s China Router XPon",              price: 2300, stock: true,  icon: "./images/product2.jpg", cat: "networking",  wa: "GM220-s China Router XPon, Price: 2300 PKR" },
  { name: "MT Link Cat6 UTP Cable 1M",              price: 250,  stock: true,  icon: "./images/product1.jpg", cat: "networking",  wa: "MT Link Cat6 UTP Cable 1M, Price: 250 PKR" },
  { name: "MT-1704 Single Band XPon",               price: 4700, stock: false, icon: "./images/product2.jpg", cat: "networking",  wa: "MT-1704 Single Band XPon, Price: 4700 PKR" },
  { name: "DC Battery Charger 12V",                 price: 600,  stock: true,  icon: "./images/product1.jpg", cat: "electric",    wa: "DC Battery Charger 12V, Price: 600 PKR" },
  { name: "MT-1704 Dual Band XPon",                 price: 6800, stock: true,  icon: "./images/product2.jpg", cat: "networking",  wa: "MT-1704 Dual Band XPon, Price: 6800 PKR" },
  { name: "Fiber Optic Power Meter & VFL",          price: 7500, stock: true,  icon: "./images/product1.jpg", cat: "fiber",       wa: "Fiber Optic Power Meter & VFL, Price: 7500 PKR" },
  { name: "4-Core TOP Fiber Optic Cable (per m)",   price: 42,   stock: true,  icon: "./images/product2.jpg", cat: "fiber",       wa: "4-Core TOP Fiber Optic, Price: 42 PKR" },
  { name: "VGA Computer Cable",                     price: 500,  stock: true,  icon: "./images/product1.jpg", cat: "computer",    wa: "VGA Computer Cable, Price: 500 PKR" },
  { name: "SSD G Fire 128GB",                       price: 3500, stock: true,  icon: "./images/product2.jpg", cat: "computer",    wa: "SSD G Fire 128GB, Price: 3500 PKR" },
  { name: "SSD Micron 256GB",                       price: 5500, stock: true,  icon: "./images/product1.jpg", cat: "computer",    wa: "SSD Micron 256GB, Price: 5500 PKR" },
  { name: "DDR4 RAM 8GB",                           price: 4500, stock: true,  icon: "./images/product2.jpg", cat: "computer",    wa: "DDR4 RAM 8GB, Price: 4500 PKR" },
  { name: "DDR3 RAM 2GB",                           price: 1000, stock: true,  icon: "./images/product1.jpg", cat: "computer",    wa: "DDR3 RAM 2GB, Price: 1000 PKR" },
  { name: "Dahua Fixed DVR Camera",                 price: 3200, stock: true,  icon: "./images/product2.jpg", cat: "cameras",     wa: "Dahua Fixed DVR Camera, Price: 3200 PKR" },
  { name: "WiFi Camera HD 1080P",                   price: 4000, stock: true,  icon: "./images/product1.jpg", cat: "cameras",     wa: "WiFi Camera HD 1080P, Price: 4000 PKR" },
  { name: "PK-910H A4Tech HD WebCam",               price: 7000, stock: true,  icon: "./images/product2.jpg", cat: "cameras",     wa: "PK-910H A4Tech HD WebCam, Price: 7000 PKR" },
  { name: "K6 Wifi HD 1080P Waterproof Bullet Cam", price: 6500, stock: false, icon: "./images/product1.jpg", cat: "cameras",     wa: "K6 Wifi Bullet Camera, Price: 6500 PKR" },
  { name: "JBL Portable Wireless Speaker",          price: 900,  stock: true,  icon: "./images/product2.jpg", cat: "mobile",      wa: "JBL Portable Wireless Speaker, Price: 900 PKR" },
  { name: "Air Birds Pro Earbuds",                  price: 1500, stock: true,  icon: "./images/product1.jpg", cat: "mobile",      wa: "Air Birds Pro, Price: 1500 PKR" },
  { name: "C-Type Fast Charger",                    price: 650,  stock: true,  icon: "./images/product2.jpg", cat: "mobile",      wa: "C-Type Fast Charger, Price: 650 PKR" },
  { name: "iCtech Power Bank 9000mAh",              price: 1500, stock: true,  icon: "./images/product1.jpg", cat: "mobile",      wa: "iCtech Power Bank 9000mAh, Price: 1500 PKR" },
  { name: "Box Data Cable iPhone",                  price: 550,  stock: true,  icon: "./images/product2.jpg", cat: "mobile",      wa: "Box Data Cable iPhone, Price: 550 PKR" },
  { name: "Dream Android Box 8/128",                price: 6000, stock: true,  icon: "./images/product1.jpg", cat: "android",     wa: "Dream Android Box 8/128, Price: 6000 PKR" },
  { name: "X88 Plus Android Mini Box",              price: 3700, stock: true,  icon: "./images/product2.jpg", cat: "android",     wa: "X88 Plus Android Mini Box, Price: 3700 PKR" },
  { name: "X96Q PRO Android Box",                   price: 4200, stock: false, icon: "./images/product1.jpg", cat: "android",     wa: "X96Q PRO Android Box, Price: 4200 PKR" },
  { name: "HG8245w5 XPON Dual Band",                price: 5800, stock: true,  icon: "./images/product2.jpg", cat: "networking",  wa: "HG8245w5 XPON Dual Band, Price: 5800 PKR" },
  { name: "V-Sol Dual Band ONT V2802CWT XPon",      price: 7000, stock: true,  icon: "./images/product1.jpg", cat: "networking",  wa: "V-Sol Dual Band ONT V2802CWT, Price: 7000 PKR" },
  { name: "XPON 8546M Box Pack",                    price: 4000, stock: true,  icon: "./images/product2.jpg", cat: "networking",  wa: "XPON 8546M Box Pack, Price: 4000 PKR" },
  { name: "GM630 China Router XPon",                price: 3000, stock: true,  icon: "./images/product1.jpg", cat: "networking",  wa: "GM630 China Router XPon, Price: 3000 PKR" },
  { name: "S3 AC2100 Dual Band Router",             price: 2500, stock: true,  icon: "./images/product2.jpg", cat: "networking",  wa: "S3 AC2100 Dual Band Router, Price: 2500 PKR" },
  { name: "Fiber Optic Stripper HC-03",             price: 2100, stock: true,  icon: "./images/product1.jpg", cat: "fiber",       wa: "Fiber Optic Stripper HC-03, Price: 2100 PKR" },
  { name: "She.k Crimping Tool RJ45",               price: 1100, stock: true,  icon: "./images/product2.jpg", cat: "connectors",  wa: "She.k Crimping Tool RJ45, Price: 1100 PKR" },
  { name: "HnH Cable Tester",                       price: 800,  stock: true,  icon: "./images/product1.jpg", cat: "connectors",  wa: "HnH Cable Tester, Price: 800 PKR" },
  { name: "SC-UPC Adapter Coupler (Blue)",          price: 50,   stock: true,  icon: "./images/product2.jpg", cat: "connectors",  wa: "SC-UPC Adapter Coupler Blue, Price: 50 PKR" },
  { name: "SC-UPC Adapter Coupler (Green)",         price: 50,   stock: true,  icon: "./images/product1.jpg", cat: "connectors",  wa: "SC-UPC Adapter Coupler Green, Price: 50 PKR" },
  { name: "PLC Splitter 8-Way",                     price: 400,  stock: true,  icon: "./images/product2.jpg", cat: "fiber",       wa: "PLC Splitter 8 Way, Price: 400 PKR" },
  { name: "Box Blue 8-Way Splitter",                price: 900,  stock: true,  icon: "./images/product1.jpg", cat: "fiber",       wa: "Box Blue 8 Way Splitter, Price: 900 PKR" },
  { name: "Box Blue 4-Way Splitter",                price: 750,  stock: true,  icon: "./images/product2.jpg", cat: "fiber",       wa: "Box Blue 4 Way Splitter, Price: 750 PKR" },
  { name: "SFP Fiber Optical Transceiver 1.25G",    price: 2600, stock: true,  icon: "./images/product1.jpg", cat: "fiber",       wa: "SFP Fiber Optical Transceiver 1.25G, Price: 2600 PKR" },
  { name: "10G Ultranet SFP (20KM)",                price: 8000, stock: true,  icon: "./images/product2.jpg", cat: "fiber",       wa: "10G Ultranet SFP 20KM, Price: 8000 PKR" },
  { name: "Green SC Pigtail S/M",                   price: 150,  stock: true,  icon: "./images/product1.jpg", cat: "fiber",       wa: "Green SC Pigtail S/M, Price: 150 PKR" },
  { name: "HnH Cat6 Wire (per meter)",              price: 32,   stock: true,  icon: "./images/product2.jpg", cat: "networking",  wa: "HnH Cat6 Wire, Price: 32 PKR per meter" },
  { name: "Kingston 16GB USB",                      price: 1200, stock: true,  icon: "./images/product1.jpg", cat: "computer",    wa: "Kingston 16GB USB, Price: 1200 PKR" },
  { name: "Kingston 8GB USB",                       price: 800,  stock: true,  icon: "./images/product2.jpg", cat: "computer",    wa: "Kingston 8GB USB, Price: 800 PKR" },
  { name: "Wireless Mouse",                         price: 800,  stock: true,  icon: "./images/product1.jpg", cat: "computer",    wa: "Wireless Mouse, Price: 800 PKR" },
  { name: "Mouse Branded",                          price: 450,  stock: true,  icon: "./images/product2.jpg", cat: "computer",    wa: "Mouse Branded, Price: 450 PKR" },
  { name: "PC Keyboard",                            price: 900,  stock: true,  icon: "./images/product1.jpg", cat: "computer",    wa: "PC Keyboard, Price: 900 PKR" },
  { name: "USB Hub",                                price: 550,  stock: true,  icon: "./images/product2.jpg", cat: "computer",    wa: "USB Hub, Price: 550 PKR" },
  { name: "HDMI Cable / DP Video Cable",            price: 300,  stock: true,  icon: "./images/product1.jpg", cat: "computer",    wa: "HDMI Cable DP Video Cable, Price: 300 PKR" },
  { name: "Head Phones Computer",                   price: 1300, stock: true,  icon: "./images/product2.jpg", cat: "computer",    wa: "Head Phones Computer, Price: 1300 PKR" },
  { name: "Emergency Light DP-716",                 price: 1100, stock: true,  icon: "./images/product1.jpg", cat: "electric",    wa: "Emergency Light DP-716, Price: 1100 PKR" },
  { name: "DC-DC Buck Converter 12V",               price: 1000, stock: true,  icon: "./images/product2.jpg", cat: "electric",    wa: "DC-DC Buck Converter 12V, Price: 1000 PKR" },
  { name: "DC Smart Charger 9V/12V",                price: 400,  stock: true,  icon: "./images/product1.jpg", cat: "electric",    wa: "DC Smart Charger 9V 12V, Price: 400 PKR" },
  { name: "Balun Connector",                        price: 250,  stock: true,  icon: "./images/product2.jpg", cat: "connectors",  wa: "Balun Connector, Price: 250 PKR" },
  { name: "RJ45 Connector / Booted",                price: 20,   stock: true,  icon: "./images/product1.jpg", cat: "connectors",  wa: "RJ45 Connector, Price: 20 PKR" },
  { name: "Splice Protectors",                      price: 3,    stock: true,  icon: "./images/product2.jpg", cat: "fiber",       wa: "Splice Protectors, Price: 3 PKR each" },
  { name: "Android Box Remote",                     price: 400,  stock: true,  icon: "./images/product1.jpg", cat: "android",     wa: "Android Box Remote, Price: 400 PKR" },
  { name: "Software Repairing Service",             price: 500,  stock: true,  icon: "./images/product2.jpg", cat: "computer",    wa: "Software Repairing Service, Price: 500 PKR" },
  { name: "Cisco Console Cable USB",                price: 1500, stock: true,  icon: "./images/product1.jpg", cat: "networking",  wa: "Cisco Console Cable USB, Price: 1500 PKR" },
  { name: "Aux Cable",                              price: 350,  stock: true,  icon: "./images/product2.jpg", cat: "mobile",      wa: "Aux Cable, Price: 350 PKR" },
  { name: "BT Bluetooth Wireless Adapter",          price: 450,  stock: true,  icon: "./images/product1.jpg", cat: "mobile",      wa: "BT Bluetooth Wireless Adapter, Price: 450 PKR" },
    { name: "Aux Cable",                              price: 350,  stock: true,  icon: "./images/product2.jpg", cat: "mobile",      wa: "Aux Cable, Price: 350 PKR" },
  { name: "BT Bluetooth Wireless Adapter",          price: 450,  stock: true,  icon: "./images/product1.jpg", cat: "mobile",      wa: "BT Bluetooth Wireless Adapter, Price: 450 PKR" },
];


// ─── State ────────────────────────────────────────
let activeCat   = 'all';
let searchQuery = '';

const CAT_LABELS = {
  all: 'All Products', networking: 'Networking Products',
  fiber: 'Fiber Optic', cameras: 'CCTV & Cameras',
  mobile: 'Mobile Accessories', computer: 'Computer',
  electric: 'Electric / Solar', android: 'Android Box',
  connectors: 'Connectors & Tools'
};

// ─── Helpers ──────────────────────────────────────
function waUrl(product, inStock) {
  const msg = inStock
    ? 'I want to buy: ' + product.wa
    : 'I need this product when available: ' + product.wa;
  return 'https://wa.me/923170111244?text=' + encodeURIComponent(msg);
}

/** Highlight matching text with <mark> */
function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

/** Filter products by category AND search query */
function getFiltered() {
  let list = activeCat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q));
  }
  return list;
}

// ─── Render Product Grid ──────────────────────────
function renderProducts() {
  const grid     = document.getElementById('productsGrid');
  const titleEl  = document.getElementById('productsSectionTitle');
  const countEl  = document.getElementById('productsCount');
  const noRes    = document.getElementById('noResults');
  const activeBar = document.getElementById('searchActiveBar');
  const activeLabel = document.getElementById('searchActiveLabel');

  const filtered = getFiltered();

  // Section title
  titleEl.textContent = searchQuery
    ? `Search: "${searchQuery}"`
    : CAT_LABELS[activeCat] || 'Products';

  countEl.textContent = filtered.length + ' item' + (filtered.length !== 1 ? 's' : '');

  // Search active banner
  if (searchQuery) {
    activeBar.hidden = false;
    activeLabel.textContent = `Showing results for "${searchQuery}"`;
  } else {
    activeBar.hidden = true;
  }

  // No results
  if (filtered.length === 0) {
    grid.innerHTML = '';
    noRes.hidden = false;
    return;
  }
  noRes.hidden = true;

  grid.innerHTML = filtered.map(p => {
    const inStock   = p.stock;
    const btnClass  = inStock ? '' : ' notify';
    const btnIcon   = inStock ? '🛒' : '🔔';
    const btnText   = inStock ? 'Buy via WhatsApp' : 'Notify When Available';
    const pillClass = inStock ? 'in' : 'out';
    const pillText  = inStock ? 'In Stock' : 'Sold Out';
    const displayName = highlight(p.name, searchQuery);

    return `
      <article class="prod-card" role="listitem">
        <div class="prod-thumb" aria-hidden="true">
          ${p.icon.includes('/') || p.icon.includes('.')
            ? `<img src="${p.icon}" alt="${p.name}" loading="lazy" onerror="this.parentElement.innerHTML='📦'">`
            : p.icon
          }
        </div>
        <div class="prod-body">
          <p class="prod-name">${displayName}</p>
          <div class="prod-meta">
            <span class="prod-price">${p.price.toLocaleString()} PKR</span>
            <span class="stock-pill ${pillClass}">${pillText}</span>
          </div>
          <a class="prod-btn${btnClass}" href="${waUrl(p, inStock)}" target="_blank" rel="noopener">
            ${btnIcon} ${btnText}
          </a>
        </div>
      </article>
    `;
  }).join('');
}

// ─── Search Dropdown ──────────────────────────────
const MAX_DROPDOWN = 6;

function renderDropdown(query) {
  const dropdown = document.getElementById('searchDropdown');
  const input    = document.getElementById('searchInput');

  if (!query.trim()) {
    dropdown.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    return;
  }

  const q       = query.toLowerCase();
  const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q));

  if (matches.length === 0) {
    dropdown.innerHTML = `<div class="search-no-results">No products found for "<strong>${query}</strong>"</div>`;
    dropdown.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    return;
  }

  const shown = matches.slice(0, MAX_DROPDOWN);
  const more  = matches.length - MAX_DROPDOWN;

  dropdown.innerHTML =
    shown.map(p => `
      <a class="search-result-item" href="${waUrl(p, p.stock)}" target="_blank" rel="noopener" role="option">
        <div class="sri-icon">
          ${p.icon.includes('/') || p.icon.includes('.')
            ? `<img src="${p.icon}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;" onerror="this.parentElement.innerHTML='📦'">`
            : p.icon
          }
        </div>
        <div class="sri-info">
          <div class="sri-name">${highlight(p.name, query)}</div>
          <div class="sri-meta">
            <span class="sri-price">${p.price.toLocaleString()} PKR</span>
            <span class="sri-pill ${p.stock ? 'in' : 'out'}">${p.stock ? 'In Stock' : 'Sold Out'}</span>
          </div>
        </div>
      </a>
    `).join('') +
    (more > 0
      ? `<div class="search-dropdown-footer" id="dropdownSeeAll">See all ${matches.length} results ↓</div>`
      : '');

  dropdown.hidden = false;
  input.setAttribute('aria-expanded', 'true');

  // "See all" click → close dropdown, update grid
  const seeAll = document.getElementById('dropdownSeeAll');
  if (seeAll) {
    seeAll.addEventListener('click', () => {
      commitSearch(query);
    });
  }
}

/** Commit search: close dropdown, filter grid, scroll to products */
function commitSearch(query) {
  searchQuery = query;
  document.getElementById('searchDropdown').hidden = true;
  document.getElementById('searchInput').setAttribute('aria-expanded', 'false');
  renderProducts();
  // Reset active category chip to "All" so search works across all
  if (query) {
    activeCat = 'all';
    document.querySelectorAll('.cat-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.cat === 'all');
      c.setAttribute('aria-selected', c.dataset.cat === 'all' ? 'true' : 'false');
    });
    const productsSection = document.getElementById('products');
    const offset = productsSection.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

/** Clear search entirely */
function clearSearch() {
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').hidden = true;
  document.getElementById('searchDropdown').hidden = true;
  document.getElementById('searchInput').setAttribute('aria-expanded', 'false');
  renderProducts();
}

// ─── Search Events ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const dropdown    = document.getElementById('searchDropdown');

  // Live typing → show dropdown
  searchInput.addEventListener('input', function () {
    const val = this.value.trim();
    searchClear.hidden = val === '';
    renderDropdown(val);
    // If user clears the input entirely, reset grid immediately
    if (val === '') {
      searchQuery = '';
      renderProducts();
    }
  });

  // Enter key → commit search
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      commitSearch(this.value.trim());
    }
    if (e.key === 'Escape') {
      dropdown.hidden = true;
      this.blur();
    }
  });

  // Clear button
  searchClear.addEventListener('click', clearSearch);

  // "Clear Search" bar button
  document.getElementById('searchClearAll').addEventListener('click', clearSearch);

  // "Browse all products" in no-results
  document.getElementById('noResultsReset').addEventListener('click', clearSearch);

  // Click outside dropdown → close it
  document.addEventListener('click', function (e) {
    if (!document.getElementById('navSearch').contains(e.target)) {
      dropdown.hidden = true;
      searchInput.setAttribute('aria-expanded', 'false');
    }
  });

  // ─── Category Filter ────────────────────────────
  document.getElementById('catsWrap').addEventListener('click', function (e) {
    const chip = e.target.closest('.cat-chip');
    if (!chip) return;

    document.querySelectorAll('.cat-chip').forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-selected', 'false');
    });
    chip.classList.add('active');
    chip.setAttribute('aria-selected', 'true');

    activeCat = chip.dataset.cat;
    // Changing category clears the search query
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    searchClear.hidden = true;
    dropdown.hidden = true;

    renderProducts();

    const productsSection = document.getElementById('products');
    const offset = productsSection.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });

  // ─── Inject mobile search row into nav drawer ───
  // We create a search row inside the nav drawer for small screens
  // where the navbar search bar is hidden
  const navLinks = document.getElementById('navLinks');

  // Build the mobile search list item
  const mobileSearchLi = document.createElement('li');
  mobileSearchLi.className = 'mobile-search-row';
  mobileSearchLi.style.display = 'none'; // controlled by CSS media query
  mobileSearchLi.innerHTML = `
    <div class="search-wrap" id="mobileSearchWrap">
      <svg class="search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input
        type="text"
        id="mobileSearchInput"
        class="search-input"
        placeholder="Search products…"
        autocomplete="off"
        aria-label="Search products"
      />
      <button class="search-clear" id="mobileSearchClear" aria-label="Clear search" hidden>✕</button>
    </div>
  `;
  navLinks.prepend(mobileSearchLi);

  // Wire up mobile search input (same logic as desktop)
  const mobileInput = document.getElementById('mobileSearchInput');
  const mobileClear = document.getElementById('mobileSearchClear');

  mobileInput.addEventListener('input', function () {
    const val = this.value.trim();
    mobileClear.hidden = val === '';
    // Also sync to desktop input
    document.getElementById('searchInput').value = val;
    searchClear.hidden = val === '';
    if (val === '') {
      searchQuery = '';
      renderProducts();
    } else {
      renderDropdown(val);
    }
  });

  mobileInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = this.value.trim();
      // Close nav drawer
      navLinks.classList.remove('open');
      document.getElementById('navToggle').textContent = '☰';
      commitSearch(val);
    }
  });

  mobileClear.addEventListener('click', function () {
    mobileInput.value = '';
    this.hidden = true;
    clearSearch();
  });

  // ─── Mobile Nav Toggle ──────────────────────────
  document.getElementById('navToggle').addEventListener('click', function () {
    navLinks.classList.toggle('open');
    this.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    // Focus mobile search when drawer opens on small screen
    if (navLinks.classList.contains('open') && window.innerWidth <= 640) {
      setTimeout(() => mobileInput.focus(), 150);
    }
  });

  document.getElementById('navLinks').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      this.classList.remove('open');
      document.getElementById('navToggle').textContent = '☰';
    }
  });

  // ─── Init ───────────────────────────────────────
  renderProducts();

}); // end DOMContentLoadedx