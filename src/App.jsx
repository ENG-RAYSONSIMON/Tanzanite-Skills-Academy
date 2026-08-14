import { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

const programIcons = {
  growth: <><path d="M12 22V10"/><path d="m19 9-7-7-7 7"/><path d="M5 22h14"/></>,
  finance: <><path d="M3 3v18h18"/><path d="m7 16 4-4 3 3 5-7"/></>,
  career: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></>,
  business: <><path d="M4 21V10l8-6 8 6v11"/><path d="M9 21v-6h6v6M8 10h.01M12 10h.01M16 10h.01"/></>,
  tech: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8M12 18v4M8 9l-2 2 2 2M16 9l2 2-2 2"/></>,
  leadership: <><circle cx="12" cy="8" r="3"/><path d="M6 21v-2a6 6 0 0 1 12 0v2M18 8a3 3 0 0 1 0 6M6 8a3 3 0 0 0 0 6"/></>,
};

const programs = [
  { icon: "growth", number: "01", title: "Maendeleo Binafsi", text: "Jenga kujiamini, nidhamu na mtazamo unaokusaidia kufikia malengo yako." },
  { icon: "finance", number: "02", title: "Fedha Binafsi", text: "Jifunze bajeti, uwekezaji na maamuzi mahiri ya fedha kwa maisha thabiti." },
  { icon: "career", number: "03", title: "Maendeleo ya Kazi", text: "Boresha CV, mawasiliano na mkakati wa kukuza taaluma yako sokoni." },
  { icon: "business", number: "04", title: "Biashara & Ujasiriamali", text: "Geuza wazo kuwa biashara yenye wateja, mifumo na uwezo wa kukua." },
  { icon: "tech", number: "05", title: "Ujuzi wa Kidijitali", text: "Tumia teknolojia, AI na zana za kisasa kufanya kazi kwa ufanisi zaidi." },
  { icon: "leadership", number: "06", title: "Uongozi", text: "Ongoza timu, simamia mabadiliko na ujenge utamaduni wa matokeo." },
];

function Icon({ name }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{programIcons[name]}</svg>;
}

function StorySection() {
  return (
    <section className="story section" id="kuhusu">
      <div className="container story-grid">
        <div className="story-visual reveal">
          <div className="story-orbit story-orbit-one" /><div className="story-orbit story-orbit-two" />
          <div className="story-gem"><span>TS</span><small>Academy</small></div>
          <div className="story-note"><span className="status-dot" /><div><strong>Ujuzi halisi</strong><small>kwa dunia halisi</small></div></div>
        </div>
        <div className="story-copy reveal">
          <p className="eyebrow">Sisi ni nani</p>
          <h2>Hatufundishi tu.<br/><em>Tunabadilisha mwelekeo.</em></h2>
          <p>Tanzanite Skills Academy ni mahali ambapo tamaa hukutana na maarifa ya vitendo. Tunawawezesha Watanzania kupata ujuzi unaohitajika leo—kwa maisha, kazi na biashara.</p>
          <div className="story-points">
            <div><span>✓</span><p><strong>Wakufunzi wenye uzoefu</strong><small>Maarifa yanayotoka moja kwa moja kwenye sekta.</small></p></div>
            <div><span>✓</span><p><strong>Mafunzo yenye vitendo</strong><small>Miradi, zana na mifano halisi—notisi pekee hazitoshi.</small></p></div>
            <div><span>✓</span><p><strong>Jumuiya inayokua pamoja</strong><small>Ushauri na mtandao unaoendelea baada ya darasa.</small></p></div>
          </div>
          <a className="text-link" href="#mawasiliano">Jua zaidi kuhusu sisi <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  const steps = [
    ["01", "Chagua njia yako", "Tafuta programu inayolingana na lengo lako."],
    ["02", "Jifunze kwa vitendo", "Fuata vipindi, miradi na ushauri wa wataalamu."],
    ["03", "Onyesha uwezo wako", "Jenga ushahidi wa ujuzi kupitia kazi halisi."],
    ["04", "Fungua fursa mpya", "Tumia ujuzi wako kukua kazini au kwenye biashara."],
  ];
  return (
    <section className="journey section" id="jinsi"><div className="container">
      <div className="section-heading centered reveal"><p className="eyebrow">Safari yako</p><h2>Hatua nne. <em>Mabadiliko makubwa.</em></h2><p>Tumefanya kujifunza kuwe rahisi, kueleweka na kuelekea kwenye matokeo.</p></div>
      <div className="journey-grid">{steps.map(([number, title, text], index) => <article className="journey-step reveal" key={number}><span className="step-number">{number}</span><div className="step-icon"><span>{index === 0 ? "⌁" : index === 1 ? "✦" : index === 2 ? "◇" : "↗"}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials section" id="ushuhuda"><div className="container testimonial-grid">
      <div className="testimonial-intro reveal"><p className="eyebrow">Dhamira yetu</p><h2>Matokeo yako ndiyo <em>hadithi yetu.</em></h2><p>Ujuzi unapogeuka kuwa ujasiri, fursa na biashara zinazokua, tunajua kazi imefanyika.</p><div className="rating-row"><strong>100%</strong><span>Vitendo<small>Maarifa yanayotumika</small></span></div></div>
      <figure className="testimonial-card reveal"><div className="quote-mark">“</div><blockquote>Tunataka kila mwanafunzi aondoke na zaidi ya cheti—aondoke na uwezo, mwelekeo na ujasiri wa kuchukua hatua inayofuata.</blockquote><figcaption><div className="avatar">TS</div><div><strong>Ahadi yetu kwako</strong><span>Tanzanite Skills Academy</span></div><div className="verified">✦ Jifunze. Badilika. Kua.</div></figcaption></figure>
    </div></section>
  );
}

function FaqSection() {
  const faqs = [
    ["Mafunzo yanafanyika kwa njia gani?", "Tunatoa mchanganyiko wa vipindi vya ana kwa ana na mtandaoni, kulingana na programu. Maelezo kamili hutolewa kabla ya usajili."],
    ["Nahitaji uzoefu wa awali?", "Hapana. Programu nyingi zimeundwa kuanzia msingi hadi matumizi ya vitendo. Tunakuongoza kuchagua kiwango kinachokufaa."],
    ["Nitapata cheti?", "Ndiyo, washiriki wanaokamilisha mahitaji ya programu hupokea cheti cha ushiriki na kukamilisha mafunzo."],
    ["Naweza kujifunza nikiwa nafanya kazi?", "Ndiyo. Ratiba zetu zimeundwa kuwafaa wanafunzi, wafanyakazi na wajasiriamali wenye majukumu mengine."],
  ];
  return (
    <section className="faq section" id="maswali"><div className="container faq-grid">
      <div className="faq-heading reveal"><p className="eyebrow">Maswali ya kawaida</p><h2>Una swali?<br/><em>Tuna jibu.</em></h2><p>Hujapata unachotafuta?</p><a href="https://wa.me/255749722722" target="_blank" rel="noreferrer" className="text-link">Ongea nasi WhatsApp <span>↗</span></a></div>
      <div className="faq-list reveal">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
    </div></section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("tsa-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("tsa-theme", theme); }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return <div className="site-shell"><NavigationBar theme={theme} onThemeChange={() => setTheme(theme === "light" ? "dark" : "light")} /><main><HeroSection /><ServicesSection programs={programs} Icon={Icon} /><StorySection /><JourneySection /><TestimonialsSection /><FaqSection /><ContactSection /></main></div>;
}
