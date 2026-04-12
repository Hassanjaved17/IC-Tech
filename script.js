/* ═══════════════════════════════════════════════════
   ICTech.pk — script.js
   Features:
     • Product data & rendering
     • See More / See Less (12 at a time)
     • Staggered card entrance animations
     • Category filter
     • Live search with dropdown + full-grid filtering
     • Mobile nav toggle + mobile search injection
     • AOS init
═══════════════════════════════════════════════════ */

// ─── Product Data ─────────────────────────────────
const PRODUCTS = [
  { name: "BNC Cable",                              price: 150,  stock: true,  icon: "./images/product1.jpg",  cat: "connectors", wa: "BNC Cable, Price: 150 PKR" },
  { name: "Cleaver Fiber Optic",                    price: 5000, stock: false, icon: "./images/product2.jpg",  cat: "fiber",       wa: "Cleaver Fiber Optic, Price: 5000 PKR" },
  { name: "USB Cable Printer",                      price: 300,  stock: true,  icon: "./images/product1.jpg",  cat: "computer",    wa: "USB Cable Printer, Price: 300 PKR" },
  { name: "GM220-s China Router XPon",              price: 2300, stock: true,  icon: "./images/product2.jpg",  cat: "networking",  wa: "GM220-s China Router XPon, Price: 2300 PKR" },
  { name: "MT Link Cat6 UTP Cable 1M",              price: 250,  stock: true,  icon: "./images/product1.jpg",  cat: "networking",  wa: "MT Link Cat6 UTP Cable 1M, Price: 250 PKR" },
  { name: "MT-1704 Single Band XPon",               price: 4700, stock: false, icon: "./images/product2.jpg",  cat: "networking",  wa: "MT-1704 Single Band XPon, Price: 4700 PKR" },
  { name: "DC Battery Charger 12V",                 price: 600,  stock: true,  icon: "./images/product1.jpg",  cat: "electric",    wa: "DC Battery Charger 12V, Price: 600 PKR" },
  { name: "MT-1704 Dual Band XPon",                 price: 6800, stock: true,  icon: "./images/product2.jpg",  cat: "networking",  wa: "MT-1704 Dual Band XPon, Price: 6800 PKR" },
  { name: "Fiber Optic Power Meter & VFL",          price: 7500, stock: true,  icon: "./images/product1.jpg",  cat: "fiber",       wa: "Fiber Optic Power Meter & VFL, Price: 7500 PKR" },
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
let activeCat    = 'all';
let searchQuery  = '';
let visibleCount = 10;
const PAGE_SIZE  = 10;

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

function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp('(' + escaped + ')', 'gi'), '<mark>$1</mark>');
}

function getFiltered() {
  let list = activeCat === 'all' ? PRODUCTS : PRODUCTS.filter(function(p) { return p.cat === activeCat; });
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(function(p) { return p.name.toLowerCase().includes(q); });
  }
  return list;
}

function buildThumb(p) {
  if (p.icon.includes('/') || p.icon.includes('.')) {
    return '<img src="' + p.icon + '" alt="' + p.name + '" loading="lazy" onerror="this.style.display=\'none\';this.parentElement.innerHTML=\'📦\'">';
  }
  return p.icon;
}

// ─── Build single card HTML ───────────────────────
function buildCard(p) {
  const inStock   = p.stock;
  const btnClass  = inStock ? '' : ' notify';
  const btnIcon   = inStock ? '<i class="fa-brands fa-whatsapp"></i>' : '<i class="fa-solid fa-bell"></i>';
  const btnText   = inStock ? 'Buy via WhatsApp' : 'Notify When Available';
  const pillClass = inStock ? 'in' : 'out';
  const pillText  = inStock ? 'In Stock' : 'Sold Out';
  const name      = highlight(p.name, searchQuery);

  return '<article class="prod-card" role="listitem">' +
    '<div class="prod-thumb" aria-hidden="true">' + buildThumb(p) + '</div>' +
    '<div class="prod-body">' +
      '<p class="prod-name">' + name + '</p>' +
      '<div class="prod-meta">' +
        '<span class="prod-price">' + p.price.toLocaleString() + ' PKR</span>' +
        '<span class="stock-pill ' + pillClass + '">' + pillText + '</span>' +
      '</div>' +
      '<a class="prod-btn' + btnClass + '" href="' + waUrl(p, inStock) + '" target="_blank" rel="noopener">' +
        btnIcon + ' ' + btnText +
      '</a>' +
    '</div>' +
  '</article>';
}

