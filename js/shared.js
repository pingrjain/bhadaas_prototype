// ===========================================
//   BHADAAS — Shared Data, Utilities & UI
// ===========================================

// =========== CATEGORIES ===========
const CATEGORIES = [
  { id: 'telecom',    label: 'Telecom',              icon: '📡' },
  { id: 'banking',   label: 'Banking & Finance',     icon: '🏦' },
  { id: 'ecommerce', label: 'E-Commerce',            icon: '🛒' },
  { id: 'government',label: 'Government',            icon: '🏛️' },
  { id: 'healthcare',label: 'Healthcare',            icon: '🏥' },
  { id: 'food',      label: 'Food & Delivery',       icon: '🍔' },
  { id: 'transport', label: 'Transport & Logistics', icon: '🚗' },
  { id: 'realestate',label: 'Real Estate',           icon: '🏠' },
  { id: 'insurance', label: 'Insurance',             icon: '🛡️' },
  { id: 'education', label: 'Education',             icon: '🎓' },
  { id: 'utilities', label: 'Utilities',             icon: '⚡' },
  { id: 'retail',    label: 'Retail & Offline',      icon: '🏪' },
];

// =========== ENTITIES ===========
const ENTITIES = [
  { id: 'airtel',     name: 'Airtel India',               category: 'telecom',    icon: '📡', claimed: true,  bhadaasCount: 1247, avgSeverity: 3.8, resolutionRate: 42, responseRate: 67 },
  { id: 'hdfc',       name: 'HDFC Bank',                  category: 'banking',   icon: '🏦', claimed: true,  bhadaasCount: 934,  avgSeverity: 3.2, resolutionRate: 58, responseRate: 72 },
  { id: 'amazon',     name: 'Amazon India',               category: 'ecommerce', icon: '📦', claimed: true,  bhadaasCount: 2103, avgSeverity: 2.9, resolutionRate: 71, responseRate: 88 },
  { id: 'bsnl',       name: 'BSNL',                       category: 'telecom',   icon: '☎️', claimed: false, bhadaasCount: 677,  avgSeverity: 4.1, resolutionRate: 12, responseRate: 8  },
  { id: 'swiggy',     name: 'Swiggy',                     category: 'food',      icon: '🍔', claimed: true,  bhadaasCount: 1892, avgSeverity: 2.6, resolutionRate: 65, responseRate: 79 },
  { id: 'irctc',      name: 'IRCTC / Indian Railways',    category: 'transport', icon: '🚂', claimed: false, bhadaasCount: 3421, avgSeverity: 4.3, resolutionRate: 9,  responseRate: 4  },
  { id: 'byju',       name: "Byju's",                     category: 'education', icon: '🎓', claimed: false, bhadaasCount: 2876, avgSeverity: 4.7, resolutionRate: 7,  responseRate: 3  },
  { id: 'bses',       name: 'BSES Delhi (Electricity)',   category: 'utilities', icon: '⚡', claimed: false, bhadaasCount: 543,  avgSeverity: 3.5, resolutionRate: 18, responseRate: 11 },
  { id: 'zomato',     name: 'Zomato',                     category: 'food',      icon: '🍕', claimed: true,  bhadaasCount: 1654, avgSeverity: 2.7, resolutionRate: 69, responseRate: 82 },
  { id: 'paytm',      name: 'Paytm',                      category: 'banking',   icon: '💳', claimed: true,  bhadaasCount: 789,  avgSeverity: 3.1, resolutionRate: 54, responseRate: 64 },
  { id: 'flipkart',   name: 'Flipkart',                   category: 'ecommerce', icon: '🛍️', claimed: true,  bhadaasCount: 1876, avgSeverity: 3.0, resolutionRate: 63, responseRate: 77 },
  { id: 'ola',        name: 'Ola Cabs',                   category: 'transport', icon: '🚖', claimed: true,  bhadaasCount: 1102, avgSeverity: 3.3, resolutionRate: 48, responseRate: 55 },
];

