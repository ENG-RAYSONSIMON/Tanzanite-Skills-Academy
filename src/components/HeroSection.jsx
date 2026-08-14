import heroImage from "../assets/academy-hero.png";

export default function HeroSection() {
  return (
    <section className="hero" id="mwanzo"><div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" /><div className="container hero-grid">
      <div className="hero-copy reveal visible"><div className="hero-badge"><span>✦</span> Ujuzi wa leo. Fursa za kesho.</div><h1>Jifunze kwa vitendo.<br/><em>Badilisha maisha.</em></h1><p className="hero-lead">Jenga ujuzi unaohitajika katika kazi, biashara na maisha kupitia mafunzo ya vitendo yanayoongozwa na wataalamu.</p><div className="hero-actions"><a className="button" href="#programu">Gundua Programu <span>↗</span></a><a className="play-link" href="#kuhusu"><i>▶</i><span>Fahamu zaidi<small>Dakika 2</small></span></a></div><div className="hero-trust"><div className="avatar-stack"><span>JM</span><span>AK</span><span>SN</span><span>+</span></div><p><strong>Jumuiya ya kujifunza</strong><small>yenye malengo na mwelekeo</small></p><div className="mini-rating">SW <small>+ EN</small></div></div></div>
      <div className="hero-visual reveal visible"><div className="image-frame"><img src={heroImage} alt="Tanzanian learners working together at Tanzanite Skills Academy" /></div><div className="floating-card floating-top"><span className="live-dot" /><p><small>Usajili</small><strong>Umefunguliwa</strong></p></div><div className="floating-card floating-bottom"><div className="mini-gem">✦</div><p><strong>Jifunze popote</strong><small>Darasani + Mtandaoni</small></p></div><div className="hero-dots" /></div>
    </div><div className="container stats-strip"><div><strong>06</strong><small>Njia za ujuzi</small></div><i /><div><strong>Live</strong><small>Vipindi halisi</small></div><i /><div><strong>360<span>°</span></strong><small>Ukuaji kamili</small></div><i /><div><strong>Practical</strong><small>Kujifunza kwa vitendo</small></div></div></section>
  );
}
