  // ─── Product Data ───────────────────────────────────────
  const PRODUCTS = [
    { name: "BNC Cable", price: 150, stock: true, icon: "🔌", cat: "connectors", wa: "BNC Cable, Price: 150 PKR" },
    { name: "Cleaver Fiber Optic", price: 5000, stock: false, icon: "✂️", cat: "fiber", wa: "Cleaver Fiber Optic, Price: 5000 PKR" },
    { name: "USB Cable Printer", price: 300, stock: true, icon: "🖨️", cat: "computer", wa: "USB Cable Printer, Price: 300 PKR" },
    { name: "GM220-s China Router XPon", price: 2300, stock: true, icon: "📡", cat: "networking", wa: "GM220-s China Router XPon, Price: 2300 PKR" },
    { name: "MT Link Cat6 UTP Cable 1M", price: 250, stock: true, icon: "🔗", cat: "networking", wa: "MT Link Cat6 UTP Cable 1M, Price: 250 PKR" },
    { name: "MT-1704 Single Band XPon", price: 4700, stock: false, icon: "📶", cat: "networking", wa: "MT-1704 Single Band XPon, Price: 4700 PKR" },
    { name: "DC Battery Charger 12V", price: 600, stock: true, icon: "🔋", cat: "electric", wa: "DC Battery Charger 12V, Price: 600 PKR" },
    { name: "MT-1704 Dual Band XPon", price: 6800, stock: true, icon: "📶", cat: "networking", wa: "MT-1704 Dual Band XPon, Price: 6800 PKR" },
    { name: "Fiber Optic Power Meter & VFL", price: 7500, stock: true, icon: "🔦", cat: "fiber", wa: "Fiber Optic Power Meter & VFL, Price: 7500 PKR" },
    { name: "4-Core TOP Fiber Optic Cable (per m)", price: 42, stock: true, icon: "🔆", cat: "fiber", wa: "4-Core TOP Fiber Optic, Price: 42 PKR" },
    { name: "VGA Computer Cable", price: 500, stock: true, icon: "🖥️", cat: "computer", wa: "VGA Computer Cable, Price: 500 PKR" },
    { name: "SSD G Fire 128GB", price: 3500, stock: true, icon: "💾", cat: "computer", wa: "SSD G Fire 128GB, Price: 3500 PKR" },
    { name: "SSD Micron 256GB", price: 5500, stock: true, icon: "💾", cat: "computer", wa: "SSD Micron 256GB, Price: 5500 PKR" },
    { name: "DDR4 RAM 8GB", price: 4500, stock: true, icon: "🧠", cat: "computer", wa: "DDR4 RAM 8GB, Price: 4500 PKR" },
    { name: "DDR3 RAM 2GB", price: 1000, stock: true, icon: "🧠", cat: "computer", wa: "DDR3 RAM 2GB, Price: 1000 PKR" },
    { name: "Dahua Fixed DVR Camera", price: 3200, stock: true, icon: "📷", cat: "cameras", wa: "Dahua Fixed DVR Camera, Price: 3200 PKR" },
    { name: "WiFi Camera HD 1080P", price: 4000, stock: true, icon: "📷", cat: "cameras", wa: "WiFi Camera HD 1080P, Price: 4000 PKR" },
    { name: "PK-910H A4Tech HD WebCam", price: 7000, stock: true, icon: "🎥", cat: "cameras", wa: "PK-910H A4Tech HD WebCam, Price: 7000 PKR" },
    { name: "K6 Wifi HD 1080P Waterproof Bullet Camera", price: 6500, stock: false, icon: "📷", cat: "cameras", wa: "K6 Wifi Bullet Camera, Price: 6500 PKR" },
    { name: "JBL Portable Wireless Speaker", price: 900, stock: true, icon: "🔊", cat: "mobile", wa: "JBL Portable Wireless Speaker, Price: 900 PKR" },
    { name: "Air Birds Pro Earbuds", price: 1500, stock: true, icon: "🎧", cat: "mobile", wa: "Air Birds Pro, Price: 1500 PKR" },
    { name: "C-Type Fast Charger", price: 650, stock: true, icon: "⚡", cat: "mobile", wa: "C-Type Fast Charger, Price: 650 PKR" },
    { name: "iCtech Power Bank 9000mAh", price: 1500, stock: true, icon: "🔋", cat: "mobile", wa: "iCtech Power Bank 9000mAh, Price: 1500 PKR" },
    { name: "Box Data Cable iPhone", price: 550, stock: true, icon: "📱", cat: "mobile", wa: "Box Data Cable iPhone, Price: 550 PKR" },
    { name: "Dream Android Box 8/128", price: 6000, stock: true, icon: "📺", cat: "android", wa: "Dream Android Box 8/128, Price: 6000 PKR" },
    { name: "X88 Plus Android Mini Box", price: 3700, stock: true, icon: "📺", cat: "android", wa: "X88 Plus Android Mini Box, Price: 3700 PKR" },
    { name: "X96Q PRO Android Box", price: 4200, stock: false, icon: "📺", cat: "android", wa: "X96Q PRO Android Box, Price: 4200 PKR" },
    { name: "HG8245w5 XPON Dual Band", price: 5800, stock: true, icon: "📡", cat: "networking", wa: "HG8245w5 XPON Dual Band, Price: 5800 PKR" },
    { name: "V-Sol Dual Band ONT V2802CWT XPon", price: 7000, stock: true, icon: "📡", cat: "networking", wa: "V-Sol Dual Band ONT V2802CWT, Price: 7000 PKR" },
    { name: "XPON 8546M Box Pack", price: 4000, stock: true, icon: "📦", cat: "networking", wa: "XPON 8546M Box Pack, Price: 4000 PKR" },
    { name: "GM630 China Router XPon", price: 3000, stock: true, icon: "📡", cat: "networking", wa: "GM630 China Router XPon, Price: 3000 PKR" },
    { name: "S3 AC2100 Dual Band Router", price: 2500, stock: true, icon: "📡", cat: "networking", wa: "S3 AC2100 Dual Band Router, Price: 2500 PKR" },
    { name: "Fiber Optic Stripper HC-03", price: 2100, stock: true, icon: "🔧", cat: "fiber", wa: "Fiber Optic Stripper HC-03, Price: 2100 PKR" },
    { name: "She.k Crimping Tool RJ45", price: 1100, stock: true, icon: "🔧", cat: "connectors", wa: "She.k Crimping Tool RJ45, Price: 1100 PKR" },
    { name: "HnH Cable Tester", price: 800, stock: true, icon: "🔍", cat: "connectors", wa: "HnH Cable Tester, Price: 800 PKR" },
    { name: "SC-UPC Adapter Coupler (Blue)", price: 50, stock: true, icon: "🔵", cat: "connectors", wa: "SC-UPC Adapter Coupler Blue, Price: 50 PKR" },
    { name: "SC-UPC Adapter Coupler (Green)", price: 50, stock: true, icon: "🟢", cat: "connectors", wa: "SC-UPC Adapter Coupler Green, Price: 50 PKR" },
    { name: "PLC Splitter 8-Way", price: 400, stock: true, icon: "🔀", cat: "fiber", wa: "PLC Splitter 8 Way, Price: 400 PKR" },
    { name: "Box Blue 8-Way Splitter", price: 900, stock: true, icon: "🔀", cat: "fiber", wa: "Box Blue 8 Way Splitter, Price: 900 PKR" },
    { name: "Box Blue 4-Way Splitter", price: 750, stock: true, icon: "🔀", cat: "fiber", wa: "Box Blue 4 Way Splitter, Price: 750 PKR" },
    { name: "SFP Fiber Optical Transceiver 1.25G", price: 2600, stock: true, icon: "💡", cat: "fiber", wa: "SFP Fiber Optical Transceiver 1.25G, Price: 2600 PKR" },
    { name: "10G Ultranet SFP (20KM)", price: 8000, stock: true, icon: "💡", cat: "fiber", wa: "10G Ultranet SFP 20KM, Price: 8000 PKR" },
    { name: "Green SC Pigtail S/M", price: 150, stock: true, icon: "🔆", cat: "fiber", wa: "Green SC Pigtail S/M, Price: 150 PKR" },
    { name: "HnH Cat6 Wire (per meter)", price: 32, stock: true, icon: "🔗", cat: "networking", wa: "HnH Cat6 Wire, Price: 32 PKR per meter" },
    { name: "Kingston 16GB USB", price: 1200, stock: true, icon: "💿", cat: "computer", wa: "Kingston 16GB USB, Price: 1200 PKR" },
    { name: "Kingston 8GB USB", price: 800, stock: true, icon: "💿", cat: "computer", wa: "Kingston 8GB USB, Price: 800 PKR" },
    { name: "Wireless Mouse", price: 800, stock: true, icon: "🖱️", cat: "computer", wa: "Wireless Mouse, Price: 800 PKR" },
    { name: "Mouse Branded", price: 450, stock: true, icon: "🖱️", cat: "computer", wa: "Mouse Branded, Price: 450 PKR" },
    { name: "PC Keyboard", price: 900, stock: true, icon: "⌨️", cat: "computer", wa: "PC Keyboard, Price: 900 PKR" },
    { name: "USB Hub", price: 550, stock: true, icon: "🔌", cat: "computer", wa: "USB Hub, Price: 550 PKR" },
    { name: "HDMI Cable / DP Video Cable", price: 300, stock: true, icon: "📺", cat: "computer", wa: "HDMI Cable DP Video Cable, Price: 300 PKR" },
    { name: "Head Phones Computer", price: 1300, stock: true, icon: "🎧", cat: "computer", wa: "Head Phones Computer, Price: 1300 PKR" },
    { name: "Emergency Light DP-716", price: 1100, stock: true, icon: "🔦", cat: "electric", wa: "Emergency Light DP-716, Price: 1100 PKR" },
    { name: "DC-DC Buck Converter 12V", price: 1000, stock: true, icon: "⚡", cat: "electric", wa: "DC-DC Buck Converter 12V, Price: 1000 PKR" },
    { name: "DC Smart Charger 9V/12V", price: 400, stock: true, icon: "🔋", cat: "electric", wa: "DC Smart Charger 9V 12V, Price: 400 PKR" },
    { name: "Balun Connector", price: 250, stock: true, icon: "🔧", cat: "connectors", wa: "Balun Connector, Price: 250 PKR" },
    { name: "RJ45 Connector / Booted", price: 20, stock: true, icon: "🔌", cat: "connectors", wa: "RJ45 Connector, Price: 20 PKR" },
    { name: "Splice Protectors", price: 3, stock: true, icon: "🔆", cat: "fiber", wa: "Splice Protectors, Price: 3 PKR each" },
    { name: "Android Box Remote", price: 400, stock: true, icon: "🎮", cat: "android", wa: "Android Box Remote, Price: 400 PKR" },
    { name: "Software Repairing Service", price: 500, stock: true, icon: "🛠️", cat: "computer", wa: "Software Repairing Service, Price: 500 PKR" },
    { name: "Cisco Console Cable USB", price: 1500, stock: true, icon: "🔌", cat: "networking", wa: "Cisco Console Cable USB, Price: 1500 PKR" },
    { name: "Aux Cable", price: 350, stock: true, icon: "🎵", cat: "mobile", wa: "Aux Cable, Price: 350 PKR" },
    { name: "BT Bluetooth Wireless Adapter", price: 450, stock: true, icon: "📶", cat: "mobile", wa: "BT Bluetooth Wireless Adapter, Price: 450 PKR" },
  ];

  // ─── Render Products ────────────────────────────────────
  function renderProducts(cat) {
    const grid = document.getElementById('productsGrid');
    const title = document.getElementById('productsSectionTitle');
    const count = document.getElementById('productsCount');

    const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);

    const catLabels = {
      all: 'All Products', networking: 'Networking Products',
      fiber: 'Fiber Optic', cameras: 'CCTV & Cameras',
      mobile: 'Mobile Accessories', computer: 'Computer',
      electric: 'Electric / Solar', android: 'Android Box',
      connectors: 'Connectors & Tools'
    };
    title.textContent = catLabels[cat] || 'Products';
    count.textContent = filtered.length + ' items';

    grid.innerHTML = filtered.map(p => {
      const inStock = p.stock;
      const btnClass = inStock ? '' : ' notify';
      const btnIcon  = inStock ? '🛒' : '🔔';
      const btnText  = inStock ? 'Buy via WhatsApp' : 'Notify When Available';
      const pillClass = inStock ? 'in' : 'out';
      const pillText  = inStock ? 'In Stock' : 'Sold Out';
      const waMsg = inStock
        ? 'I want to buy: ' + p.wa
        : 'I need this product when available: ' + p.wa;
      const waUrl = 'https://wa.me/923170111244?text=' + encodeURIComponent(waMsg);

      return `
        <article class="prod-card" role="listitem">
          <div class="prod-thumb" aria-hidden="true">${p.icon}</div>
          <div class="prod-body">
            <p class="prod-name">${p.name}</p>
            <div class="prod-meta">
              <span class="prod-price">${p.price.toLocaleString()} PKR</span>
              <span class="stock-pill ${pillClass}">${pillText}</span>
            </div>
            <a class="prod-btn${btnClass}" href="${waUrl}" target="_blank" rel="noopener">
              ${btnIcon} ${btnText}
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // ─── Category Filter ────────────────────────────────────
  let activeCat = 'all';

  document.getElementById('catsWrap').addEventListener('click', function(e) {
    const chip = e.target.closest('.cat-chip');
    if (!chip) return;
    document.querySelectorAll('.cat-chip').forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-selected', 'false');
    });
    chip.classList.add('active');
    chip.setAttribute('aria-selected', 'true');
    activeCat = chip.dataset.cat;
    renderProducts(activeCat);

    const productsSection = document.getElementById('products');
    const offset = productsSection.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });

  // ─── Mobile Nav Toggle ──────────────────────────────────
  document.getElementById('navToggle').addEventListener('click', function() {
    const links = document.getElementById('navLinks');
    links.classList.toggle('open');
    this.textContent = links.classList.contains('open') ? '✕' : '☰';
  });

  // Close mobile nav on link click
  document.getElementById('navLinks').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      this.classList.remove('open');
      document.getElementById('navToggle').textContent = '☰';
    }
  });

  // ─── Init ───────────────────────────────────────────────
  renderProducts('all');