// =========== POSTS ===========
const POSTS = [
  {
    id: 1,
    title: "Airtel charged me for a plan I never subscribed to",
    excerpt: "For 3 consecutive months, Airtel has been deducting ₹299 from my account for a 'Family Add-on' that I never opted for. Customer care keeps transferring calls and no resolution.",
    entity: ENTITIES[0],
    category: 'telecom',
    severity: 4,
    upvotes: 342,
    comments: 47,
    timeAgo: '2 hours ago',
    status: 'open',
    userScore: 87,
    hasCompanyResponse: false,
    tags: ['billing', 'fraud', 'customer-care'],
  },
  {
    id: 2,
    title: "HDFC Credit Card fraud transaction — bank refusing to help",
    excerpt: "Someone made a ₹45,000 fraudulent transaction on my credit card. HDFC's fraud team is saying 'we cannot confirm it was fraudulent' and asking me to PAY THE BILL.",
    entity: ENTITIES[1],
    category: 'banking',
    severity: 5,
    upvotes: 891,
    comments: 134,
    timeAgo: '5 hours ago',
    status: 'responded',
    userScore: 94,
    hasCompanyResponse: true,
    tags: ['fraud', 'credit-card', 'urgent'],
  },
  {
    id: 3,
    title: "Amazon delivered empty box — 4 weeks, no refund",
    excerpt: "Ordered a ₹8,500 headphone. Received an empty sealed box. Raised return, they collected it. Now 4 weeks later — no refund, no communication from Amazon.",
    entity: ENTITIES[2],
    category: 'ecommerce',
    severity: 4,
    upvotes: 567,
    comments: 89,
    timeAgo: '1 day ago',
    status: 'open',
    userScore: 82,
    hasCompanyResponse: false,
    tags: ['delivery', 'refund', 'empty-box'],
  },
  {
    id: 4,
    title: "Byju's refusing to cancel + issuing legal threats",
    excerpt: "Cancelled my child's subscription 8 months ago via email as instructed. Byju's kept charging EMI. When I stopped payment, they sent a legal notice threatening CIBIL damage.",
    entity: ENTITIES[6],
    category: 'education',
    severity: 5,
    upvotes: 2341,
    comments: 312,
    timeAgo: '3 days ago',
    status: 'open',
    userScore: 96,
    hasCompanyResponse: false,
    tags: ['subscription', 'legal-threat', 'emi-fraud'],
  },
  {
    id: 5,
    title: "IRCTC refund stuck for 6 months — train was cancelled by Railways",
    excerpt: "My Rajdhani Express was cancelled. IRCTC promised auto-refund in 7 days. 6 months later, ₹4,200 refund still not received. Portal shows 'Initiated' forever.",
    entity: ENTITIES[5],
    category: 'transport',
    severity: 3,
    upvotes: 1205,
    comments: 178,
    timeAgo: '1 week ago',
    status: 'open',
    userScore: 79,
    hasCompanyResponse: false,
    tags: ['refund', 'cancelled-train', 'stuck'],
  },
  {
    id: 6,
    title: "Swiggy delivery caused property damage — ₹50 coupon offered",
    excerpt: "Delivery agent damaged my glass door with his bike while reversing. I submitted video evidence on Swiggy support. They offered ₹50 coupon as 'full and final resolution'.",
    entity: ENTITIES[4],
    category: 'food',
    severity: 3,
    upvotes: 234,
    comments: 56,
    timeAgo: '2 days ago',
    status: 'resolved',
    userScore: 71,
    hasCompanyResponse: true,
    tags: ['delivery', 'damage', 'compensation'],
  },
  {
    id: 7,
    title: "Paytm suddenly froze wallet with ₹12,000 balance inside",
    excerpt: "Paytm froze my KYC-verified Aadhaar-linked wallet citing 'suspicious activity'. Balance stuck for 3 weeks. Support only sends automated copy-paste replies.",
    entity: ENTITIES[9],
    category: 'banking',
    severity: 4,
    upvotes: 445,
    comments: 67,
    timeAgo: '4 days ago',
    status: 'open',
    userScore: 88,
    hasCompanyResponse: false,
    tags: ['wallet-freeze', 'kyc', 'balance-stuck'],
  },
];

