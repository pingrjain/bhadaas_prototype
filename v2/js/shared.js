// ===========================================
//   bhadaas — v2 shared data, utilities & ui
//   everything lowercase
// ===========================================

// =========== categories ===========
const CATEGORIES = [
  { id: 'telecom',    label: 'telecom',              icon: '📡' },
  { id: 'banking',    label: 'banking & finance',     icon: '🏦' },
  { id: 'ecommerce',  label: 'e-commerce',            icon: '🛒' },
  { id: 'government', label: 'government',            icon: '🏛️' },
  { id: 'healthcare', label: 'healthcare',            icon: '🏥' },
  { id: 'food',       label: 'food & delivery',       icon: '🍔' },
  { id: 'transport',  label: 'transport & logistics', icon: '🚗' },
  { id: 'realestate', label: 'real estate',           icon: '🏠' },
  { id: 'insurance',  label: 'insurance',             icon: '🛡️' },
  { id: 'education',  label: 'education',             icon: '🎓' },
  { id: 'utilities',  label: 'utilities',             icon: '⚡' },
  { id: 'retail',     label: 'retail & offline',      icon: '🏪' },
];

// =========== emoji reactions (locked) ===========
const REACTIONS = [
  { id: 'angry',        emoji: '🔥', label: 'angry' },
  { id: 'funny',        emoji: '😂', label: 'funny' },
  { id: 'relatable',    emoji: '💯', label: 'relatable' },
  { id: 'clown',        emoji: '🤡', label: 'clown' },
  { id: 'disappointed', emoji: '💔', label: 'disappointed' },
  { id: 'redflag',      emoji: '🚩', label: 'red flag' },
];

// =========== entities ===========
const ENTITIES = [
  { id: 'airtel',    name: 'airtel india',             category: 'telecom',    icon: '📡', claimed: true,  bhadaasCount: 1247, avgSeverity: 3.8, resolutionRate: 42, responseRate: 67 },
  { id: 'hdfc',      name: 'hdfc bank',                category: 'banking',    icon: '🏦', claimed: true,  bhadaasCount: 934,  avgSeverity: 3.2, resolutionRate: 58, responseRate: 72 },
  { id: 'amazon',    name: 'amazon india',             category: 'ecommerce',  icon: '📦', claimed: true,  bhadaasCount: 2103, avgSeverity: 2.9, resolutionRate: 71, responseRate: 88 },
  { id: 'bsnl',      name: 'bsnl',                     category: 'telecom',    icon: '☎️', claimed: false, bhadaasCount: 677,  avgSeverity: 4.1, resolutionRate: 12, responseRate: 8  },
  { id: 'swiggy',    name: 'swiggy',                   category: 'food',       icon: '🍔', claimed: true,  bhadaasCount: 1892, avgSeverity: 2.6, resolutionRate: 65, responseRate: 79 },
  { id: 'irctc',     name: 'irctc / indian railways',  category: 'transport',  icon: '🚂', claimed: false, bhadaasCount: 3421, avgSeverity: 4.3, resolutionRate: 9,  responseRate: 4  },
  { id: 'byju',      name: "byju's",                   category: 'education',  icon: '🎓', claimed: false, bhadaasCount: 2876, avgSeverity: 4.7, resolutionRate: 7,  responseRate: 3  },
  { id: 'bses',      name: 'bses delhi (electricity)', category: 'utilities',  icon: '⚡', claimed: false, bhadaasCount: 543,  avgSeverity: 3.5, resolutionRate: 18, responseRate: 11 },
  { id: 'zomato',    name: 'zomato',                   category: 'food',       icon: '🍕', claimed: true,  bhadaasCount: 1654, avgSeverity: 2.7, resolutionRate: 69, responseRate: 82 },
  { id: 'paytm',     name: 'paytm',                    category: 'banking',    icon: '💳', claimed: true,  bhadaasCount: 789,  avgSeverity: 3.1, resolutionRate: 54, responseRate: 64 },
  { id: 'flipkart',  name: 'flipkart',                 category: 'ecommerce',  icon: '🛍️', claimed: true,  bhadaasCount: 1876, avgSeverity: 3.0, resolutionRate: 63, responseRate: 77 },
  { id: 'ola',       name: 'ola cabs',                 category: 'transport',  icon: '🚖', claimed: true,  bhadaasCount: 1102, avgSeverity: 3.3, resolutionRate: 48, responseRate: 55 },
];

