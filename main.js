const TARGET_URL = "https://ku36.me?inviterId=078a1ae27178493ba6ecd2fbf1c698a5";

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

function renderGuide() {
  const ios = isIOS();
  const android = isAndroid();
  const steps = ios
    ? [
        `${iconMore()}<div class="txt">点击右上角更多 …</div>`,
        `${iconSafari()}<div class="txt">选择“在 Safari 中打开”</div>`,
        `${iconSafari()}<div class="txt">切换到 Safari 后将自动跳转</div>`,
      ]
    : android
    ? [
        `${iconMore()}<div class="txt">点击右上角更多 …</div>`,
        `${iconChrome()}<div class="txt">选择“在浏览器中打开”（如 Chrome）</div>`,
        `${iconChrome()}<div class="txt">切换到浏览器后将自动跳转</div>`,
      ]
    : [
        `${iconMore()}<div class="txt">点击右上角更多 …</div>`,
        `${iconChrome()}<div class="txt">选择“在浏览器中打开”</div>`,
        `${iconChrome()}<div class="txt">切换到浏览器后将自动跳转</div>`,
      ];

  const selfUrl = location.href;
  render(`
    <div class="card">
      <div class="title">请使用手机默认浏览器打开</div>
      <div class="desc">检测到当前处于社交软件内置浏览器。请按提示在系统浏览器中打开，本页在浏览器中会自动跳转。</div>
      <div class="steps">
        ${steps
          .map(
            (s, i) => `
            <div class="step">
              <div class="no">${i + 1}</div>
              ${s}
            </div>`
          )
          .join("")}
      </div>
      <div class="actions">
        <button class="btn btn-primary" id="copySelf">复制当前页面链接</button>
      </div>
      <div class="note">提示：复制后到浏览器地址栏粘贴访问；或使用右上角“在浏览器打开”。</div>
    </div>
  `);

  document.getElementById("copySelf")?.addEventListener("click", () => copyText(selfUrl));
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