// =========== AGGREGATE STATS ===========
const ADMIN_STATS = {
  totalPosts:         48291,
  totalUsers:         124500,
  totalEntities:      8734,
  pendingModeration:  127,
  claimedEntities:    342,
  resolvedThisMonth:  2847,
  revenueThisMonth:   847000,
  activeCompanies:    89,
};

const COMPANY_STATS = {
  entityName:       'Airtel India',
  entityIcon:       '📡',
  totalBhadaas:     1247,
  newThisWeek:      43,
  pendingResponse:  28,
  resolved:         524,
  avgSentiment:     2.8,
  upvotes:          18432,
  responseRate:     67,
  satisfactionScore: 3.2,
};

// =========== NAVIGATION ===========

/** For pages inside /pages/ subfolder */
function renderNavbar(activePage = '') {
  return `
  <nav class="navbar">
    <div class="container">
      <a href="../index.html" class="nav-brand">
        <span class="brand-name">भड़ास</span>
        <span class="brand-tagline">Speak Up India</span>
      </a>
      <div class="nav-links">
        <a href="feed.html"               class="${activePage==='feed'    ? 'active' : ''}">Browse</a>
        <a href="post.html"               class="${activePage==='post'    ? 'active' : ''}">Post Bhadaas</a>
        <a href="entity.html"             class="${activePage==='entity'  ? 'active' : ''}">Entities</a>
        <a href="company-dashboard.html"  class="${activePage==='company' ? 'active' : ''}">For Companies</a>
        <a href="admin-dashboard.html"    class="${activePage==='admin'   ? 'active' : ''}">Admin</a>
        <a href="../dev/index.html"        class="${activePage==='dev'     ? 'active' : ''}" style="color:rgba(255,180,80,0.85);" title="Developer & Founder Reference">⚠️ Dev Details</a>
      </div>
      <div class="nav-actions">
        <button class="btn btn-sm" style="color:rgba(255,255,255,0.7);border:1.5px solid rgba(255,255,255,0.2);background:transparent;" onclick="showToast('Login / Sign Up coming soon!','info')">Login</button>
        <button class="btn btn-primary btn-sm" onclick="window.location='post.html'">+ Post Bhadaas</button>
      </div>
    </div>
  </nav>`;
}

/** For root index.html */
function renderRootNavbar(activePage = '') {
  return `
  <nav class="navbar">
    <div class="container">
      <a href="index.html" class="nav-brand">
        <span class="brand-name">भड़ास</span>
        <span class="brand-tagline">Speak Up India</span>
      </a>
      <div class="nav-links">
        <a href="pages/feed.html"              class="${activePage==='feed'    ? 'active' : ''}">Browse</a>
        <a href="pages/post.html"              class="${activePage==='post'    ? 'active' : ''}">Post Bhadaas</a>
        <a href="pages/entity.html"            class="${activePage==='entity'  ? 'active' : ''}">Entities</a>
        <a href="pages/company-dashboard.html" class="${activePage==='company' ? 'active' : ''}">For Companies</a>
        <a href="pages/admin-dashboard.html"   class="${activePage==='admin'   ? 'active' : ''}">Admin</a>
        <a href="dev/index.html"               class="${activePage==='dev'     ? 'active' : ''}" style="color:rgba(255,180,80,0.85);" title="Developer & Founder Reference">⚠️ Dev Details</a>
      </div>
      <div class="nav-actions">
        <button class="btn btn-sm" style="color:rgba(255,255,255,0.7);border:1.5px solid rgba(255,255,255,0.2);background:transparent;" onclick="showToast('Login / Sign Up coming soon!','info')">Login</button>
        <button class="btn btn-primary btn-sm" onclick="window.location='pages/post.html'">+ Post Bhadaas</button>
      </div>
    </div>
  </nav>`;
}

// =========== POST CARD RENDERER ===========