// =========== posts ===========
const POSTS = [
  {
    id: 1,
    title: "airtel charged me for a plan i never subscribed to",
    excerpt: "for 3 consecutive months, airtel has been deducting ₹299 from my account for a 'family add-on' that i never opted for. customer care keeps transferring calls and no resolution.",
    username: 'fed_up_customer',
    entity: ENTITIES[0],
    category: 'telecom',
    severity: 4,
    reactions: { angry: 189, funny: 23, relatable: 342, clown: 56, disappointed: 87, redflag: 124 },
    comments: 47,
    timeAgo: '2 hours ago',
    status: 'approved',
    underReview: false,
    hasCompanyResponse: false,
    tags: ['billing', 'fraud', 'customer-care'],
    anonymous: false,
  },
  {
    id: 2,
    title: "hdfc credit card fraud transaction — bank refusing to help",
    excerpt: "someone made a ₹45,000 fraudulent transaction on my credit card. hdfc's fraud team is saying 'we cannot confirm it was fraudulent' and asking me to pay the bill.",
    username: 'scammed_by_hdfc',
    entity: ENTITIES[1],
    category: 'banking',
    severity: 5,
    reactions: { angry: 891, funny: 12, relatable: 445, clown: 234, disappointed: 567, redflag: 389 },
    comments: 134,
    timeAgo: '5 hours ago',
    status: 'approved',
    underReview: false,
    hasCompanyResponse: true,
    tags: ['fraud', 'credit-card', 'urgent'],
    anonymous: false,
  },
  {
    id: 3,
    title: "amazon delivered empty box — 4 weeks, no refund",
    excerpt: "ordered a ₹8,500 headphone. received an empty sealed box. raised return, they collected it. now 4 weeks later — no refund, no communication from amazon.",
    username: 'empty_box_victim',
    entity: ENTITIES[2],
    category: 'ecommerce',
    severity: 4,
    reactions: { angry: 234, funny: 89, relatable: 567, clown: 123, disappointed: 345, redflag: 78 },
    comments: 89,
    timeAgo: '1 day ago',
    status: 'approved',
    underReview: false,
    hasCompanyResponse: false,
    tags: ['delivery', 'refund', 'empty-box'],
    anonymous: false,
  },
  {
    id: 4,
    title: "byju's refusing to cancel + issuing legal threats",
    excerpt: "cancelled my child's subscription 8 months ago via email as instructed. byju's kept charging emi. when i stopped payment, they sent a legal notice threatening cibil damage.",
    username: 'parent_against_byju',
    entity: ENTITIES[6],
    category: 'education',
    severity: 5,
    reactions: { angry: 2341, funny: 45, relatable: 1234, clown: 876, disappointed: 678, redflag: 1567 },
    comments: 312,
    timeAgo: '3 days ago',
    status: 'approved',
    underReview: false,
    hasCompanyResponse: false,
    tags: ['subscription', 'legal-threat', 'emi-fraud'],
    anonymous: false,
  },
  {
    id: 5,
    title: "irctc refund stuck for 6 months — train was cancelled by railways",
    excerpt: "my rajdhani express was cancelled. irctc promised auto-refund in 7 days. 6 months later, ₹4,200 refund still not received. portal shows 'initiated' forever.",
    username: 'railway_refund_wait',
    entity: ENTITIES[5],
    category: 'transport',
    severity: 3,
    reactions: { angry: 456, funny: 234, relatable: 1205, clown: 89, disappointed: 567, redflag: 45 },
    comments: 178,
    timeAgo: '1 week ago',
    status: 'approved',
    underReview: false,
    hasCompanyResponse: false,
    tags: ['refund', 'cancelled-train', 'stuck'],
    anonymous: false,
  },
  {
    id: 6,
    title: "swiggy delivery caused property damage — ₹50 coupon offered",
    excerpt: "delivery agent damaged my glass door with his bike while reversing. i submitted video evidence on swiggy support. they offered ₹50 coupon as 'full and final resolution'.",
    username: 'door_broken_by_swiggy',
    entity: ENTITIES[4],
    category: 'food',
    severity: 3,
    reactions: { angry: 123, funny: 567, relatable: 234, clown: 345, disappointed: 89, redflag: 12 },
    comments: 56,
    timeAgo: '2 days ago',
    status: 'approved',
    underReview: false,
    hasCompanyResponse: true,
    tags: ['delivery', 'damage', 'compensation'],
    anonymous: true,
  },
  {
    id: 7,
    title: "paytm suddenly froze wallet with ₹12,000 balance inside",
    excerpt: "paytm froze my kyc-verified aadhaar-linked wallet citing 'suspicious activity'. balance stuck for 3 weeks. support only sends automated copy-paste replies.",
    username: 'anonymous_user',
    entity: ENTITIES[9],
    category: 'banking',
    severity: 4,
    reactions: { angry: 345, funny: 34, relatable: 445, clown: 67, disappointed: 234, redflag: 189 },
    comments: 67,
    timeAgo: '4 days ago',
    status: 'pending',
    underReview: true,
    hasCompanyResponse: false,
    tags: ['wallet-freeze', 'kyc', 'balance-stuck'],
    anonymous: true,
  },
];