// ─── Staggered animation trigger ─────────────────
function animateCards(cards) {
  cards.forEach(function(card, i) {
    setTimeout(function() {
      card.classList.add('card-visible');
    }, Math.min(i * 45, 450));
  });
}

// ─── Update See More button state ────────────────
function updateSeeMoreBtn(filtered) {
  const seeMoreWrap = document.getElementById('seeMoreWrap');
  const seeMoreBtn  = document.getElementById('seeMoreBtn');
  const seeMoreLbl  = document.getElementById('seeMoreLabel');

  if (filtered.length <= PAGE_SIZE) {
    seeMoreWrap.hidden = true;
    return;
  }

  seeMoreWrap.hidden = false;
  const hasMore = visibleCount < filtered.length;

  if (hasMore) {
    const left = filtered.length - visibleCount;
    seeMoreLbl.textContent = 'See More Products (' + left + ' more)';
    seeMoreBtn.classList.remove('expanded'); document.getElementById('seeMoreIcon').style.transform = 'rotate(0deg)';
  } else {
    seeMoreLbl.textContent = 'See Less';
    seeMoreBtn.classList.add('expanded'); document.getElementById('seeMoreIcon').style.transform = 'rotate(180deg)';
  }
}

// ─── Render full product grid (re-render) ─────────
function renderProducts(resetCount) {
  if (resetCount === undefined) resetCount = true;
  if (resetCount) visibleCount = PAGE_SIZE;

  const grid        = document.getElementById('productsGrid');
  const titleEl     = document.getElementById('productsSectionTitle');
  const countEl     = document.getElementById('productsCount');
  const noRes       = document.getElementById('noResults');
  const activeBar   = document.getElementById('searchActiveBar');
  const activeLabel = document.getElementById('searchActiveLabel');

  const filtered = getFiltered();

  // Title & count
  titleEl.textContent = searchQuery
    ? 'Results for "' + searchQuery + '"'
    : (CAT_LABELS[activeCat] || 'Products');
  countEl.textContent = filtered.length + ' item' + (filtered.length !== 1 ? 's' : '');

  // Search banner
  activeBar.hidden = !searchQuery;
  if (searchQuery) activeLabel.textContent = 'Showing results for "' + searchQuery + '"';

  // Empty state
  if (filtered.length === 0) {
    grid.innerHTML = '';
    noRes.hidden = false;
    document.getElementById('seeMoreWrap').hidden = true;
    return;
  }
  noRes.hidden = true;

  const toShow = filtered.slice(0, visibleCount);
  grid.innerHTML = toShow.map(buildCard).join('');

  // Animate cards
  animateCards(Array.from(grid.querySelectorAll('.prod-card')));

  // See more/less
  updateSeeMoreBtn(filtered);
}