function renderPostCard(post) {
  const cat = getCategoryInfo(post.category);
  const statusConfig = {
    open:      { cls: 'badge-danger',   label: '🔴 Open'      },
    responded: { cls: 'badge-warning',  label: '💬 Responded' },
    resolved:  { cls: 'badge-success',  label: '✅ Resolved'  },
  };
  const sc = statusConfig[post.status] || statusConfig.open;

  return `
  <div class="post-card" onclick="window.location='entity.html?id=${post.entity.id}&post=${post.id}'">
    <div class="severity-bar"><div class="severity-bar-fill sev-${post.severity}"></div></div>
    <div class="post-card-header">
      <div style="display:flex;gap:0.4rem;flex-wrap:wrap;align-items:center;">
        <span class="entity-tag">${post.entity.icon} ${post.entity.name}</span>
        <span class="category-tag">${cat.icon} ${cat.label}</span>
        <span class="badge ${sc.cls}">${sc.label}</span>
      </div>
      <div class="text-xs text-muted" style="margin-top:0.35rem;">${post.timeAgo} &nbsp;·&nbsp; Trust score: ${post.userScore}</div>
    </div>
    <div class="post-card-body">
      <div class="post-title">${post.title}</div>
      <div class="post-excerpt">${post.excerpt}</div>
      ${post.hasCompanyResponse ? `
      <div class="alert alert-success" style="padding:0.5rem 0.75rem;font-size:0.78rem;margin-top:0.75rem;margin-bottom:0;">
        <span>✅</span><span>Official response received from <strong>${post.entity.name}</strong></span>
      </div>` : ''}
    </div>
    <div class="post-card-footer">
      <button class="metoo-btn" onclick="event.stopPropagation();handleMeToo(this,${post.id})">
        ✊ Me Too <span class="count">${formatNumber(post.upvotes)}</span>
      </button>
      <span class="text-sm text-muted">💬 ${post.comments}</span>
      <span class="text-sm" style="margin-left:auto;color:${getSeverityColor(post.severity)};font-weight:700;">
        ${getSeverityLabel(post.severity)}
      </span>
    </div>
  </div>`;
}

// =========== ENTITY CARD RENDERER ===========

function renderEntityCard(entity) {
  const cat = getCategoryInfo(entity.category);
  return `
  <a href="entity.html?id=${entity.id}" class="card" style="display:block;padding:1.25rem;transition:all 0.2s;"
     onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='var(--shadow)'"
     onmouseout="this.style.transform='';this.style.boxShadow=''">
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.875rem;">
      <div style="font-size:2rem;flex-shrink:0;">${entity.icon}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;font-size:0.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${entity.name}</div>
        <div class="text-xs text-muted">${cat.icon} ${cat.label}</div>
      </div>
      ${entity.claimed ? '<span class="badge badge-claimed" style="flex-shrink:0;">✓ Claimed</span>' : '<span class="badge badge-secondary" style="flex-shrink:0;">Unclaimed</span>'}
    </div>
    <div style="display:flex;gap:1rem;">
      <div style="flex:1;text-align:center;">
        <div style="font-size:1.1rem;font-weight:800;color:var(--danger);">${formatNumber(entity.bhadaasCount)}</div>
        <div class="text-xs text-muted">Bhadaas</div>
      </div>
      <div style="flex:1;text-align:center;">
        <div style="font-size:1.1rem;font-weight:800;color:var(--success);">${entity.resolutionRate}%</div>
        <div class="text-xs text-muted">Resolved</div>
      </div>
      <div style="flex:1;text-align:center;">
        <div style="font-size:1.1rem;font-weight:800;color:${getSeverityColor(Math.round(entity.avgSeverity))};">${entity.avgSeverity.toFixed(1)}</div>
        <div class="text-xs text-muted">Severity</div>
      </div>
    </div>
  </a>`;
}

// =========== BAR CHART RENDERER ===========

function renderBarChart(data) {
  if (!data || !data.length) return '';
  const max = Math.max(...data.map(d => d.value), 1);
  return `
  <div class="chart-bars">
    ${data.map(d => `
    <div class="chart-bar-wrap">
      <div class="chart-bar" style="height:${Math.max(8,(d.value/max)*160)}px;${d.color?`background:linear-gradient(to top,${d.color},${d.color}99)`:''}" title="${d.label}: ${d.value}"></div>
      <div class="chart-label">${d.label}</div>
    </div>`).join('')}
  </div>`;
}

