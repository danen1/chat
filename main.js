const TARGET_URL = "https://kefu.qtxbr.cn/";

const ua = () => navigator.userAgent || "";
const IN_APP_PATTERNS = [
  /MicroMessenger/i,
  /QQ\//i,
  /Weibo/i,
  /Aweme/i,
  /NewsArticle/i,
  /XHS/i,
  /AlipayClient/i,
  /Lark/i,
  /DingTalk/i,
  /baiduboxapp/i,
];
const isInApp = () => IN_APP_PATTERNS.some((re) => re.test(ua()));
const isIOS = () => /(iPhone|iPad|iPod)/i.test(ua());
const isAndroid = () => /Android/i.test(ua());

function render(html) {
  const el = document.getElementById("app");
  el.innerHTML = html;
}

function copyText(text) {
  if (!navigator.clipboard) {
    const ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch {}
    document.body.removeChild(ta);
    return;
  }
  navigator.clipboard.writeText(text).catch(() => {});
}

function iconMore() {
  return `<svg class="ico" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="2" fill="#9ca3af"/><circle cx="12" cy="12" r="2" fill="#9ca3af"/><circle cx="19" cy="12" r="2" fill="#9ca3af"/></svg>`;
}
function iconSafari() {
  return `<svg class="ico" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#60a5fa" stroke-width="2"/><path d="M12 6l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" fill="#60a5fa" opacity="0.6"/></svg>`;
}
function iconChrome() {
  return `<svg class="ico" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#ef4444" opacity="0.6"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0" fill="#60a5fa"/></svg>`;
}

function iconShield() {
  return `
    <svg class="ico" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48 8l28 10v22c0 20-13 36-28 40-15-4-28-20-28-40V18L48 8z" fill="#22c55e"/>
      <path d="M34 50l10 10 18-22" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function iconGlobe() {
  return `
    <svg class="ico" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" stroke="#9ca3af" stroke-width="2"/>
      <path d="M4 16h24M16 4v24" stroke="#9ca3af" stroke-width="2" opacity="0.8"/>
      <ellipse cx="16" cy="16" rx="6" ry="12" stroke="#9ca3af" stroke-width="2" opacity="0.8"/>
    </svg>
  `;
}

function iconSend() {
  return `<svg class="ico" viewBox="0 0 32 32" fill="none"><path d="M4 16l24-10-10 24-4-8-8-4z" fill="#9ca3af"/></svg>`;
}
function iconShareCircle() {
  return `<svg class="ico" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#9ca3af"/><path d="M12 20l8-8" stroke="#9ca3af" stroke-width="2"/></svg>`;
}
function iconCube() {
  return `<svg class="ico" viewBox="0 0 32 32" fill="none"><rect x="8" y="8" width="16" height="16" stroke="#9ca3af"/><path d="M16 8v16M8 16h16" stroke="#9ca3af"/></svg>`;
}
function iconLink() {
  return `<svg class="ico" viewBox="0 0 32 32" fill="none"><path d="M12 20l8-8M10 14a6 6 0 0 1 8-2M14 22a6 6 0 0 0 8-2" stroke="#9ca3af" stroke-width="2"/></svg>`;
}
function iconAa() {
  return `<svg class="ico" viewBox="0 0 32 32" fill="none"><path d="M6 24h20M10 22l6-12 6 12" stroke="#9ca3af" stroke-width="2"/></svg>`;
}
function iconBook() {
  return `<svg class="ico" viewBox="0 0 32 32" fill="none"><path d="M8 6h12a6 6 0 0 1 6 6v14H8a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z" stroke="#9ca3af"/></svg>`;
}
function iconWarn() {
  return `<svg class="ico" viewBox="0 0 32 32" fill="none"><path d="M16 6l12 20H4L16 6z" stroke="#9ca3af"/><circle cx="16" cy="22" r="2" fill="#9ca3af"/><path d="M16 12v6" stroke="#9ca3af" stroke-width="2"/></svg>`;
}
function iconQQ() {
  return `<svg class="ico" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="12" r="6" fill="#9ca3af"/><path d="M10 18c-3 3-4 7-4 10 4-2 8-2 10-2s6 0 10 2c0-3-1-7-4-10" fill="#9ca3af" opacity="0.8"/></svg>`;
}
function iconStar() {
  return `<svg class="ico" viewBox="0 0 32 32" fill="none"><path d="M16 4l4 8 8 2-6 6 2 8-8-4-8 4 2-8-6-6 8-2 4-8z" fill="#facc15"/></svg>`;
}

function renderGuide() {
  render(`
    <div class="card center">
      <div class="hero">
        <div class="hero-line">点击屏幕右上角 [ ... ]</div>
        <div class="hero-line sub">用 浏览器 打开</div>
      </div>
      <div class="shield">${iconShield()}</div>
      <div class="badge">已通过360安全检测</div>
      <div class="grid">
        <div class="grid-item">${iconSend()}<div class="label">发送给朋友</div></div>
        <div class="grid-item">${iconShareCircle()}<div class="label">分享到朋友圈</div></div>
        <div class="grid-item">${iconCube()}<div class="label">收藏</div></div>
        <div class="grid-item">${iconLink()}<div class="label">复制链接</div></div>
        <div class="grid-item highlight">${iconGlobe()}<div class="label">在浏览器打开</div></div>
        <div class="grid-item">${iconAa()}<div class="label">调整字体</div></div>
        <div class="grid-item">${iconBook()}<div class="label">优化阅读</div></div>
        <div class="grid-item">${iconWarn()}<div class="label">投诉</div></div>
        <div class="grid-item">${iconQQ()}<div class="label">分享到手机QQ</div></div>
        <div class="grid-item">${iconStar()}<div class="label">分享到QQ空间</div></div>
      </div>
      <div class="note">如未找到该选项：返回聊天界面，长按链接后选择用浏览器打开。</div>
    </div>
  `);
}

function main() {
  if (isInApp()) {
    renderGuide();
  } else {
    // 已在系统浏览器：无痕自动跳转到目标链接
    location.replace(TARGET_URL);
  }
}

main();