// ─── Append next page of cards ────────────────────
function appendMoreCards() {
  const filtered  = getFiltered();
  const prevCount = visibleCount;
  visibleCount    = Math.min(visibleCount + PAGE_SIZE, filtered.length);

  const grid = document.getElementById('productsGrid');
  const newItems = filtered.slice(prevCount, visibleCount);

  const newCards = [];
  newItems.forEach(function(p) {
    const tmp = document.createElement('div');
    tmp.innerHTML = buildCard(p);
    const card = tmp.firstElementChild;
    grid.appendChild(card);
    newCards.push(card);
  });

  // Small double-RAF to ensure DOM paint before animating
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      newCards.forEach(function(card, i) {
        setTimeout(function() {
          card.classList.add('card-visible');
        }, i * 45);
      });
    });
  });

  updateSeeMoreBtn(filtered);
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
  const matches = PRODUCTS.filter(function(p) { return p.name.toLowerCase().includes(q); });

  if (matches.length === 0) {
    dropdown.innerHTML = '<div class="search-no-results">No products found for "<strong>' + query + '</strong>"</div>';
    dropdown.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    return;
  }

  const shown = matches.slice(0, MAX_DROPDOWN);
  const more  = matches.length - MAX_DROPDOWN;

  var html = shown.map(function(p) {
    return '<a class="search-result-item" href="' + waUrl(p, p.stock) + '" target="_blank" rel="noopener" role="option">' +
      '<div class="sri-icon">' + buildThumb(p) + '</div>' +
      '<div class="sri-info">' +
        '<div class="sri-name">' + highlight(p.name, query) + '</div>' +
        '<div class="sri-meta">' +
          '<span class="sri-price">' + p.price.toLocaleString() + ' PKR</span>' +
          '<span class="sri-pill ' + (p.stock ? 'in' : 'out') + '">' + (p.stock ? 'In Stock' : 'Sold Out') + '</span>' +
        '</div>' +
      '</div>' +
    '</a>';
  }).join('');

  if (more > 0) {
    html += '<div class="search-dropdown-footer" id="dropdownSeeAll">See all ' + matches.length + ' results ↓</div>';
  }

  dropdown.innerHTML = html;
  dropdown.hidden = false;
  input.setAttribute('aria-expanded', 'true');

  var seeAll = document.getElementById('dropdownSeeAll');
  if (seeAll) {
    seeAll.addEventListener('click', function() { commitSearch(query); });
  }
}