// =========== UTILITY FUNCTIONS ===========

function formatNumber(n) {
  if (n >= 10000000) return (n / 10000000).toFixed(1) + 'Cr';
  if (n >= 100000)   return (n / 100000).toFixed(1) + 'L';
  if (n >= 1000)     return (n / 1000).toFixed(1) + 'K';
  return String(n);
}

function formatCurrency(n) {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000)   return '₹' + (n / 100000).toFixed(1) + 'L';
  if (n >= 1000)     return '₹' + (n / 1000).toFixed(0) + 'K';
  return '₹' + n;
}

function getSeverityLabel(s) {
  return ['', 'Minor Issue', 'Noteworthy', 'Significant', 'Serious', 'CRITICAL'][s] || 'Unknown';
}

function getSeverityColor(s) {
  return ['', '#28C76F', '#7BC67E', '#FF9F43', '#FF6B35', '#EA5455'][s] || '#ccc';
}

function getCategoryInfo(id) {
  return CATEGORIES.find(c => c.id === id) || { label: id, icon: '📌' };
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

// =========== ME TOO HANDLER ===========

const _meTooed = new Set();

function handleMeToo(btn, postId) {
  if (_meTooed.has(postId)) {
    _meTooed.delete(postId);
    btn.classList.remove('active');
    const countEl = btn.querySelector('.count');
    if (countEl) {
      const cur = parseFloat(countEl.textContent);
      countEl.textContent = formatNumber(isNaN(cur) ? 0 : Math.max(0, cur - 1));
    }
    showToast('Me Too removed.', 'info');
  } else {
    _meTooed.add(postId);
    btn.classList.add('active');
    const countEl = btn.querySelector('.count');
    if (countEl) {
      const cur = parseFloat(countEl.textContent);
      countEl.textContent = formatNumber(isNaN(cur) ? 1 : cur + 1);
    }
    showToast('✊ Me Too added! You\'ll get notified when the company responds.', 'success');
  }
}

// =========== TOAST ===========

function showToast(message, type = 'default', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✅', danger: '❌', warning: '⚠️', info: 'ℹ️', default: '💬' };
  toast.innerHTML = `<span>${icons[type] || icons.default}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// =========== TABS ===========

function initTabs(root) {
  const el = typeof root === 'string' ? document.querySelector(root) : (root || document);
  if (!el) return;
  el.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabsParent = tab.closest('.tabs');
      if (!tabsParent) return;
      tabsParent.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetId = tab.dataset.tab;
      if (!targetId) return;
      // Find tab contents in the next sibling or parent container
      const container = tabsParent.closest('[data-tabs-container]') || tabsParent.parentElement;
      container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const target = document.getElementById(targetId) || container.querySelector(`#${targetId}`);
      if (target) target.classList.add('active');
    });
  });
}

// =========== MODALS ===========

function openModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeModal(e.target.id);
});

// =========== SIDEBAR NAVIGATION (for dashboard pages) ===========

function initSidebarNav() {
  document.querySelectorAll('.sidebar-item[data-section]').forEach(item => {
    item.addEventListener('click', () => {
      const section = item.dataset.section;
      // Update active sidebar item
      document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      // Show correct section
      document.querySelectorAll('.dashboard-section').forEach(s => s.classList.add('hidden'));
      const target = document.getElementById('section-' + section);
      if (target) target.classList.remove('hidden');
      // Update page title if exists
      const titleEl = document.getElementById('section-title');
      if (titleEl) titleEl.textContent = item.querySelector('.label')?.textContent || '';
    });
  });
}

// =========== DOM READY ===========

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav if placeholder exists
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    const isRoot = navPlaceholder.dataset.root === 'true';
    const active  = navPlaceholder.dataset.active || '';
    navPlaceholder.outerHTML = isRoot ? renderRootNavbar(active) : renderNavbar(active);
  }
  initTabs(document);
  initSidebarNav();
});