// =========== aggregate stats ===========
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
  entityName:        'airtel india',
  entityIcon:        '📡',
  totalBhadaas:      1247,
  newThisWeek:       43,
  pendingResponse:   28,
  resolved:          524,
  avgSentiment:      2.8,
  upvotes:           18432,
  responseRate:      67,
  satisfactionScore: 3.2,
};

// =========== navigation ===========

function renderNavbar(activePage = '') {
  return `
  <nav class="navbar">
    <div class="container">
      <a href="../index.html" class="nav-brand">
        <span class="brand-name">भड़ास</span>
        <span class="brand-tagline">no cap. just bhadaas!</span>
      </a>
      <div class="nav-links">
        <a href="feed.html"               class="${activePage==='feed'    ? 'active' : ''}">browse</a>
        <a href="post.html"               class="${activePage==='post'    ? 'active' : ''}">post bhadaas</a>
        <a href="entity.html"             class="${activePage==='entity'  ? 'active' : ''}">entities</a>
        <a href="about.html"              class="${activePage==='about'   ? 'active' : ''}">about</a>
        <a href="../dev/index.html"        class="${activePage==='dev'     ? 'active' : ''}" style="color:rgba(255,180,80,0.85);" title="developer & founder reference">⚠️ dev details</a>
      </div>
      <div class="nav-actions">
        <a href="login.html" class="btn btn-sm btn-outline" style="border-color:rgba(255,255,255,0.2);color:var(--text-muted);">login</a>
        <a href="post.html" class="btn btn-primary btn-sm">+ post bhadaas</a>
      </div>
      <button class="nav-hamburger" onclick="toggleMobileMenu()">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

function renderRootNavbar(activePage = '') {
  return `
  <nav class="navbar">
    <div class="container">
      <a href="index.html" class="nav-brand">
        <span class="brand-name">भड़ास</span>
        <span class="brand-tagline">no cap. just bhadaas!</span>
      </a>
      <div class="nav-links">
        <a href="pages/feed.html"              class="${activePage==='feed'    ? 'active' : ''}">browse</a>
        <a href="pages/post.html"              class="${activePage==='post'    ? 'active' : ''}">post bhadaas</a>
        <a href="pages/entity.html"            class="${activePage==='entity'  ? 'active' : ''}">entities</a>
        <a href="pages/about.html"             class="${activePage==='about'   ? 'active' : ''}">about</a>
        <a href="dev/index.html"               class="${activePage==='dev'     ? 'active' : ''}" style="color:rgba(255,180,80,0.85);" title="developer & founder reference">⚠️ dev details</a>
      </div>
      <div class="nav-actions">
        <a href="pages/login.html" class="btn btn-sm btn-outline" style="border-color:rgba(255,255,255,0.2);color:var(--text-muted);">login</a>
        <a href="pages/post.html" class="btn btn-primary btn-sm">+ post bhadaas</a>
      </div>
      <button class="nav-hamburger" onclick="toggleMobileMenu()">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

function renderDevNavbar(activePage = '') {
  return `
  <nav class="navbar">
    <div class="container">
      <a href="../index.html" class="nav-brand">
        <span class="brand-name">भड़ास</span>
        <span class="brand-tagline">dev documentation</span>
      </a>
      <div class="nav-links">
        <a href="index.html"     class="${activePage==='overview'  ? 'active' : ''}">overview</a>
        <a href="business.html"  class="${activePage==='business'  ? 'active' : ''}">business</a>
        <a href="technical.html" class="${activePage==='technical' ? 'active' : ''}">technical</a>
        <a href="legal.html"     class="${activePage==='legal'     ? 'active' : ''}">legal</a>
        <a href="../pages/feed.html" style="color:var(--primary);">← back to prototype</a>
      </div>
      <div class="nav-actions">
        <a href="../pages/feed.html" class="btn btn-primary btn-sm">view prototype</a>
      </div>
      <button class="nav-hamburger" onclick="toggleMobileMenu()">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

// =========== footer ===========

function renderFooter(isRoot = false) {
  const prefix = isRoot ? 'pages/' : '';
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <span class="brand-name">भड़ास</span>
          </div>
          <p style="margin-top:1rem;font-size:0.875rem;max-width:280px;line-height:1.6;">
            the platform where real voices matter. no bots. no brands buying influence. just pure, undiluted bhadaas.
          </p>
          <div class="newsletter-form" style="margin-top:1.5rem;">
            <input type="email" placeholder="your email for updates" />
            <button class="btn btn-primary btn-sm" onclick="showToast('subscribed! you\\'ll hear from us soon.','success')">subscribe</button>
          </div>
        </div>
        <div>
          <div class="footer-col-title">platform</div>
          <div class="footer-links">
            <a href="${prefix}feed.html">browse bhadaas</a>
            <a href="${prefix}post.html">post bhadaas</a>
            <a href="${prefix}entity.html">entities</a>
            <a href="${prefix}membership.html">pro membership</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">company</div>
          <div class="footer-links">
            <a href="${prefix}about.html">about us</a>
            <a href="${prefix}rules.html">community rules</a>
            <a href="${prefix}company-dashboard.html">for companies</a>
            <a href="${prefix}login.html">login / signup</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">legal</div>
          <div class="footer-links">
            <a href="${prefix}rules.html">terms of use</a>
            <a href="${prefix}rules.html">privacy policy</a>
            <a href="${prefix}rules.html">disclaimer</a>
            <a href="${prefix}rules.html">grievance redressal</a>
          </div>
        </div>
      </div>
      <div class="disclaimer">
        disclaimer: views expressed on bhadaas.com are those of respective users and do not reflect the views of bhadaas.com or its team.
        bhadaas.com is an intermediary platform under section 79 of the it act, 2000.
      </div>
      <div class="footer-bottom">
        <span>© 2025 bhadaas.com — all rights reserved</span>
        <span>made with 🔥 in india</span>
      </div>
    </div>
  </footer>`;
}

// =========== post card renderer ===========

function renderPostCard(post, linkPrefix = '') {
  const cat = getCategoryInfo(post.category);
  const totalReactions = Object.values(post.reactions).reduce((a, b) => a + b, 0);

  return `
  <div class="post-card" onclick="window.location='${linkPrefix}post-detail.html?id=${post.id}'">
    <div class="severity-bar"><div class="severity-bar-fill sev-${post.severity}"></div></div>
    <div class="post-card-header">
      <div class="post-meta">
        <span class="entity-tag">${post.entity.icon} ${post.entity.name}</span>
        <span class="category-tag">${cat.icon} ${cat.label}</span>
        ${post.underReview ? '<span class="under-review-badge">⏳ under review</span>' : ''}
        ${post.anonymous ? '<span class="badge badge-secondary">🕶️ anonymous</span>' : ''}
      </div>
      <div class="text-xs text-muted" style="margin-top:0.35rem;">
        ${post.anonymous ? 'anonymous' : '@' + post.username} · ${post.timeAgo}
      </div>
    </div>
    <div class="post-card-body">
      <div class="post-title">${post.title}</div>
      <div class="post-excerpt">${post.excerpt}</div>
      ${post.hasCompanyResponse ? `
      <div class="alert alert-success" style="padding:0.5rem 0.75rem;font-size:0.78rem;margin-top:0.75rem;margin-bottom:0;">
        <span>✅</span><span>official response received from ${post.entity.name}</span>
      </div>` : ''}
    </div>
    <div class="post-card-footer">
      <div class="reaction-bar" onclick="event.stopPropagation()">
        ${REACTIONS.map(r => `
          <button class="reaction-btn" onclick="handleReaction(this,'${r.id}',${post.id})" title="${r.label}">
            ${r.emoji} <span class="count">${formatNumber(post.reactions[r.id] || 0)}</span>
          </button>
        `).join('')}
      </div>
      <div style="display:flex;align-items:center;gap:1rem;margin-left:auto;">
        <span class="text-sm text-muted">💬 ${post.comments}</span>
        <button class="report-btn" onclick="event.stopPropagation();showToast('report submitted. we\\'ll review it soon.','info')" title="report">🚨 report</button>
        <span class="text-sm" style="color:${getSeverityColor(post.severity)};font-weight:700;">
          ${getSeverityLabel(post.severity)}
        </span>
      </div>
    </div>
  </div>`;
}

// =========== entity card renderer ===========

function renderEntityCard(entity, linkPrefix = '') {
  const cat = getCategoryInfo(entity.category);
  return `
  <a href="${linkPrefix}entity.html?id=${entity.id}" class="card" style="display:block;padding:1.25rem;transition:all 0.2s;"
     onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='var(--shadow)'"
     onmouseout="this.style.transform='';this.style.boxShadow=''">
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.875rem;">
      <div style="font-size:2rem;flex-shrink:0;">${entity.icon}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;font-size:0.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${entity.name}</div>
        <div class="text-xs text-muted">${cat.icon} ${cat.label}</div>
      </div>
      ${entity.claimed ? '<span class="badge badge-claimed" style="flex-shrink:0;">✓ claimed</span>' : '<span class="badge badge-secondary" style="flex-shrink:0;">unclaimed</span>'}
    </div>
    <div style="display:flex;gap:1rem;">
      <div style="flex:1;text-align:center;">
        <div style="font-size:1.1rem;font-weight:800;color:var(--danger);">${formatNumber(entity.bhadaasCount)}</div>
        <div class="text-xs text-muted">bhadaas</div>
      </div>
      <div style="flex:1;text-align:center;">
        <div style="font-size:1.1rem;font-weight:800;color:var(--success);">${entity.resolutionRate}%</div>
        <div class="text-xs text-muted">resolved</div>
      </div>
      <div style="flex:1;text-align:center;">
        <div style="font-size:1.1rem;font-weight:800;color:${getSeverityColor(Math.round(entity.avgSeverity))};">${entity.avgSeverity.toFixed(1)}</div>
        <div class="text-xs text-muted">severity</div>
      </div>
    </div>
  </a>`;
}

// =========== bar chart renderer ===========

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

// =========== utility functions ===========

function formatNumber(n) {
  if (n >= 10000000) return (n / 10000000).toFixed(1) + 'cr';
  if (n >= 100000)   return (n / 100000).toFixed(1) + 'l';
  if (n >= 1000)     return (n / 1000).toFixed(1) + 'k';
  return String(n);
}

function formatCurrency(n) {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' cr';
  if (n >= 100000)   return '₹' + (n / 100000).toFixed(1) + 'l';
  if (n >= 1000)     return '₹' + (n / 1000).toFixed(0) + 'k';
  return '₹' + n;
}

function getSeverityLabel(s) {
  return ['', 'minor issue', 'noteworthy', 'significant', 'serious', 'critical'][s] || 'unknown';
}

function getSeverityColor(s) {
  return ['', '#28C76F', '#7BC67E', '#FF9F43', '#FF6B35', '#EA5455'][s] || '#666';
}

function getCategoryInfo(id) {
  return CATEGORIES.find(c => c.id === id) || { label: id, icon: '📌' };
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toLowerCase().slice(0, 2);
}

// =========== reaction handler ===========

const _reacted = {};

function handleReaction(btn, reactionId, postId) {
  const key = `${postId}_${reactionId}`;
  const countEl = btn.querySelector('.count');
  if (_reacted[key]) {
    delete _reacted[key];
    btn.classList.remove('active');
    if (countEl) {
      const cur = parseInt(countEl.textContent) || 0;
      countEl.textContent = formatNumber(Math.max(0, cur - 1));
    }
  } else {
    _reacted[key] = true;
    btn.classList.add('active');
    if (countEl) {
      const cur = parseInt(countEl.textContent) || 0;
      countEl.textContent = formatNumber(cur + 1);
    }
    const reaction = REACTIONS.find(r => r.id === reactionId);
    showToast(`${reaction ? reaction.emoji : ''} reacted!`, 'success', 2000);
  }
}

// =========== toast ===========

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

// =========== tabs ===========

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
      const container = tabsParent.closest('[data-tabs-container]') || tabsParent.parentElement;
      container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const target = document.getElementById(targetId) || container.querySelector(`#${targetId}`);
      if (target) target.classList.add('active');
    });
  });
}