// ─── Commit search to grid ────────────────────────
function commitSearch(query) {
  searchQuery = query;
  document.getElementById('searchDropdown').hidden = true;
  document.getElementById('searchInput').setAttribute('aria-expanded', 'false');

  if (query) {
    activeCat = 'all';
    document.querySelectorAll('.cat-chip').forEach(function(c) {
      c.classList.toggle('active', c.dataset.cat === 'all');
      c.setAttribute('aria-selected', c.dataset.cat === 'all' ? 'true' : 'false');
    });
  }

  renderProducts(true);

  if (query) {
    var sec = document.getElementById('products');
    var offset = sec.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

// ─── Clear search ────────────────────────────────
function clearSearch() {
  searchQuery = '';
  var si = document.getElementById('searchInput');
  var sc = document.getElementById('searchClear');
  var mi = document.getElementById('mobileSearchInput');
  var mc = document.getElementById('mobileSearchClear');
  if (si) { si.value = ''; si.setAttribute('aria-expanded', 'false'); }
  if (sc) sc.hidden = true;
  if (mi) mi.value = '';
  if (mc) mc.hidden = true;
  document.getElementById('searchDropdown').hidden = true;
  renderProducts(true);
}

// ─── DOM Ready ────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {

  // ── AOS init ────────────────────────────────
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 650,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic',
    });
  }

  // ── See More / See Less button ───────────────
  document.getElementById('seeMoreBtn').addEventListener('click', function() {
    var filtered   = getFiltered();
    var isExpanded = visibleCount >= filtered.length;

    if (isExpanded) {
      // Collapse back to first page
      visibleCount = PAGE_SIZE;
      renderProducts(false);
      var sec = document.getElementById('products');
      var offset = sec.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    } else {
      // Load next page
      appendMoreCards();
    }
  });

  // ── Desktop Search ───────────────────────────
  var searchInput = document.getElementById('searchInput');
  var searchClear = document.getElementById('searchClear');
  var dropdown    = document.getElementById('searchDropdown');

  searchInput.addEventListener('input', function() {
    var val = this.value.trim();
    searchClear.hidden = val === '';
    if (val === '') { searchQuery = ''; renderProducts(true); }
    else renderDropdown(val);
  });

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); commitSearch(this.value.trim()); }
    if (e.key === 'Escape') { dropdown.hidden = true; this.blur(); }
  });

  searchClear.addEventListener('click', clearSearch);
  document.getElementById('searchClearAll').addEventListener('click', clearSearch);
  document.getElementById('noResultsReset').addEventListener('click', clearSearch);

  // Close dropdown on outside click
  document.addEventListener('click', function(e) {
    var navSearch = document.getElementById('navSearch');
    if (navSearch && !navSearch.contains(e.target)) {
      dropdown.hidden = true;
      searchInput.setAttribute('aria-expanded', 'false');
    }
  });

  // ── Category Filter ──────────────────────────
  document.getElementById('catsWrap').addEventListener('click', function(e) {
    var chip = e.target.closest('.cat-chip');
    if (!chip) return;

    document.querySelectorAll('.cat-chip').forEach(function(c) {
      c.classList.remove('active');
      c.setAttribute('aria-selected', 'false');
    });
    chip.classList.add('active');
    chip.setAttribute('aria-selected', 'true');

    activeCat   = chip.dataset.cat;
    searchQuery = '';
    if (searchInput) { searchInput.value = ''; searchClear.hidden = true; }
    dropdown.hidden = true;

    renderProducts(true);

    var sec = document.getElementById('products');
    var offset = sec.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });

  // ── Mobile search injection ──────────────────
  var navLinks      = document.getElementById('navLinks');
  var mobileSearchLi = document.createElement('li');
  mobileSearchLi.className = 'mobile-search-row';
  mobileSearchLi.innerHTML =
    '<div class="search-wrap">' +
      '<svg class="search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' +
      '</svg>' +
      '<input type="text" id="mobileSearchInput" class="search-input" placeholder="Search products…" autocomplete="off" aria-label="Search products"/>' +
      '<button class="search-clear" id="mobileSearchClear" aria-label="Clear" hidden>✕</button>' +
    '</div>';
  navLinks.prepend(mobileSearchLi);

  var mobileInput = document.getElementById('mobileSearchInput');
  var mobileClear = document.getElementById('mobileSearchClear');

  mobileInput.addEventListener('input', function() {
    var val = this.value.trim();
    mobileClear.hidden = val === '';
    searchInput.value  = val;
    searchClear.hidden = val === '';
    if (val === '') { searchQuery = ''; renderProducts(true); }
    else renderDropdown(val);
  });

  mobileInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      navLinks.classList.remove('open');
      document.getElementById('navToggle').textContent = '☰';
      commitSearch(this.value.trim());
    }
  });

  mobileClear.addEventListener('click', clearSearch);

  // ── Mobile Nav Toggle ────────────────────────
  document.getElementById('navToggle').addEventListener('click', function() {
    navLinks.classList.toggle('open');
    this.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    if (navLinks.classList.contains('open') && window.innerWidth <= 640) {
      setTimeout(function() { mobileInput.focus(); }, 150);
    }
  });

  navLinks.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      this.classList.remove('open');
      document.getElementById('navToggle').textContent = '☰';
    }
  });

  // ── Initial render ───────────────────────────
  renderProducts(true);

}); // end DOMContentLoaded

