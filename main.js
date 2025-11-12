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
        <div class="grid-item highlight">
          ${iconGlobe()}
          <div class="label">在浏览器打开</div>
        </div>
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