// =========== modals ===========

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

// =========== sidebar navigation ===========

function initSidebarNav() {
  document.querySelectorAll('.sidebar-item[data-section]').forEach(item => {
    item.addEventListener('click', () => {
      const section = item.dataset.section;
      document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      document.querySelectorAll('.dashboard-section').forEach(s => s.classList.add('hidden'));
      const target = document.getElementById('section-' + section);
      if (target) target.classList.remove('hidden');
      const titleEl = document.getElementById('section-title');
      if (titleEl) titleEl.textContent = item.querySelector('.label')?.textContent || '';
    });
  });
}

// =========== view toggle ===========

function toggleView(mode) {
  document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.view-toggle-btn[data-view="${mode}"]`)?.classList.add('active');
  const feed = document.getElementById('posts-feed');
  if (feed) {
    if (mode === 'compact') {
      feed.classList.add('compact-view');
    } else {
      feed.classList.remove('compact-view');
    }
  }
}

// =========== character counter ===========

function updateCharCount(textarea, counterId, maxChars) {
  const counter = document.getElementById(counterId);
  if (!counter) return;
  const len = textarea.value.length;
  counter.textContent = `${len} / ${maxChars}`;
  counter.className = 'char-counter';
  if (len > maxChars * 0.9) counter.classList.add('danger');
  else if (len > maxChars * 0.75) counter.classList.add('warning');
}

// =========== mobile menu toggle ===========

function toggleMobileMenu() {
  const links = document.querySelector('.nav-links');
  if (links) {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.position = 'absolute';
    links.style.top = 'var(--nav-height)';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'var(--bg-card)';
    links.style.flexDirection = 'column';
    links.style.padding = '1rem';
    links.style.borderBottom = '1px solid var(--border)';
    links.style.zIndex = '99';
  }
}

// =========== dom ready ===========

document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    const isRoot = navPlaceholder.dataset.root === 'true';
    const isDev = navPlaceholder.dataset.dev === 'true';
    const active = navPlaceholder.dataset.active || '';
    if (isDev) {
      navPlaceholder.outerHTML = renderDevNavbar(active);
    } else {
      navPlaceholder.outerHTML = isRoot ? renderRootNavbar(active) : renderNavbar(active);
    }
  }

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    const isRoot = footerPlaceholder.dataset.root === 'true';
    footerPlaceholder.outerHTML = renderFooter(isRoot);
  }

  initTabs(document);
  initSidebarNav();
});