/* ══════════════════════════════════════════════════
   FEATURE 1 — FLOATING WA + BACK TO TOP
══════════════════════════════════════════════════ */
(function () {
  var backBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      backBtn.hidden = false;
      setTimeout(function () { backBtn.classList.add('visible'); }, 10);
    } else {
      backBtn.classList.remove('visible');
      setTimeout(function () { backBtn.hidden = true; }, 300);
    }
  }, { passive: true });

  if (backBtn) {
    backBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();

/* ══════════════════════════════════════════════════
   FEATURE 2 — QUICK-VIEW MODAL
══════════════════════════════════════════════════ */
var currentModalProduct = null;

function openModal(product) {
  currentModalProduct = product;
  var overlay  = document.getElementById('modalOverlay');
  var imgEl    = document.getElementById('modalImg');
  var catEl    = document.getElementById('modalCat');
  var nameEl   = document.getElementById('modalName');
  var priceEl  = document.getElementById('modalPrice');
  var stockEl  = document.getElementById('modalStock');
  var buyBtn   = document.getElementById('modalBuyBtn');
  var copied   = document.getElementById('modalCopied');

  var CAT_DISPLAY = {
    all: 'General', networking: 'Networking', fiber: 'Fiber Optic',
    cameras: 'CCTV & Cameras', mobile: 'Mobile Accessories',
    computer: 'Computer', electric: 'Electric / Solar',
    android: 'Android Box', connectors: 'Connectors & Tools'
  };

  // Populate
  imgEl.innerHTML = (product.icon.includes('/') || product.icon.includes('.'))
    ? '<img src="' + product.icon + '" alt="' + product.name + '" onerror="this.style.display=\'none\';this.parentElement.innerHTML=\'📦\'">'
    : product.icon;

  catEl.textContent   = CAT_DISPLAY[product.cat] || product.cat;
  nameEl.textContent  = product.name;
  priceEl.textContent = product.price.toLocaleString() + ' PKR';

  stockEl.textContent  = product.stock ? 'In Stock' : 'Sold Out';
  stockEl.className    = 'modal-stock ' + (product.stock ? 'in' : 'out');

  var waMsg  = product.stock
    ? 'I want to buy: ' + product.wa
    : 'I need this product when available: ' + product.wa;
  buyBtn.href = 'https://wa.me/923170111244?text=' + encodeURIComponent(waMsg);

  copied.hidden = true;
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';

  // Buy button fires toast too
  buyBtn.onclick = function () {
    showToast('Opening WhatsApp for ' + product.name + '…');
  };
}

function closeModal() {
  var overlay = document.getElementById('modalOverlay');
  overlay.hidden = true;
  document.body.style.overflow = '';
  currentModalProduct = null;
}

// Close on overlay click / ESC
document.getElementById('modalOverlay').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});
document.getElementById('modalClose').addEventListener('click', closeModal);

// Share button — copies WA link to clipboard
document.getElementById('modalShareBtn').addEventListener('click', function () {
  if (!currentModalProduct) return;
  var waMsg = 'Check out this product from ICTech.pk: ' + currentModalProduct.name +
              ' — PKR ' + currentModalProduct.price.toLocaleString() +
              '\nhttps://wa.me/923170111244?text=' + encodeURIComponent('I want to buy: ' + currentModalProduct.wa);
  navigator.clipboard.writeText(waMsg).then(function () {
    var copied = document.getElementById('modalCopied');
    copied.hidden = false;
    setTimeout(function () { copied.hidden = true; }, 2500);
  }).catch(function () {
    showToast('Could not copy — try manually!');
  });
});

/* ══════════════════════════════════════════════════
   FEATURE 3 — TOAST
══════════════════════════════════════════════════ */
var toastTimer = null;

function showToast(msg) {
  var toast   = document.getElementById('toast');
  var toastMsg = document.getElementById('toastMsg');
  if (!toast) return;
  toastMsg.textContent = msg || 'Opening WhatsApp…';
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove('show');
  }, 2800);
}

/* ══════════════════════════════════════════════════
   FEATURE 4 — SORT & FILTER (price range + stock)
══════════════════════════════════════════════════ */
var sortMode   = 'default';
var priceMin   = null;
var priceMax   = null;
var stockOnly  = false;

// Override getFiltered to include sort + price + stock filters
var _baseGetFiltered = getFiltered;
getFiltered = function () {
  var list = _baseGetFiltered();

  // Stock filter
  if (stockOnly) {
    list = list.filter(function (p) { return p.stock; });
  }

  // Price range filter
  if (priceMin !== null) {
    list = list.filter(function (p) { return p.price >= priceMin; });
  }
  if (priceMax !== null) {
    list = list.filter(function (p) { return p.price <= priceMax; });
  }

  // Sort
  var sorted = list.slice();
  if (sortMode === 'price-asc')  sorted.sort(function (a, b) { return a.price - b.price; });
  if (sortMode === 'price-desc') sorted.sort(function (a, b) { return b.price - a.price; });
  if (sortMode === 'name-asc')   sorted.sort(function (a, b) { return a.name.localeCompare(b.name); });
  if (sortMode === 'name-desc')  sorted.sort(function (a, b) { return b.name.localeCompare(a.name); });
  if (sortMode === 'instock')    sorted.sort(function (a, b) { return (b.stock ? 1 : 0) - (a.stock ? 1 : 0); });

  return sorted;
};

document.addEventListener('DOMContentLoaded', function () {

  // Sort select
  var sortSel = document.getElementById('sortSelect');
  if (sortSel) {
    sortSel.addEventListener('change', function () {
      sortMode = this.value;
      renderProducts(false);
    });
  }

  // Price apply
  var priceApply = document.getElementById('priceApply');
  var priceReset = document.getElementById('priceReset');
  var minInput   = document.getElementById('priceMin');
  var maxInput   = document.getElementById('priceMax');

  if (priceApply) {
    priceApply.addEventListener('click', function () {
      var minVal = parseInt(minInput.value, 10);
      var maxVal = parseInt(maxInput.value, 10);
      priceMin = isNaN(minVal) ? null : minVal;
      priceMax = isNaN(maxVal) ? null : maxVal;
      priceReset.hidden = (priceMin === null && priceMax === null);
      renderProducts(true);
    });
  }

  // Enter key on price inputs
  [minInput, maxInput].forEach(function (inp) {
    if (!inp) return;
    inp.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') priceApply && priceApply.click();
    });
  });

  // Price reset
  if (priceReset) {
    priceReset.addEventListener('click', function () {
      priceMin = null; priceMax = null;
      minInput.value = ''; maxInput.value = '';
      this.hidden = true;
      renderProducts(true);
    });
  }

  // Stock only toggle
  var stockChk = document.getElementById('stockOnly');
  if (stockChk) {
    stockChk.addEventListener('change', function () {
      stockOnly = this.checked;
      renderProducts(true);
    });
  }

  // ── SKELETON on category switch ─────────────────
  // Override catsWrap click to show skeleton briefly
  var catsWrap = document.getElementById('catsWrap');
  if (catsWrap) {
    catsWrap.addEventListener('click', function (e) {
      var chip = e.target.closest('.cat-chip');
      if (!chip) return;
      showSkeletons();
    }, true); // capture phase so it fires before the main handler
  }

});

/* ══════════════════════════════════════════════════
   FEATURE 4b — SKELETON LOADERS
══════════════════════════════════════════════════ */
function buildSkeleton() {
  return '<div class="skeleton">' +
    '<div class="skel-thumb"></div>' +
    '<div class="skel-body">' +
      '<div class="skel-line lg"></div>' +
      '<div class="skel-line md"></div>' +
      '<div class="skel-line sm"></div>' +
      '<div class="skel-line btn"></div>' +
    '</div>' +
  '</div>';
}

function showSkeletons(count) {
  count = count || 12;
  var grid = document.getElementById('productsGrid');
  if (!grid) return;
  var html = '';
  for (var i = 0; i < count; i++) html += buildSkeleton();
  grid.innerHTML = html;
  document.getElementById('seeMoreWrap').hidden = true;
}

/* ══════════════════════════════════════════════════
   QUICK-VIEW BUTTON — injected into each card
   Override buildCard to add quick-view button
══════════════════════════════════════════════════ */
var _baseBuildCard = buildCard;
buildCard = function (p) {
  var html    = _baseBuildCard(p);
  var idx     = PRODUCTS.indexOf(p);
  var qvBtn   = '<button class="prod-quickview" data-idx="' + idx + '" aria-label="Quick view ' + p.name + '">' +
                '<i class="fa-solid fa-eye"></i></button>';
  // Insert quick-view button right after <article class="prod-card"...>
  html = html.replace('<div class="prod-thumb"', qvBtn + '<div class="prod-thumb"');
  return html;
};

// Delegate quick-view click on the grid
document.addEventListener('click', function (e) {
  var qvBtn = e.target.closest('.prod-quickview');
  if (!qvBtn) return;
  e.preventDefault();
  e.stopPropagation();
  var idx = parseInt(qvBtn.dataset.idx, 10);
  if (!isNaN(idx) && PRODUCTS[idx]) openModal(PRODUCTS[idx]);
});

// Toast on every WhatsApp buy button click in the grid
document.addEventListener('click', function (e) {
  var prodBtn = e.target.closest('.prod-btn:not(.notify)');
  if (!prodBtn) return;
  showToast('Opening WhatsApp…');
});